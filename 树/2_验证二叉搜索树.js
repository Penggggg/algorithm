/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个二叉树，判断其是否是一个有效的二叉搜索树。
 * 
 * 输入:
    5
   / \
  1   4
     / \
    3   6
    
 false: 根节点的值为 5 ，但是其右子节点值为 4 。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 先验证最小的三角模型，然后分别验证左右节点
 * 
 * 细节：
 * 递归左右时，要同时满足：left && right
 */
var isValidBST = function( root ) {
    if ( !root ) return true
    if (( !!root.left && ( root.left.val >= root.val )) || 
        ( !!root.right && (  root.right.val <= root.val ))) return false;
    return isValidBST( root.left ) && isValidBST( root.right )
};

console.log( isValidBST({
    val: 2,
    left: { val: 1 },
    right: { val: 3 }
}))