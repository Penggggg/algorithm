/**
 * 
 * @description
 * 
 *  题目：
 *  整数数组 nums ，找到具有最大和的连续子数组（最少包含一个元素）
 * 
 *  输入: [ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]
    输出: 6
    解释: 连续子数组 [ 4, -1, 2, 1 ] 的和最大为 6。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 1维dp：下标为n时的前n项最大和
 * 
 * 推导：
 * dp[ n ] = Math.max( dp[ n − 1 ] + nums[ n ], nums[ n ])
 */
var maxSubArray = function( nums ) {
    const dp = [ nums[ 0 ]];
    for ( let i = 1; i <= nums.length - 1; i++ ) {
        dp[ i ] = Math.max( 
            dp[ i - 1 ] + nums[ i ], // 累加会继续变大
            nums[ i ] // 自己这个数才最大
        )
    }   
    return dp.sort(( x, y ) => -x + y )[ 0 ] // 找到dp的最大值
};

console.log( maxSubArray([ -2, 1, -3, 4, -1, 2, 1, -5, 4 ]))