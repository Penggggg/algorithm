/**
 * 
 * @description
 * 手动实现instance
 */
function myInstanceof( left, right ) {
    if ( typeof left !== 'object' || left === null ) return false;
    while ( left ) {
        if ( left.__proto__ ===  right.prototype ) return true; // 原理 left.__proto__ === right.prototype
        left = left.__proto__;
    }
    return false;
}