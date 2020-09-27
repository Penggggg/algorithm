/**
 * 
 * @description
 * 
 * 题目：
 * 找到2条链表的相交节点
 * 
 * 要求：空间O( 1 )
 * 
 * 链接：
 * https://leetcode-cn.com/leetbook/read/top-interview-questions/xan8ah/
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 双指针 + 消除公共长度
 */
var getIntersectionNode = function(headA, headB) {
    // 清除高度差
    let pA = headA, pB = headB
    while( pA || pB ) {
        if( pA === pB ) return pA
        pA = pA ? pA.next : headB
        pB = pB ? pB.next : headA
    }
    return null
};

const com = { val: 1 }
console.log( getIntersectionNode(
    { val: 2, next: com },
    { val: 2, next: com }
))