/**
 * 
 * @description
 * 
 * 题目：
 * 
 * 给定一个数字们按照如下规则把它翻译为字符串：
 * 0 翻译成 “a” ，1 翻译成 “b”，……，11 翻译成 “l”，……，25 翻译成 “z”。
 * 一个数字可能有多个翻译。请编程实现一个函数，用来计算一个数字有多少种不同的翻译方法。
 * 
  输入: 12258
  输出: 5
  解释: 12258有5种不同的翻译，分别是"bccfi", "bwfi", "bczi", "mcfi"和"mzi"
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 每次圈住1个或2个数字，求组合情况，有点类似于青蛙跳
 * 
 * 备注：90%、11%
 */
var translateNum = function( num ) {
  let res = 0;
  const dfs = s => {
    if ( !s ) return res++;
    dfs(s.substr(1)) // 情况1
    if ( s.length >= 2 ) {
      if (Number(s.substr(0,2)) <= 25 && !s.substr(0,2).startsWith('0')) { // 不能为25+，不能0开头
        dfs(s.substr(2)) // 情况2
      }
    }
  }
  dfs( String( num ))
  return res;
};

console.log( translateNum(506))