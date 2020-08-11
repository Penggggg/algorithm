/**
 * 
 * @description
 * 
 * 题目：
 * 一个 m x n 网格，从左上角到右下角，使得路径上的数字总和为最小（只能往下或者往右）
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1、数组dp（2维）。含义：走到(i, j) 时，当前最短的路径和
 * 2、dp之间的关系。含义：dp[ i ][ j ] = Min( dp[i][ j - 1 ] + dp[ i - 1 ][ j ]) + arr[i][j]（从上方或左方过来）
 * 3、初始值。dp[ 0 ][ 0 ~ m - 1 ]、dp[ 0 ~ n - 1 ][ 0 ]均可初始化（相当于最上面、最左边的一行，一直往右、下走）
 */

const Step = arr => {

    if ( !arr.length ) return 0;

    // 宽、高
    const m = arr[ 0 ].length;
    const n = arr.length;

    // 初始化
    const dp = [ ];
    for ( let i = 0 ; i < n; i++ ) {
        const inner = [ ];
        for ( let j = 0; j < m; j++ ) {
            inner.push( 0 );
        }
        dp.push( inner );
    }

    // 初始化：第一行
    for ( let i = 0; i < m; i++ ) {
        dp[ 0 ][ i ] = ( i !== 0 ? dp[ 0 ][ i - 1 ] : 0 ) + arr[ 0 ][ i ];
    }

    // 初始化：第一列
    for ( let j = 1; j < n; j++ ) {
        dp[ j ][ 0 ] = dp[ j - 1 ][ 0 ] + arr[ j ][ 0 ];
    }

    // 推导
    for( let i = 1; i < n; i++ ) {
        for ( let j = 1; j < m; j++ ) {
            dp[ i ][ j ] = Math.min( dp[ i ][ j - 1 ], dp[ i - 1 ][ j ]) + arr[ i ][ j ];
        }
    }

    return dp[ n - 1 ][ m - 1 ]
}

console.log( 
    Step([
        [ 1, 3, 1 ],
        [ 1, 5, 1 ],
        [ 4, 2, 1 ]
    ])
)