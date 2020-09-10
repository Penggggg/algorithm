/**
 * 
 * @description
 * 
 * 题目：
   给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n）
   可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。


 * 
输入: [1,3,4,2,2]
输出: 2

输入: [3,1,3,4,2]
输出: 3
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 二分查找，也能对无序集合二分
 * 
 * 
 * 猜一个数mid，
 * 统计原始数组中，大于等于这个中间数的元素的个数cnt，如果cnt大于mid
 * 则可以缩小集合 low = mid + 1
 */
var findDuplicate = function( nums ) {
    let low = 1;
    let high = nums.length - 1;
    while ( low < high ) { // 在循环中缩小区间
        let count = 0
        let mid = ( low + high ) >> 1 // 中位数
        for ( let i = 0; i < nums.length; i++ ) { // 统计
            if ( nums[ i ] <= mid ) count++ 
        }
        if ( count > mid ) { // 重复数落在 [ 1, mid ]
            high = mid       // 区间收缩
        } else {           // 落在 [mid+1,n]
            low = mid + 1    // 区间收缩
        }
    }
    return low
};

console.log( findDuplicate([ 3, 1, 3, 4, 2 ]))