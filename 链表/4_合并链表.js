const { ListNode } = require('./0');

/**
 * 
 * @description
 * 
 * 题目：
 * 将两个升序链表合并为一个新的 升序 链表并返回
 * 
 * 输入：1->2->4, 1->3->4
   输出：1->1->2->3->4->4
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 有点像归并排序：进入下一个环节之前，先粗略完成一个小排序
 */
var mergeTwoLists = function( l1, l2 ) {
    const merge = ( l1, l2 ) => {
        if ( !l2 ) return l1;
        if ( !l1 ) return l2;
        if ( l1.val < l2.val ) {
            l1.next = merge( l1.next, l2 );
            return l1;
        } else {
            l2.next = merge( l2.next, l1 );
            return l2;
        }
    }
    return merge( l1, l2 );
};