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
 * 1、数组dp（一维）。含义：跳上一个i级的台阶总共有dp[ i ]种跳法
 * 2、dp之间的关系。含义：dp[ n] = dp[ n-1] + dp[ n-2]（到达第 n 级的台阶有两种方式：分别从第 n-1、n-2 级跳上来）
 * 3、初始值。dp[ 0 ] = 0，dp[ 1 ] = 1，dp[ 2 ] = 2（这个很特殊）
 */

const Steps = n => { 
    
    if ( n <= 1 ) return n;

    // 初始值
    const dp = [ 0, 1, 2 ];

    // 推导
    for ( let i = 3; i <= n; i++ ) {
        dp[ i ] = dp[ i - 1 ] + dp[ i - 2 ];
    }
    return dp[ n ];
}

console.log( Steps( 10 ))

