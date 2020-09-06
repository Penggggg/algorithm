/**
 * 
 * @description
 * 
 * 题目：
 * 对于一个链表 head = [4,5,1,9], 只给定需要删除的节点 node = 5，要求变成了 [4,1,9]
 */


const { ListNode } = require('./0');

/**
 * 
 * @description
 * 
 * 思路：
 * 由于只给一个需要删除的节点，
 * 因此只能伪装自己被删掉，即：
 * 把自身节的值替换为下个节点的值、next指向下下个节点
 */
var deleteNode = function( node ) {
    node.val = node.next.val;
    node.next = node.next.next;
};