/**
 * 
 * @description
 * 
 * 题目：
 * 一只青蛙一次可以跳上1级台阶，也可以跳上2级。求该青蛙跳上一个n级的台阶总共有多少种跳法。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划：主问题可被拆解且解决过程是重复的思路、拥有无后向性
 * 
 * 步骤：
 * 定义dp、初始化dp、递推公式、终止条件
 * 
 * 递推：
 * dp( n ) = dp( n - 1 ) + dp( n - 2 )
 * 
 * 特殊：
 * dp[ 0 ]为哨兵变量
 */
var climbStairs = function( n ) {
    const dp = [ 0, 1 , 2 ]; // 初始化 + 哨兵变量
    for ( let i = 3; i <= n; i++ ) {
        dp[ i ] = dp[ i - 1 ] + dp[ i - 2 ]
    }
    return dp[ n ];
};

console.log( climbStairs( 10 ))