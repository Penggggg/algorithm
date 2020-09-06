/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 
 * 链表: 1->2->3->4->5, 和 n = 2.
   当删除了倒数第二个节点后，链表变为 1->2->3->5.
 */


const { ListNode } = require('./0');



/**
 * 
 * @description
 * 
 * 思路：
 * 快慢指针
 * 细节：哨兵变量
 */
var removeNthFromEnd = function( head, n ) {
    let pre = new ListNode(-1);
    pre.next = head;
    let fast = pre;
    let slow = pre;
    while ( n-- ) {
        fast = fast.next;
    }
    while( !!fast.next ) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next; // 删除
    return pre.next;
};

console.log( removeNthFromEnd( new ListNode({ val: 1 })))