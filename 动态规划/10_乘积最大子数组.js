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
 * 1维度dp，整体思路跟相加是一样的
 * 
 * 推导：
 * dp[ i ] = Max( dp[ i - 1 ] * nums[ i ], nums[ i ])
 * 
 * 优化：
 * dp = Max( dp * nums[ i ], dp )
 * 
 */

var maxProduct2 = function( nums ) {
    if ( !nums.length ) return 0;
    if ( nums.length === 1 ) return nums[ 0 ];

    let max = nums[ 0 ];
    let dp = [ nums[ 0 ]];
    for ( let i = 1; i < nums.length; i++ ) {
        dp[ i ] = Math.max(
            dp[ i - 1 ] * nums[ i ],
            nums[ i ]
        );
        max = Math.max( max, dp[ i ])
    }
    return max
};

console.log( maxProduct2([ 2, 3, -2, 4 ]))