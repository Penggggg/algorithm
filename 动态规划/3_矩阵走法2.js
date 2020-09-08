/**
 * 
 * @description
 * 
 * 题目：
 * 一个 m x n 网格，从左上角到右下角
 * 使得路径上的数字总和为最小（只能往下或者往右）
 */




/**
 * 
 * @description
 * 
 * 思路：
 * 2维dp：走到(i, j) 时，最短的路径和
 * 
 * 推导：
 * dp[ i ][ j ] = Min( dp[ i ][ j - 1 ] + dp[ i - 1 ][ j ]) + arr[ i ][ j ]（从上方或左方过来）
 * 
 * 初始化：
 * 最上面一行、最左边的一列，均可被初始化
 */

const Step = arr => {

    if ( !arr.length ) return 0;

    // 宽、高
    const m = arr[ 0 ].length;
    const n = arr.length;
    const dp = new Array( m ).fill( 0 );
    
    // 初始化第1行
    for ( let i = 0; i < m; i++ ) {
        dp[ i ] = arr[ 0 ][ i ] + ( i === 0 ? 0 : dp[ i - 1 ])
    }

    for ( let i = 1; i < n; i++ ) {
        for ( let j = 0; j < m; j++ ) {
            if ( j === 0 ) { // 第一列是累加
                dp[ j ] = arr[ i ][ j ] + ( i === 0 ? 0 : dp[ j ])
            } else {
                dp[ j ] = Math.min( dp[ j ], dp[ j - 1 ]) + arr[ i ][ j ];
            }
        }
    }
    return dp[ m - 1 ];
}

console.log( 
    Step([
        [ 1, 3, 1 ],
        [ 1, 5, 1 ],
        [ 4, 2, 1 ]
    ])
)