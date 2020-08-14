/**
 * 
 * @description
 * 核心：
 * 通过闭包对已ok的数量进行记录
 */

function MyPromise( ) { }

MyPromise.all = function( promises ) {
    return new MyPromise( r => {
        let result = [ ];
        promises.map(( p, k ) => {
            p.then( data => {
                result.splice( k, 1, data );
                result.length === promises.length && r( result )
            })
        })
    });
}