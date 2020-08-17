/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 
 * 输入: nums = [1, 5, 1, 1, 6, 4]
   输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]

   输入: nums = [1, 3, 2, 2, 3, 1]
   输出: 一个可能的答案是 [2, 3, 1, 3, 1, 2]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 先给原数组排序，然后双指针在数组一头一尾，相互逼近并填充到新数组（这样就保证一大一小了）
 */
var wiggleSort = function( nums ) {
    const result = [ ]
    const arr = nums.sort(( x, y ) => x - y );
    while( !!arr.length ) {
        const s = arr.shift( );
        const b = arr.pop( );
        s !== undefined && result.push( s );
        b !== undefined && result.push( b );
    }
    return result
}; 

console.log( wiggleSort([ 1,5,1,1,6,4 ]))