const { ListNode } = require('./0');

/**
 * 
 * @description
 * 
 * 如题
 */


/**
 * 
 * @description
 * 
 * 思路1：
 * O( n )，遍历的时候就开始换方向
 * 
 * 细节：
 * 1、需要一个前置的哨兵变量
 * 2、返回的是原链尾
 */
var reverseList = function( head ) {
    let reverse = ( pre, cur ) => {
        if( !cur ) return pre; 
        const next = cur.next;
        cur.next = pre;
        return reverse( cur, next );
    }
    return reverse( null, head );
};

const n3 = new ListNode({ val: 3 })
const n2 = new ListNode({ val: 2, next: n3 })
const n1 = new ListNode({ val: 1, next: n2 })

console.log( reverseList( n1 ))