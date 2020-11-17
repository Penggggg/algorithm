/**
 * 
 * @description
 * 
 * 题目：
 * 实现字符串左旋转操作的功能
 * 
 * 输入: s = "abcdefg", k = 2
   输出: "cdefgab"
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 可以通过双向队列的思想，做循环遍历，unshift( pop )，但是API操作次数很多可能会导致性能问题
 * 
 * 下方为一次性操作：
 * 备注：80%、40%
 */

var reverseLeftWords = function(s, n) {
  return s.substr(n) + s.substr(0,n)
};