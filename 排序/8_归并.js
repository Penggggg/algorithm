/**
 * 
 * @description
 * 
 * 题目：
 * 写一个归并排序
 * 
 * 思路：
 * 地推公式：mergeSort( p, r ) = merge( 
 *      mergeSort( p, m ), 
 *      mergeSort( m + 1, r )
 * ); // m为p、r中点
 * 
 * 先把数组拆成多个子区域，
 * 拆到不能再拆后，各个子区域再合并，合并过程中再进行排序。
 * 
 *   [ 4, 3, 2, 1 ]
 * ⬇️ [ 4，3 ] ～ [ 2，1 ]
 * ⬇️ [ 4 ] ~ [ 3 ]     [ 2 ] ~ [ 1 ] // 并 + 排序
 * ⬇️ [ 3, 4 ] ~ [ 1, 2 ] // 并 + 排序
 * ⬇️ [ 1, 2, 3, 4 ] // 并 + 排序
 */


const sort = arr => {
    // 递归 终止条件
    if ( arr.length === 1 ) return arr;  
    const m = Math.floor( arr.length / 2 );
    return merge( // 并
        sort( arr.slice( 0, m )), // 拆
        sort( arr.slice( m ))
    );
}

// 并。2个有序数组（升序）
const merge = ( a1, a2 ) => {
    const result = [ ];
    while( !!a1.length && !!a2.length ) {
        if ( a1[ 0 ] < a2[ 0 ]) {
            result.push( a1.shift( ))
        }
        if ( a2[ 0 ] < a1[ 0 ]) {
            result.push( a2.shift( ))
        }
    }
    return result.concat( a1 ).concat( a2 );
}

console.log( sort([ 3, 30, 34, 5, 9 ]))