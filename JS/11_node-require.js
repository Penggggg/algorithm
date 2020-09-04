
/**
 * 
 * @description
 * 需实现：缓存功能、Cjs
 */
function $require( name ) {
    const fs = require('fs');
    const path = require('path');
    const filename = path.join( __dirname, name );

    // 异常情况
    if ( !fs.existsSync( filename )) return;
    // 缓存
    if ( !!$require.caches[ filename ]) return $require.caches[ filename ].exports;

    // 读文件、提供cjs环境
    const module = { id: filename, exports: { }};
    const code = fs.readFileSync( filename, 'utf-8' );
    const cjsCode = `(function( require, module, exports, dirname ){
        ${code}
    }( $require, module, module.exports, path.dirname( filename )))`;

    eval( cjsCode );

    $require.cache[filename] = module;
    return module.exports;
}