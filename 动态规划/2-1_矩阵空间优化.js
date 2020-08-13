/**
 * 
 * @description
 * 
 * 已知推导公式为，dp[ i ][ j ] = dp[ i ][ j - 1 ] + dp[ i - 1 ][ j ];（由此可见，甚至不需要先初始化第一【列】）
 * 除了会用到第 i - 1 行外，其他第 1 至 第 i-2 行的值我们都是不需要用到的
 * 
 * 那部分用不到的值就没有必要保存
 * 因此只需要用一个一维的 dp[] 来保存一行的历史记录就可以了
 * 
 * 可把空间复杂度是 O(n * m)，优化成 O(n)。
 */

const Steps = ( m, n ) => {

    // m宽 n高
    if ( !m || !n ) return 1;

    // 初始化(第一行)
    const dp = new Array( m ).fill( 1 );
    
    // 推导
    for ( let i = 1; i < n; i++ ) {
        for ( let j = 0; j < m; j++ ) {
            dp[ j ] = j === 0 ?
                1 : // 第一列
                dp[ j - 1 ] + dp[ j ]
        }
    }

    // 返回
    return dp[ m - 1 ];

}

console.log( Steps( 7, 3 ))