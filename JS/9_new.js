function A( name ) {
    this.name = name;
}

function myNew( fun, ...arg ) {
    const obj = new Object( );
    fun.apply( obj, arg );
    obj.__proto__ = fun.prototype;
    return obj
}

console.log( myNew( A, '呵呵' ))