/**
 * 
 * @description
 * 
 * 通过闭包先装在参数
 * 需要时才调用
 */
function curry( fun ) {
    const argArr = [ ]
    return function next( ...arg ) {
        if ( !!arg.length ) {
            argArr.push( arg );
            return next
        } else {
            return fun.apply( null, argArr );
        }
    }
}

function add( x, y ) {
    const res = x + y;
    console.log( res );
}

const c = curry( add );
c( 1 )
c( 2 )
c( )