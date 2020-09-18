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
 * 题目虽然要求是 O( n )，但是遍历几次也是在这个范围以内的
 * 
 * 因此所以可以从左到右、从右到左共2次遍历
 */
var productExceptSelf = function( nums ) {

    const size = nums.length;
    const answer = new Array( size );

    // answer[ i ] 表示索引 i 左侧所有元素的乘积
    // 因为索引为 '0' 的元素左侧没有元素， 所以 answer[0] = 1
    answer[ 0 ] = 1;
    for ( let i = 1; i < size; i++ ) {
        answer[ i ] = nums[ i - 1 ] * answer[ i - 1 ];
    }

    // R 为右侧所有元素的乘积
    // 刚开始右边没有元素，所以 R = 1
    let R = 1;
    for (let i = size - 1; i >= 0; i-- ) {
        // 对于索引 i，左边的乘积为 answer[i]，右边的乘积为 R
        answer[ i ] = answer[ i ] * R;
        R *= nums[ i ];
    }
    return answer;
};

console.log( productExceptSelf([ 1, 2, 3, 4 ]))