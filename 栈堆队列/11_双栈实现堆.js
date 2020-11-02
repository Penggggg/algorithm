/**
 * 
 * @description
 * 
 * 题目：
 * 用2个栈实现一个队列。
 * 实现队列的2个函数：appendTail 和 deleteHead ，分别完成在队列尾部插入整数和在队列头部删除整数的功能
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 对外表现形式为队列，内部用一指针表示当前存储数据的栈
 * appendTail时，对ptr的Stack进行插入
 * deleteHead时，对ptr的Stack进行出栈，元素插到另一个Stack中，出栈到最后一个元素时，对外返回
 * 
 * 备注：5%、5%
 */
class CQueue {

    ptr = null;
    stack1 = [ ];
    stack2 = [ ];

    constructor( ) {
        this.ptr = this.stack1;
    }

    appendTail( val ) {
        this.ptr.unshift( val );
        return null;
    }

    deleteHead( ) {
        const { ptr, stack1, stack2 } = this;
        const temp = ptr === stack1 ? stack2 : stack1;
        if ( !ptr.length ) return -1;
        while ( ptr.length !== 1 ) {
            temp.push( ptr.shift( ));
        }
        const res = ptr.shift( );
        this.ptr = temp;
        return res;
    }
}

const q = new CQueue( );
console.log( q.appendTail(5))
console.log( q.appendTail(2))
console.log( q.appendTail(1))
console.log( q.deleteHead())
console.log( q.deleteHead())
console.log( q.deleteHead())