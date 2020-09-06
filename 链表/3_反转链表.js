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
    let pre = null;
    let ptr = head;
    while ( !!ptr ) {
        const next = ptr.next;
        ptr.next = pre;
        pre = ptr;
        ptr = next;
    }
    return pre;
};

const n3 = new ListNode({ val: 3 })
const n2 = new ListNode({ val: 2, next: n3 })
const n1 = new ListNode({ val: 1, next: n2 })

console.log( reverseList( n1 ))