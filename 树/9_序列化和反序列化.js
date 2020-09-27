/**
 * 
 * @description
 * 
 * 题目：
 * 设计2个函数，可以序列化、反序列化一颗树

    1
   / \
  2   3
     / \
    4   5

   序列化为 "[1,2,3,null,null,4,5]"
 */



/** 
 * 
 * @description
 * 
 * 思路：
 * 广度优先的序列化
 */
var serialize = function( root ) {
    if ( !root ) return '[]';
    const res = [ ];
    let queue = [ root ];
    while ( queue.length ) {
        let size = queue.length;
        while ( size-- ) {
            const n = queue.shift( ); // 从左到右
            if ( !n ) {
                res.push( null )
            } else {
                res.push( n.val );
                queue.push( n.left || null );
                queue.push( n.right || null );
            }
        }
    }
    return JSON.stringify( res );
};

/**
 * 
 * @description
 * 
 * 思路：
 * 通过正在处理的层数，获取对应层数的节点数量，从左到右进行构建
 */
var deserialize = function( data ) {
    let deep = 1;
    let arr = JSON.parse( data );
    if ( !arr.length ) return null;
    const node = new TreeNode( arr.shift( ));
    let level = [ node ];
    while ( arr.length ) { 
        console.log( arr )
        let size = level.length;
        const children = arr.splice( Math.pow( 2, deep )) // 根据层数取元素
        while( size-- ) {
            const n = level.shift( );
            if ( n === null ) continue;
            const l = children.shift( );
            const r = children.shift( );
            const n_l = l === null ? null : new TreeNode( l );
            const n_r = r === null ? null : new TreeNode( r );
            n.left = n_l;
            n.right = n_r;
            level.push( n_l );
            level.push( n_r );
        }
        deep++;
    }
    return node;
};

function TreeNode( val ) {
    this.val = val;
    this.left = null;
    this.right = null;
}

console.log( serialize({
    val: 1,
    left: { val: 2 },
    right: {
        val: 3,
        left: { val: 4 },
        right: { val: 5 }
    }
}))

console.log( JSON.stringify( 
    // deserialize('[1,2,3,null,null,4,5,null,null,null,null]')
    deserialize('[1,2,3]')
))