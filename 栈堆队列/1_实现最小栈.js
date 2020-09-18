/**
 * 
 * @description
 * 
 * 题目：
 * 
    以下操作，都要为O( 1 )
    push( x ) —— 将元素 x 推入栈中。
    pop( ) —— 删除栈顶的元素。
    top( ) —— 获取栈顶元素。
    getMin( ) —— 检索栈中的最小元素。

    用例：
    minStack = new MinStack();
    console.log( minStack.push( -2 );
    console.log( minStack.push( 0 );
    console.log( minStack.push( -3 );
    console.log( minStack.getMin( );   --> 返回 -3.
    console.log( minStack.pop( );
    console.log( minStack.top( );      --> 返回 0.
    console.log( minStack.getMin( );   --> 返回 -2.
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 因为要常数级的查询效率，那肯定是空间换时间了。
 * 
 * 辅助栈：
 * 有点类似于dp，每次推入一个元素，就在dp推入一个当前最小的元素
 * 
 * 如：
 * push：-2
 * dp [ -2 ]
 * 
 * push: 0
 * dp [ -2, -2 ]
 * 
 * push: -7
 * dp [ -2, -2, -7 ]
 */
class MinStack {
    meta = [ ];
    dp = [ ];

    constructor( meta = [ ]) {
        this.meta = meta;
    }

    push( num ) {
        this.meta.push( num );
        if ( !this.dp.length ) {
            this.dp.push( num )
        } else {
            const last = this.dp[ this.dp.length - 1 ];
            this.dp.push( num < last ? num : last )
        }
    }

    getMin( ) {
        return this.dp[ this.dp.length - 1 ];
    }

    pop( ) {
        this.dp.pop( );
        this.meta.pop( )
    }

    top( ) {
        return this.meta[ this.meta.length - 1 ];
    }
}

let minStack = new MinStack();
console.log( minStack.push( -2 ));
console.log( minStack.push( 0 ));
console.log( minStack.push( -3 ));
console.log( minStack.getMin( ));   
console.log( minStack.pop( ));
console.log( minStack.top( ));      
console.log( minStack.getMin( ));   