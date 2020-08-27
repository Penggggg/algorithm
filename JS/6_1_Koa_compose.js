/**
 * @description
 * 以下代码不支持yield
 */

function *m1( next ) {
    console.log('m1 - 1');
    next.next( )
    console.log('m1 - 2');
}

function *m2( next ) {
    console.log('m2 - 1');
    next.next( )
    console.log('m2 - 2');
}

function compose( arr ) {
    return function ( ) {
        return arr.reduceRight(( pre, cur ) => {
            return cur.call( this, pre );
        }, ( function *( ) { })( ))
    }
}

const g = compose([ m1, m2 ])( );

g.next( )