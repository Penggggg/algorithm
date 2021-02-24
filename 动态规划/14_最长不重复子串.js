/**
 * 
 * @description
 * 从字符串中找出一个最长的不包含重复字符的子字符串

    输入: "pwwkew"
    输出: 3
    解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
         请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 
 * 一维度dp，i为当前下标的最长非重复子串
 * 
 * 推导：
 * 通过哈希表来辅助，记录下标
 * https://leetcode-cn.com/leetbook/read/illustration-of-algorithm/5dz9di/
 * 
 */
var lengthOfLongestSubstring = function(s) {
  if ( !s ) return 0;
  let dp = [0]; // 哨兵
  let hash = {}
  for ( let i = 1; i <= s.length; i++ ) {
    let cur = s[ i - 1 ];
    let _s = s.substring(0, i-1);
    console.log( i, cur, _s, _s.includes( cur ))
    if ( !_s.includes( cur )) {
      dp[ i ] = dp[ i - 1 ] + 1
    } else {
      dp[ i ] = (i - hash[ s[ i - 2 ]] - 1) + 1; // 由左边界决定
    }
    hash[ cur ] = i - 1
  }
  return Math.max.apply(Math, dp)
};

console.log( lengthOfLongestSubstring("abba")) // [1,2,2,3]