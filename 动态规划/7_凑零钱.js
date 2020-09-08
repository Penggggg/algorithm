/**
 * 
 * @description
 * 
 * 题目：
 * 给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

    输入: coins = [1, 2, 5], amount = 11
    输出: 3 
    解释: 11 = 5 + 5 + 1
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1维dp
 * 
 * 拆解：
 * N = 一个整数的平方X + 另一个整数Y；
 * 子问题：求另一个整数Y的最优凑零钱解
 * 
 * 
 *  拿11举例，零钱为[ 1, 2, 5 ]
 *  11 = (1) + 10
    11 = (2) + 9
    11 = (5) + 6
    10、9、6中谁的解最优，那么11的解就是它 + 1（拿了一张币凑数)
 */
var coinChange = function( coins, amount ) {

    const dp = new Array( amount + 1 ).fill( 0 );

    for ( let i = 1; i <= amount; i++ ) {
        dp[ i ] = Infinity;
        for ( let coin of coins ) { // 遍历所有可能
            if ( i - coin >= 0 ) { // 某个纸币的面值小于等于目标面值，才能进行“凑”
                dp[ i ] = Math.min( 
                    dp[ i ], 
                    dp[ i - coin ] + 1 
                )
            }
        }
    }
    return dp[ amount ] === Infinity ? -1 : dp[ amount ];
};

console.log( coinChange([ 1, 2, 5 ], 11 ))
