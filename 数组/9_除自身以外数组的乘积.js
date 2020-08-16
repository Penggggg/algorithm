/**
 * 
 * @description
 * 
 * 题目：
 * 给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。
 * 
    输入: [1,2,3,4]
    输出: [24,12,8,6]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 拆分左右乘积，数i（ L：0～i-1，R：i+1～n ）
 * 总体思路，记录上次乘积，减少计算
 */
var productExceptSelf = function( nums ) {
    const length = nums.length;
    const answer = new Array( length );

    // answer[i] 表示索引 i 【左侧【所有元素的乘积
    answer[0] = 1;
    for (let i = 1; i < length; i++ ) {
        // 记录了上次记录
        answer[i] = nums[i - 1] * answer[i - 1];
    }

    // R 为右侧所有元素的乘积
    // 刚开始右边没有元素，所以 R = 1
    let R = 1;
    for (let i = length - 1; i >= 0; i--) {
        // 记录了乘积
        answer[i] = answer[i] * R;
        // R 需要包含右边所有的乘积，所以计算下一个结果时需要将当前值乘到 R 上
        R *= nums[i];
    }
    return answer;
};

console.log( productExceptSelf([ 1, 0 ]))
// console.log( productExceptSelf([ 0, 0 ]))
// console.log( productExceptSelf([ 1, 2, 3, 4 ]))