/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个二叉树，找出其最大深度。
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 动态规划
 * 
 * 递推公式：
 * maxDeep( n ) = max( maxDeep( n.left ), maxDeep( n.right )) + 1;
 * 
 * 终止条件：
 * !n
 */
var maxDepth = function( root ) {
    if ( !root ) return 0;
    return Math.max( maxDepth( root.right ), maxDepth( root.left )) + 1;
};