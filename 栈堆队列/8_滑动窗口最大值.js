/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧
 * 你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 
 * 要求：
 * 线性复杂度
 * 
 *  输入: nums = [ 1,3,-1,-3,5,3,6,7] , 和 k = 3
    输出: [3,3,5,5,6,7] 
    解释: 

    滑动窗口的位置                最大值
    ---------------               -----
    [1  3  -1] -3  5  3  6  7      3
    1 [3  -1  -3] 5  3  6  7       3
    1  3 [-1  -3  5] 3  6  7       5
    1  3  -1 [-3  5  3] 6  7       5
    1  3  -1  -3 [5  3  6] 7       6
    1  3  -1  -3  5 [3  6  7]      7
 */


const { MaxHeap } = require('./3_实现大顶堆')
/**
 * 
 * @description
 * 
 * 思路：
 * 利用大顶堆偷懒
 * 
 * 备注
 * 超时，不通过
 */
var maxSlidingWindow1 = function( nums, k ) {
    const res = [ ];
    const maxHeap = new MaxHeap( );
    for( let i = 0; i <= nums.length - k; i++ ) {
        nums.slice( i, i + k )
            .map( n => maxHeap.push( n ))
        res.push( maxHeap.pop( ));
        maxHeap.clear( )
    }
    return res;
};


/**
 * 
 * @description
 * 
 * 思路：
 * 双端队列，总保持队列首部最大。队列存的是下标
 * 
 * 有点像动态规划
 * 
 * 效率：46%、28%
 */
var maxSlidingWindow = function( nums, k ) {
    const win = [ ], res = [ ];
    if ( nums.length < k ) return [ ];
    for ( let i = 0; i < nums.length; i++ ) { // 逐一入队列
        if ( win[ 0 ] !== undefined && win[ 0 ] <= i - k ) {  // 把窗口之外的元素剔除
            win.shift( );
        }
        while ( nums[ win[ win.length - 1 ]] < nums[ i ]){ // 插入新元素时，确保窗口头部是当前的最大值，因此需要不断比较将前方元素并条件删除
            win.pop( );
        }
        win.push( i ); // 插入的是下标
        if ( i >= k - 1 ) {
            res.push( nums[ win[ 0 ]]) // 结果
        }
    }
    return res;
}

console.log( 
    maxSlidingWindow(
        [ 1, 3, -1, -3, 5, 3, 6, 7 ],
        3
    )
)