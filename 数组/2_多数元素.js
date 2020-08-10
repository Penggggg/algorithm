/** 
 * 
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 ⌊ n/2 ⌋ 的元素(必须存在)
 * 
 * 输入: [ 2,2,1,1,1,2,2]
   输出: 2
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 因为大于一半, 所以排序后的 中间那个数必是
 */
var majorityElement = nums => {
    const sorted = nums.sort(( x, y ) => x - y );
    return sorted[ Math.floor( sorted.length / 2 )]
};