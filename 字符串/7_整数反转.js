/**
 * 
 * @description
 * 
 * 题目：
 * 给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。
 * 
 * 输入: 123
   输出: 321

   输入: -123
   输出: -321

   输入: 120
   输出: 21
 */



/**
 * 
 * @description
 * 
 * 思路:
 * 转字符串处理，特殊处理：前面的符号
 */
const solution = x => {
    return Number( String( Math.abs( x )).split('').reverse( ).join('')) * ( x < 0 ? -1 : 1 )
}

console.log( solution( 123 ))