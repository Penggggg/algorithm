/**
 * 
 * @description
 * 
 * 题目：
 * 一个 m x n 网格，从左上角到右下角一共有几种走法（只能往下或者往右）
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1、数组dp（2维）。含义：走到(i, j) 时，一共有 dp[ i ][ j ] 种走法
 * 2、dp之间的关系。含义：dp[ i ][ j ] = dp[i][ j - 1 ] + dp[ i - 1 ][ j ]（从上方或左方过来）
 * 3、初始值。dp[ 0 ][ 0 ~ m - 1 ]、dp[ 0 ~ n - 1 ][ 0 ]均为1。（相当于最上面、最左边的一行，只能一直往右、下走）
 */

const Steps = ( m, n ) => {

    // m宽 n高
    if ( !m || !n ) return 1;

    // 初始化
    const dp = [ ];
    for ( let i = 0 ; i < n; i++ ) {
        const inner = [ ];
        for ( let j = 0; j < m; j++ ) {
            inner.push(( i === 0 || j === 0 ) ? 1 : 0 );
        }
        dp.push( inner );
    }

    // 推导
    for( let i = 1; i < n; i++ ) {
        for ( let j = 1; j < m; j++ ) {
            dp[ i ][ j ] = dp[ i ][ j - 1 ] + dp[ i - 1 ][ j ];
        }
    }

    return dp[ n - 1 ][ m - 1 ];

}

console.log( Steps( 7, 3 ))