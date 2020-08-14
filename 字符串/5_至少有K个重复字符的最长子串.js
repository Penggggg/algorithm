/**
 * 
 * @description
 * 
 * 题目：
 * 找到给定字符串最长子串 T ， 要求 T 中的每一字符出现次数都不少于 k 。输出 T 的长度。
 * 
 * 输入:
    s = "ababbc", k = 2

    输出:
    5

    最长子串为 "ababb" ，其中 'a' 重复了 2 次， 'b' 重复了 3 次。
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 遍历一遍字符串，记录所有字符的出现次数）
 * 再重新遍历一遍字符串，当发现某个字符出现次数少于k时，则break；
 * 
 * 【此思路有问题！！！】
 */
var longestSubstring = function( s, k ) {
    const map = { }
    for ( let c of s ) {
        map[ c ] = map[ c ] === undefined ?
            1 : 
            map[ c ] + 1
    }
    for ( let i = 0; i < s.length; i++ ) {
        if ( map[ s[ i ]] < k ) {
            return i;
        }
    }
    return s.length
};


console.log( longestSubstring('ababacb', 3 )) // ==> 预期 0，

/**
 * 
 * @description
 * 
 * 思路：
 */