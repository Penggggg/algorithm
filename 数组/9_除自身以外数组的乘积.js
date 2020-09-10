/**
 * 
 * @description
 * 
 * 题目：
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output
 * output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
    输入: [1,2,3,4]
    输出: [24,12,8,6]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 总体思路，记录上次乘积，减少计算
 */
var productExceptSelf = function( nums ) {
    const total = nums.reduce(( p, c ) => p * c, 1 );
    const arr = new Array( nums.length ).fill( total );
    for ( let i = 0; i < nums.length; i++ ) {
        arr[ i ] = arr[ i ] / nums[ i ];
    }
    return arr
};

console.log( productExceptSelf([ 1, 2, 3, 4 ]))