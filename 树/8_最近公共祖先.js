/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个二叉树, 找到该树中两个指定节点的最近公共祖先
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 1、由于树的访问方向只能由上至下，因此需要手动构建从下到上的关系链（用map）
 * 2、找到q所有的祖先，存在列表set中
 * 3、p自底向上访问祖先，看看set中是否有存在
 */
var lowestCommonAncestor = function( root, p, q ) {
    if ( !root || !p || !q ) return root;
    const set = new Set( );
    const map = new WeakMap( );
    let queue = [ root ];

    while ( queue.length ) { // 广度优先遍历，构建上下关系
        let size = queue.length;
        while ( size-- ) {
            const n = queue.shift( ); // 从左到右
            if ( n.left ) {
                queue.push( n.left );
                map.set( n.left, n ); // 构建关系
            }
            if ( n.right ) {
                queue.push( n.right );
                map.set( n.right, n ); // 构建关系
            } 
        }
    }

    while( p ) { // 查询p的所有祖先
        set.add( p );
        p = map.get( p )
    };

    while ( q ) {
        if ( set.has( q )) return q;
        q = map.get( q );
    }

    return undefined;
};