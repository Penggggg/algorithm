/**
 * 
 * @description
 * 
 * 题目：
 * 验证二叉树对称性
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 最小模型：4节点，对称进行比较
 * 
 * 递归时也要注意， &&
 */
var isSymmetric = function( root ) {
    const helper = ( n1, n2 ) => {
        if ( !n1 && !n2 ) return true // 都为空
        // 一个为空，一个不为空，或：两个节点值不相等
        if ( !n1 || !n2 || n1.val !== n2.val ) return false;
        return helper( n1.left, n2.right ) && helper( n1.right, n2.left )
    }
    if( root === null ) return true;
    return helper( root.left, root.right );
};