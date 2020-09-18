/**
 *
 * @description
 * 
 * 题目：
 * 给定一个 n x n 矩阵，其中每行和每列元素均按升序排序，找到矩阵中第 k 小的元素。
 * 
 * matrix = [
        [ 1,  5,  9],
        [10, 11, 13],
        [12, 13, 15]
   ],
   k = 8,
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 以（ 0, 0 ）为原点的广度优先遍历
 * 
 * 该思路错误，存在缺陷
 */


const { MinHeap } = require('./2_实现小顶堆');
/**
 * 
 * @description
 * 
 * 思路：
 * 把所有数据加入小顶堆，并不断pop
 * 
 * 备注：
 * 通过，但效率奇差，8%、23%
 */
var kthSmallest1 = function( matrix, k ) {
    const size = matrix.length;
    const minHeap = new MinHeap( );
    for ( i = 0; i < size; i++ ) {
        for ( j = 0; j < size; j++ ) {
            minHeap.push( matrix[ i ][ j ])
        }
    }
    for( let i = 1; i < k; i++ ) {
        minHeap.pop( );
    }
    return minHeap.pop( );
};


/**
 * 
 * @description
 * 
 * 题目：
 * 针对于小顶堆的优化
 * 
 * 链接：
 * https://leetcode-cn.com/problems/kth-smallest-element-in-a-sorted-matrix/solution/shi-yong-dui-heapde-si-lu-xiang-jie-ling-fu-python/
 * 
 * 备注：
 * 无太大变化 = =， 9%、23%
 */
var kthSmallest = function( matrix, k ) {
    const size = matrix.length;
    const minHeap = new MinHeap( );
    const ptrArr = new Array( size ).fill( 0 ); // 每一行的候选人指针
    for ( let i = 0; i < size; i++ ) { // 初始化第一列
        minHeap.push( matrix[ i ][ 0 ])
    }
    for ( let i = 1; i < k; i++ ) { // pop k-1个，结果就可以直接return第k个了
        const cur = minHeap.pop( );
        const findRow = target => { // 找到pop出来的这个最小值在第几行
            for ( let r = 0; r < size; r++ ) {
                if ( matrix[ r ][ ptrArr[ r ]] === target ) return r;
            }
        }
        const row = findRow( cur );
        const nextCol = ptrArr[ row ] + 1;
        ptrArr[ row ] = nextCol;
        const next = matrix[ row ][ nextCol ];
        
        if ( next !== undefined ) { // 把该行的下一个元素，添加为新的候选人
            minHeap.push( next );
        }
    }
    return minHeap.pop( );
}

// console.log( kthSmallest(
//     [
//         [ 1,  5 ],
//         [ 10, 11 ]
//     ],
//     4
// ))

// console.log( kthSmallest(
//     [
//         [ 1,  5,  9  ],
//         [ 10, 11, 13 ],
//         [ 12, 13, 15 ]
//     ],
//     8     
// ))

console.log( kthSmallest(
    [
        [ 1, 3, 5 ],
        [ 6, 7, 12 ],
        [ 11, 14, 14 ]
    ],
    3    
))