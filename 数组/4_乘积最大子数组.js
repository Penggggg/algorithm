/**
 * 
 * @description
 * 
 * 题目：
 * 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划，i（从0到n），
 * 
 * 因为nums[ i ]可能为负数、正数
 * 所以要记录 0 ～ i-1的极值（最大和最小），
 * dp[ i ]（最优解）= Math.max(
 *     preMax * nums[ i ], // 正常情况
 *     preMin * nums[ i ]，// 预防都是负数的情况
 *     nums[ i ]           // 预防此前都是小数的情况
 * )
 * 
 */
var maxProduct = function( nums ) {
    if ( nums.length === 1 ) return nums[ 0 ];

    let res = nums[ 0 ];
    let preMin = nums[ 0 ];
    let preMax = nums[ 0 ];

    for( let i = 1; i < nums.length; i++ ) {
        let temp1 = preMax * nums[ i ];
        let temp2 = preMin * nums[ i ];
        preMax = Math.max( temp1, temp2, nums[ i ]);
        preMin = Math.min( temp1, temp2, nums[ i ]);
        res = Math.max( res, preMax );
    } 

    return res
};

console.log( maxProduct([2,3,-2,4]))