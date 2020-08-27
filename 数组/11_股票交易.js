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
 * 思路1：
 * 把斜率为正的线段列出，再把所有线段的价格差相加（线段不能相交）
 */
const solution = arr => {
    let s = 0;
    let e = 0;
    const lines = [ ];
    if ( !arr || arr.length === 1 ) return 0;
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[ i ] >= arr[ i - 1 ]) { // 线段还在上升
            e = i;
            if ( arr[ i + 1 ] === undefined ) { 
                if ( s !== e ) {
                    lines.push([ arr[ s ], arr[ e ]]);
                }
            }
        } else if ( arr[ i ] < arr[ i - 1 ]) { // 线段转折点
            if ( s !== e ) {
                lines.push([ arr[ s ], arr[ e ]]);
            } else {
                e = i;
            } 
            s = i; // 继续下一个线段
        }
    }
    return lines.reduce(( pre, cur ) => pre + ( cur[ 1 ] - cur[ 0 ]), 0 );
}

console.log( solution([ 7,1,5,3,6,4 ]))
console.log( solution([ 1,2,3,4,5 ]))
console.log( solution([ 7,6,4,3,1 ]))






/**
 * 
 * @description
 * 
 * 思路：
 * dp：只要今天比昨天价更高则赚： dp[ i ] = dp[ i-1 ] + 高出的价格
 * 类似于不断增加每天的差值
 */
const solution2 = arr => {
    let dp = 0;
    if ( !arr.length || arr.length === 1 ) return 0;
    for ( let i = 1; i < arr.length; i++ ) {
        if ( arr[ i ] > arr[ i - 1 ]) {
            dp += ( arr[ i ] - arr[ i - 1 ]);
        }
    }
    return dp
}