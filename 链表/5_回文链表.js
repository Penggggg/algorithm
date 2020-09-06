const { ListNode } = require('./0');


/**
 * 
 * @description
 * 
 * 题目：
 * O( n )时间，O( 1 )空间
 * 判断是否为回文
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 快慢指针，先找到中点，然后反转上半段
 * 
 * 细节：分奇偶，反转下半段
 */
var isPalindrome = function( head ) {

    if ( !head || !head.next ) return true; // 长度0、1
   
    let start = new ListNode({ val: -1 });
    start.next = head;

    let part_1;
    let part_2;
    let slow = start;
    let fast = start;

    while ( !!fast && !!fast.next ) { // 找到中点

        const slowNext = slow.next;
        const fastNext = fast.next.next;

        slow = slowNext;
        fast = fastNext; 

        part_1 = slow; // 两段
        part_2 = slow.next;
    }

    let p1 = head;
    let p2 = reverseList( part_2 ) // 反转下半段
    
    while ( p1 && p2 ) {
        if ( p1.val !== p2.val ) return false;
        p1 = p1.next;
        p2 = p2.next;
    }
    return true;
};

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

const n4 = new ListNode({ val: 4 })
const n3 = new ListNode({ 
    val: 3,
    next: n4
})
const n2 = new ListNode({ 
    val: 2,
    next: n3
})
const n1 = new ListNode({ 
    val: 1, 
    next: n2 
})

console.log( 'res: ', isPalindrome( n1 ))