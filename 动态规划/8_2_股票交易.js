/**
 * 
 * @description
 * 
 * 题目：
    输入: [7,1,5,3,6,4]
    输出: 7
    解释: 在第 2 天（股票价格 = 1）的时候买入，在第 3 天（股票价格 = 5）的时候卖出, 这笔交易所能获得利润 = 5-1 = 4 。
         随后，在第 4 天（股票价格 = 3）的时候买入，在第 5 天（股票价格 = 6）的时候卖出, 这笔交易所能获得利润 = 6-3 = 3 。

    输入: [7,6,4,3,1]
    输出: 0
    解释: 在这种情况下, 没有交易完成, 所以最大利润为 0。
 */





/**
 * 
 * @description
 * 
 * 思路：
 * dp：只要今天比昨天价更高则赚： dp[ i ] = dp[ i-1 ] + 高出的价格
 * 类似于不断增加每天的差值
 */
const maxProfit = prices => {
    let dp = 0;
    if ( !prices.length || prices.length === 1 ) return 0;
    for ( let i = 1; i < prices.length; i++ ) {
        if ( prices[ i ] > prices[ i - 1 ]) {
            dp += ( prices[ i ] - prices[ i - 1 ]);
        }
    }
    return dp
}

console.log( maxProfit([ 7,1,5,3,6,4 ]))