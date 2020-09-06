const { ListNode } = require('./0');

/**
 * 
 * @description
 * 
 * 判断是否有环
 */


/**
 * 
 * @description
 * 
 * 思路1:
 * 操场跑步，快慢指针
 * 
 * 思路2:
 * map记录
 */
var hasCycle = function( head ) {
    const map = new WeakMap( );
    while ( head ) {
        if ( map.has( head )) return true;
        map.set( head, 1 );
        head = head.next;
    }
    return false;
};