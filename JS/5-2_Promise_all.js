/**
 * 
 * @description
 * 核心：
 * 通过闭包对已ok的数量进行记录
 */

function MyPromise( ) { }

MyPromise.all = function( list ) {
    return new Promise(( r, j ) => {
        let count = 0;
        let res = [ ];
        for ( let [ i, p ] of list ) {
            // 防止可能不是Promise类型
            Promise.resolve( p ).then( res => {
                count++;
                res[ i ] = res;
                if ( count === list.length ) {
                    r( res )
                }
            }, err => {
                j( err )
            })
        }
    })
}