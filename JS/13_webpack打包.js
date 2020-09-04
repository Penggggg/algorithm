//导入包
const fs = require('fs')
const path = require('path')
const parser = require('@babel/parser')
const traverse = require('@babel/traverse').default
const babel = require('@babel/core')

function stepOne( filename ){
    //读入文件
    const content =  fs.readFileSync( filename, 'utf-8' )
    const ast = parser.parse( content, {
        sourceType: 'module'//babel官方规定必须加这个参数，不然无法识别ES Module
    })
    const dependencies = { }

    // //遍历AST抽象语法树
    traverse( ast, {
        //获取通过import引入的模块
        ImportDeclaration({ node }){
            const newFile = './' + path.join( path.dirname( filename ), node.source.value )
            //保存所依赖的模块
            dependencies[ node.source.value ] = newFile
        }
    })

    // //通过@babel/core和@babel/preset-env进行代码的转换
    const { code } = babel.transformFromAst(ast, null, {
        presets: ["@babel/preset-env"]
    })

    return{
        filename,//该文件名
        dependencies,//该文件所依赖的模块集合(键值对存储)
        code//转换后的代码
    }
}

const s1 = stepOne('./13_webpack/index.js')
console.log( s1 )