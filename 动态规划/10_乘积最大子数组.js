/**
 * 
 * @description
 * 
 * 题目：
 * 给你一个整数数组 nums ，
 * 找出数组中乘积最大的连续子数组，并返回该子数组所对应的乘积。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 1维度dp，整体思路跟相加是一样的，
 * 但要注意：由于是乘法，可能会存在正负相关的反转
 * 
 * 推导：
 * dp = Max( 
 *      min * nums[ i ],
 *      max * nums[ i ],
 *      nums[ i ],
 *      dp
 * )
 * 
 * 
 */

var maxProduct = function( nums ) {
    let dp = nums[ 0 ]
    let min = nums[ 0 ] // 需要额外记录min
    let max = nums[ 0 ]
    for ( let i = 1; i < nums.length; i++ ) {
        let temp1 = min * nums[ i ];
        let temp2 = max * nums[ i ];
        min = Math.min( temp1, temp2, nums[ i ]); 
        max = Math.max( temp1, temp2, nums[ i ]); // 预防2个负数相乘
        dp = Math.max( max, dp );
    }
    return dp
};

// console.log( maxProduct([ -2, 3, -4 ]))
console.log( maxProduct([ 2, 3, -2 ]))
// console.log( maxProduct([ -2, 0, -1 ]))