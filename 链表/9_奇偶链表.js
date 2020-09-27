/**
 * 
 * @description
 * 
 * 题目：
 * 给一个链表，把所有的奇数节点和偶数节点分别排在一起，且保持之前相对顺序
 * 
 * 输入: 2->1->3->5->6->4->7->NULL 
   输出: 2->3->6->7->1->5->4->NULL
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 类似于双指针，拿到奇偶的链头
 * 分别通过 ptr.next = ptr.next.next 来连接下一个奇/偶元素
 * 最后再将2条奇偶链，连接起来
 */
var oddEvenList = function( head ) {
    if ( !head ) return null;
    let odd = head;
    let oddS = head;
    let lastOdd = head;
    let even = head.next;
    let evenS = head.next;
    while ( odd && even ) {
        const oddNext = odd.next ? odd.next.next : null;
        odd.next = oddNext;
        odd = oddNext;
        if ( oddNext ) lastOdd = oddNext;

        const evenNext = even.next ? even.next.next : null;
        even.next = evenNext;
        even = evenNext;
    }
    lastOdd.next = evenS;
    return oddS;
};

console.log( JSON.stringify( oddEvenList({
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: {
                    val: 5,
                    next: {
                        val: 6,
                        next: {
                            val: 7
                        }
                    }
                }
            }
        }
    }
})))