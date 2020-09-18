/**
 * 
 * @description
 * 
 * 题目：
 * 在未排序的数组中找到第 k 个最大的元素，需要用到栈/队列/堆
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 优先队列，且队列长度为k
 * 
 * 当条件为最大xxx时，应该采用小顶堆
 * 对比顶部，比它大则可插入
 */
const { MinHeap } = require('./2_实现小顶堆');

class PriorityQueue {

    max; // 既然是队列，那必然有容量
    minHeap;

    constructor( max = 999 ) {
        this.max = max;
        this.minHeap = new MinHeap( );
    }

    add( num ) { // 如果超出队列长度，则对比堆顶，判断是否需要删除堆顶，然后插入
        const heap = this.minHeap;
        const size = heap.size( );
        if ( size >= this.max ) {
            if ( num <= heap.top( )) return;
            heap.pop( );
            heap.push( num );
        } else {
            heap.push( num );
        }
    }

    getData( ) {
        return this.minHeap.meta
    }
}

var findKthLargest = function( nums, k ) {
    const queue = new PriorityQueue( k );
    nums.map( n => queue.add( n ))
    const res = queue.getData( );
    console.log( res )
    return Math.min.apply( Math, res )
};


// console.log( findKthLargest(
//     [ 3, 2, 1, 5, 6, 4 ],
//     2
// ))

console.log( findKthLargest(
    [ 3,2,3,1,2,4,5,5,6 ],
    4
))