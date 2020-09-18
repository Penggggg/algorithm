/**
 * 
 * @description
 * 
 * 题目：
 * 求所有根到叶子节点路径上的所有节点
 * 
 *     1
 *    / \
 *   2   3
 *  / \
 * 4   5
 * 
 * 输出：[ [ 1, 2, 4 ], [ 1, 2, 5 ], [ 1, 3 ]]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 回溯，查询所有结果
 */
const solution = root => {
    const res = [ ];
    const dfs = ( node, path = [ ]) => {
        if ( !node.left && !node.right ) {
            res.push([ ...path, node.val ])
        } else {
            !!node.left && dfs( node.left, [ ...path, node.val ])
            !!node.right && dfs( node.right, [ ...path, node.val ])
        }
    }
    dfs( root );
    return res;
}

console.log( solution(
    {
        val: 1,
        left: {
            val: 2,
            left: { val: 4 },
            right: { val: 5 }
        },
        right: { val: 3 }
    }
))