/**
 * 
 * @description
 * 
 * 题目：
 * 最多只能完成一笔交易，求买卖股票的最佳时机
 * 
 * 价格数组：
 * 输入: [ 7, 1, 5, 3, 6, 4 ]
   输出: 5
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划的本质就是，枚举所有结果，因此：
 * 
 * 每天尝试性买入，看看之后哪一天卖出可以获利、获取多少
 */
var maxProfit = function( prices ) {
    let max = 0;
    if ( !prices.length || prices.length === 1 ) return 0;
    for ( let i = 0; i <= prices.length - 2; i++ ) {
        for ( let j = i + 1; j <= prices.length - 1; j++ ) {
            if ( prices[ j ] > prices[ i ]) {
                max = Math.max( max, prices[ j ] - prices[ i ]);
            }
        }
    }
    return max;
};

console.log( maxProfit([ 7, 1, 5, 3, 6, 4 ]))