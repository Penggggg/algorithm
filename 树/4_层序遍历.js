/**
 * 
 * @description
 * 
 * 题目：
 * 给你一个二叉树，请你返回其按 层序遍历 得到的节点值
 * 
 *       3
        / \
        9  20
          /  \
         15   7
    [
        [3],
        [9,20],
        [15,7]
    ]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 数组处理一层情况
 * 
 * 细节：
 * 要注意递归的条件：条件成立 && 执行
 */
var levelOrder = function( root ) {
    const res = [ ];
    const helper = ( level ) => { 
        const inner = [ ];
        const next = [ ];
        while( level.length ) {
            const cur = level.shift( );
            inner.push( cur.val );
            !!cur.left && next.push( cur.left );
            !!cur.right && next.push( cur.right );
        }
        res.push( inner ); // 输出该层，调用下层
        !!next.length && helper( next ) // 条件成立才递归，否则会存在问题
    }
    if ( !root ) return [ ];
    helper([ root ])
    return res;
};

console.log( levelOrder({
    val: 3,
    left: { val: 9 },
    right: { val: 20 }
}))