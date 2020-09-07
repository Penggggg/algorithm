const { TreeNode } = require('./0');
/**
 * 
 * @description
 * 
 * 题目：
 * 将有序数组转换为二叉搜索树
 * 
 * 给定有序数组: [-10,-3,0,5,9],

    一个可能的答案是：[0,-3,9,-10,null,5]，它可以表示下面这个高度平衡二叉搜索树：

         0
        / \
      -3   9
      /   /
    -10  5
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 分治，把数组切成：左、中、右三份
 * 其中，中节点可作为中间节点
 */
var sortedArrayToBST = function( nums ) {
    if ( !nums.length ) return null;
    const node = new TreeNode( null );
    const mid = Math.floor( nums.length / 2 );  // 分2段
    const leftArr = nums.slice( 0, mid );
    const rightArr = nums.slice( mid + 1 );

    node.val = nums[ mid ]; // 中间节点本身
    if ( leftArr.length ) {
      node.left = sortedArrayToBST( leftArr ) // 构造左子树
    }
    if ( rightArr.length ) {
      node.right = sortedArrayToBST( rightArr ) // 构造右子树
    }
    return node;
}

console.log( sortedArrayToBST( [-10,-3,0,5,9]))