/**
 * 
 * @description
 * 
 * 推导：
 * dp[ i ][ j ] = dp[ i ][ j - 1 ] + dp[ i - 1 ][ j ];
 * 在第 i 行中，除了会用到第 i - 1 行外，其他再往上的行数都是不需要用到的
 * 
 * 那部分用不到的值就没有必要保存
 * 因此只需一维dp[ ]来保存一行的历史记录就可以了
 * 
 * 空间复杂度优化：O( n * m ) -> O( n )
 */

const Steps = ( m, n ) => {

    if ( !m || !n ) return 1;
    const dp = new Array( m ).fill( 1 ); // 初始化(第一行)
    
    for ( let i = 1; i < n; i++ ) { // 从第2行开始
        for ( let j = 0; j < m; j++ ) {
            dp[ j ] = j === 0 ?
                1 : // 第一列
                dp[ j - 1 ] + dp[ j ] // 左边 + 上边
        }
    }
    return dp[ m - 1 ];
}

console.log( Steps( 7, 3 ))