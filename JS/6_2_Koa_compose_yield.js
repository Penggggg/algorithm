/**
 * @description
 * 支持yield
 */

function *m1( next ) {
    console.log('m1 - 1');
    yield next.next( )
    console.log('m1 - 2');
}

function *m2( next ) {
    console.log('m2 - 1');
}

function compose( arr ) {
    return function ( ) {
        return arr.reduceRight(( pre, cur ) => {
            return cur.call( this, pre );
        }, ( function *( ) { })( ))
    }
}

function run( fn ) {
    let gen = fn( );
    function next( data ) {
        const { value, done } = gen.next( data );
        if ( done ) return;
        next( value );
    }
    next( );
}

run( compose([ m1, m2 ]))
