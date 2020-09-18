/**
 * 
 * @description
 * 
 * 题目：
 * 
    设计以下操作，在常数时间内检索到最小元素的栈。
    push(x) —— 将元素 x 推入栈中。
    pop() —— 删除栈顶的元素。
    top() —— 获取栈顶元素。
    getMin() —— 检索栈中的最小元素。

    用例：
    minStack = new MinHeap();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin();   --> 返回 -3.
    minStack.pop();
    minStack.top();      --> 返回 0.
    minStack.getMin();   --> 返回 -2.
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 用数组映射小顶堆的结构
 */
class MinHeap {

    meta = [ ];

    constructor( meta = [ ]) {
        this.meta = meta;
    }

    push( num ) {
        this.meta.push( num );
        this.up( this.meta.length - 1 );
    }

    getMin( ) { // 检索栈中的最小元素
        return this.meta[ 0 ]
    }

    top( ) { // 获取栈顶元素
        return this.meta[ 0 ]
    }

    pop( ) { // 删除栈顶的元素
        const res = this.meta[ 0 ];
        this.swap( 0, this.meta.length - 1 );
        this.meta.pop( );
        this.down( 0 );
        return res;
    }

    size( ) { // 长度
        return this.meta.length
    }

    clear( ) {
        this.meta = [ ]
    }

    parent( Index ) {
        return Math.floor(( Index - 1 ) / 2 );
    }

    left( Index ) {
        return Index * 2 + 1;
    }

    right( Index ) {
        return Index * 2 + 2;
    }

    swap( i, j ) {
        if ( i === j ) return;
        const m = this.meta;
        [ m[ i ], m[ j ]] = [ m[ j ], m[ i ]];
    }

    up( Index ) {
        const m = this.meta;
        const pIndex = this.parent( Index );
        if ( pIndex !== -1 && m[ pIndex ] > m[ Index ]) {
            this.swap( Index, pIndex );
            this.up( pIndex )
        }
    }

    down( Index ) {
        // 左右子节点，不一定存在
        // 找出3个数中的最小值，而不能仅选则小的
        const next = this.findMinIndex( Index, this.left( Index ), this.right( Index ))
        if ( next !== undefined && Index !== next ) {
            this.swap( Index, next );
            this.down( next );
        }
    }

    findMinIndex( i, j, k ) {
        let min = Infinity;
        let index = undefined;
        const m = this.meta;
        [ i, j, k ]
            .filter( x => m[ x ] !== undefined )
            .map( x => {
                if ( m[ x ] < min ) {
                    min = m[ x ];
                    index = x;
                }
            });
        return index;
    }
}

exports.MinHeap = MinHeap;

// let test = new MinHeap( );
// test.push( 3 )
// test.push( 1 )
// test.push( 2 )
// test.push( 4 )

// console.log( test.meta )

// test.pop( )

// console.log( test.meta )










