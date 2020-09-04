//导入包
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

/** 给单个文件进行依赖分析、代码编译 */
function stepOne( filename ){

    const content =  fs.readFileSync( filename, 'utf-8' )
    const ast = parser.parse( content, { // 读入文件，生成ast
        sourceType: 'module'// babel官方规定必须加这个参数
    })
    const dependencies = { }

    traverse( ast, {  //遍历AST
        ImportDeclaration({ node }){ // 通过此构造，获取ast中属于模块定义的ast
            // 基于此文件路径的，依赖文件相对路径
            dependencies[ node.source.value ] = './' + path.join( path.dirname( filename ), node.source.value )
        }
    })

    // 通过babel，给原始ast进行编译
    const { code } = babel.transformFromAst( ast, null, {
        presets: ["@babel/preset-env"]
    })

    return{
        code,
        filename,
        dependencies
    }
}

/** 通过入口文件，生成整个依赖图 */
function stepTwo( entryFile ) {

    // 这个数组是核心
    const graphArr = [ stepOne( entryFile )]

    for( let i = 0; i < graphArr.length; i++ ) {
        const { dependencies } = graphArr[ i ];
        for( let j in dependencies ) {
            graphArr.push( // 这个是递归的关键
                stepOne( dependencies[ j ])
            )
        }
    }
    //接下来生成图谱
    const graph = { }
    graphArr.forEach( item => {
        graph[ item.filename ] = item
    })
    return graph
}

// 下面是生成代码，需要手动实现require
function stepThree( entry ) {
    //要先把对象转换为字符串，不然在下面的模板字符串中会默认调取对象的toString方法，参数变成[Object object],显然不行
    const graph = stepTwo( entry );
    const graphStr = JSON.stringify( graph )
    console.log( graph )
    return `
        (function( graph ) {
            // require函数的本质是执行一个模块的代码，然后将相应变量挂载到exports对象上
            function require( module ) {
                // localRequire的本质是拿到依赖包的exports变量
                function localRequire( relativePath ) {
                    return require( graph[ module ].dependencies[ relativePath ]);
                }
                var exports = { };
                (function( require, exports, code ) {
                    eval( code );
                })( localRequire, exports, graph[ module ].code );
                return exports;
            }
            require('${entry}')
        })(${graphStr})`
}

const s1 = stepOne('./13_webpack/index.js')
// console.log( s1 )

const s2 = stepTwo('./13_webpack/index.js')
// console.log( s2 )

const s3 = stepThree('./13_webpack/index.js');
// console.log( s3 )

// 3-2、把以上内容写入dist.js
// fs.writeFileSync('./dist.js', s3 );