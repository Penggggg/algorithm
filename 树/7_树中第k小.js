/**
 * 
 * @description
 * 
 * 题目：
 * 二叉搜索树，查找其中第 k 个最小的元素
 * 左边元素比父节点小
 * 
 * 输入: root = [ 5, 3, 6, 2, 4, null ,null, 1 ], k = 3
       5
      / \
     3   6
    / \
   2   4
  /
 1

   输出: 3
 */




/**
 * 
 * @description
 * 
 * 思路：
 * 利用搜索树的特性，对树中所有节点的值进行序列化排序
 * 
 * 备注：
 * 90%、30%
 */
var kthSmallest = function( root, k ) {
    const res = [ ];
    const dfs = node => {
        if ( !node.left && !node.right ) { // 叶子
            return res.push( node.val );
        }
        !!node.left && dfs( node.left );
        res.push( node.val );
        !!node.right && dfs( node.right );
    }
    dfs( root );
    return res[ k - 1 ];
};

console.log(
    kthSmallest({
        val: 5,
        left: {
            val: 3,
            left: {
                val: 2,
                left: {
                    val: 1 
                }
            },
            right: 4
        },
        right: {
            val: 6
        }
    }, 5 )
)