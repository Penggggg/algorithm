/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个 T 字符串和一个 S 字符串，在 T 字符串中找出 S 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 
 * 输入: T = "hello", S = "ll"
   输出: 2
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 双层遍历
 * 
 * 期间，第一层遍历可以减少比较范围
 * 第二层遍历，可用JS的原生字符串API简化逐个对比的过程
 */
var strStr = function( haystack, needle ) {
    if ( !haystack.length && !needle ) return 0;
    if ( haystack.length < needle.length ) return -1;
    for ( let i = 0; i <= haystack.length - 1 ; i++ ) { // 优化比较范围，不是(haystack.length-1)
        if ( haystack.substr( i, needle.length ) === needle ) return i; // 优化2，不需要在写for循环了，直接扣字符串
    }
    return -1;
}

console.log( strStr( 'hello', 'll' ))