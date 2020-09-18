/**
 * 
 * @description
 * 
 * 题目：
 * [ 2, 3, 4 ] 的中位数是 3，[ 2,3 ] 的中位数是2.5
 * 
 *  设计以下操作：
    addNum( num ) - 添加一个整数
    findMedian() - 返回目前所有元素的中，排序后的中位数！！！

    addNum( 1 )
    addNum( 2 )
    findMedian( ) -> 1.5
    addNum( 3 ) 
    findMedian( ) -> 2
 */




/**
 * 
 * @description
 * 
 * 思路1：
 * 类似于dp，实时动态地存储当前的mid中位下标，
 * 且每次插入都要进行快排
 * 
 * 备注：
 * leetcode上通过，但均 5%，效率很差
 */
class MedianFinder1 {

    meta;
    mid = 1;
    constructor( meta = [ ]) {
        this.meta = meta;
    }

    addNum( num ) {
        this.meta = [ ...this.meta, num ].sort(( x, y ) => x - y );
        this.mid = Math.floor(( this.meta.length - 1 ) / 2 );
    }

    findMedian( ) {
        const m = this.meta;
        const isOdd = m.length % 2 !== 0;
        if ( isOdd ) {
            return m[ this.mid ]
        } else {
            return ( m[ this.mid ] + m[ this.mid + 1 ]) / 2;
        }
    }
}



/**
 * 
 * @deprecated
 * 
 * 思路：
 * 由于仅关心中位数，相当于仅关心排序数组的中间2个元素（或1个）
 * 把排序数组对半切分，左边是大顶堆，右边是小顶堆，中位数取它们堆顶之和即可
 * 
 * 注意点：
 * 数据流动要保持平衡（红黑树的自适应）
 * 1、大顶堆堆顶 比 小顶堆堆顶，要小
 * 2、大顶堆size 最多只能比 小顶堆size，多1
 * 3、为保持排序顺序，插入流程相对不简单
 * 
 * 备注：
 * 通过，40%、50%，效率极大提升，原因还是在O(1)的读取堆的极值
 */
const { MinHeap } = require('./2_实现小顶堆');
const { MaxHeap } = require('./3_实现大顶堆');

class MedianFinder {

    minHeap;
    maxHeap;
    constructor( ) {
        this.minHeap = new MinHeap( );
        this.maxHeap = new MaxHeap( );
    }

    sizeOdd( ) { // 奇
        return (( this.minHeap.size( ) + this.maxHeap.size( )) % 2 ) === 1;
    }

    addNum( num ) {
        // 如果是奇数，插入流程是 大顶堆.add -> 大顶堆.pop( ) -> 小顶堆.add( xx )
        // 如果是偶数，插入流程是 大顶堆.add -> 大顶堆.pop( ) -> 小顶堆.add( xx ) -> 小顶堆pop( ) -> 大顶堆.add( yy )
        const max = this.maxHeap;
        const min = this.minHeap;
        const isOdd = this.sizeOdd( );

        max.push( num );
        min.push( max.pop( ));
        if ( !isOdd ) {
            max.push( min.pop( ))
        }
    }

    findMedian( ) {
        if ( this.sizeOdd( )) {
            return this.maxHeap.top( );
        } else {
            return ( this.maxHeap.top( ) + this.minHeap.top( )) / 2;
        }
    }

    log( ) {
        console.log('max: ', this.maxHeap.meta );
        console.log('min: ', this.minHeap.meta );
    }
}

const test = new MedianFinder( );

test.addNum( 1 )
test.addNum( 2 )
// test.log( );
console.log( test.findMedian( ))

test.addNum( 3 )
// test.log( );
console.log( test.findMedian( ))