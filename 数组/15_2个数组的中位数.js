/**
 * 
 * @description
 * 
 * 题目：
 * 给定两个数组 nums1 和 nums2
 * 
   找出这两个正序数组的中位数
   要求：O(log(m + n))。
 */


/**
 * 
 * @description
 * 
 * 思路：
 * log相关的肯定是2分法了，问题是如何做到2个数组的2分
 * 核心是：每轮排除一半
 * 
 * 视频：
 * https://leetcode-cn.com/problems/median-of-two-sorted-arrays/solution/di-k-xiao-shu-jie-fa-ni-zhen-de-dong-ma-by-geek-8m/
 */
var findMedianSortedArrays = function( nums1, nums2 ) {
    [ nums1, nums2 ] = sortArr( nums1, nums2 ); // 预处理，确保第一个数组长度比第二个短
    const m = nums1.length;
    const n = nums2.length;
    const isOdd = !(( m + n ) % 2 ); //  是否为奇
    let k = Math.floor( ( m + n ) / 2 ); // 中位
    
};

function sortArr( nums1, nums2 ) {
    if ( nums1.length > nums2.length ) {
        [ nums1, nums2 ] = [ nums2, nums1 ];
    }
    return [ nums1, nums2 ];
}