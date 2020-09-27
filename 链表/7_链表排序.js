/**
 * 
 * @description
 * 
 * 题目：
 * 给链表进行排序，要求：O( nlogn )
 * 
 * 输入: 4->2->1->3
   输出: 1->2->3->4
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 归并排序
 * 
 * 1、每次递归，确认链表中点
 * 2、拆链表，“归”
 * 3、合有序链表
 */
var sortList = function(head) {
    
    const mergeSort = function( head ) {
        if( !head || !head.next ) {
            return head
        }
        let mid = middleNode( head )
        let temp = mid.next
        mid.next = null; // 断开
        let left = head, right = temp;
        return mergeTwoLists(
            mergeSort( left ),
            mergeSort( right )
        )
    }
    return mergeSort( head );
}

function middleNode( head ) {
    let fast = head, slow = head
    while( fast && fast.next && fast.next.next ) {
        slow = slow.next
        fast = fast.next.next
    }
    return slow
}

function mergeTwoLists ( l1, l2 ) {
    let preHead = new ListNode(-1);
    let cur = preHead;
    while( l1 && l2 ){
        if( l1.val < l2.val ) {
            cur.next = l1;
            l1 = l1.next;
        } else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }
    cur.next = l1 || l2;
    return preHead.next;
}

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

console.log( sortList({
    val: 4,
    next: {
        val: 2,
        next: {
            val: 1,
            next: {
                val: 3
            }
        }
    }
}))
