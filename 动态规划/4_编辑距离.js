/**
 * 
 * @description
 * 
 * 题目：
 * 给定两个单词 s1 和 word2，计算出将 s1 转换成 word2 所使用的最少操作数 
 * 可用操作：插入一个字符 删除一个字符 替换一个字符
 * 

    输入: s1 = "horse", word2 = "ros"
    输出: 3

    horse -> rorse (将 'h' 替换为 'r')
    rorse -> rose (删除 'r')
    rose -> ros (删除 'e')
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1、数组dp（2维）。含义：字符串 s1 的长度为 i，字符串 word2 的长度为 j 时，将 s1 转化为 word2 所使用的最少操作次数为 dp[i] [j]。
 * 2、初始值。dp[ 0 ][ 0 ~ m - 1 ]、dp[ 0 ~ n - 1 ][ 0 ]均可初始化（相当于变成0长度，或者由0变成目标长度）
 * 3、dp之间的关系。dp[ i ][ j ] = Min( dp[ i - 1 ][ j - 1 ], dp[ i - 1 ][ j ], dp[i][ j - 1 ],) + 1（从上方或左方过来）
 * 
 * 解析：
 * 【数组长度】m+1宽、n+1高，因为还得放长度0的情况
 * 【相同】wordA[ i ] 跟 wordB[ j ]相同时，dp[ i ][ j ] = dp[ i - 1 ][ j - 1 ] + 0（无需操作）
 * 【替换】wordA[ i ] 不同于 wordB[ j ]时，wordA[ i ] 替换成 wordB[ j ]字符，dp[ i ][ j ] = dp[ i - 1 ][ j - 1 ] + 1（替换操作）
 * 【删除】wordA[ i ] 不同于 wordB[ j ]时，wordA[ i ] 删除，转换为 wordA[ i- 1 ]个字符到 wordB[ j ]个字符的编剧距离，dp[ i ][ j ] = dp[ i - 1 ][ j ] + 1（删除操作）
 * 【插入】wordA[ i ] 不同于 wordB[ j ]时，wordA尾部增加wordB[ j ]的字符，由于wordA增加一个字符，相当于wordB减少一个字符，所以可以写成，dp[ i ][ j ] = dp[ i ][ j - 1 ] + 1（插入操作）
 */

const Steps = ( s1, s2 ) => {

    // 宽、高
    const m = s1.length + 1;
    const n = s2.length + 1;

    // 初始化
    const dp = [ ];
    for ( let i = 0 ; i < n; i++ ) {
        const inner = [ ];
        for ( let j = 0; j < m; j++ ) {
            inner.push(
                // 第一行
                i === 0 ?
                    j :
                    // 第一列
                    j === 0 ?
                        i :
                        0

            );
        }
        dp.push( inner );
    }

    // 推导
    for( let i = 1; i < n; i++ ) {
        for ( let j = 1; j < m; j++ ) {
            
            // 相同
            if ( s1[ i ] === s2[ j ]) {
                dp[ i ][ j ] = dp[ i - 1 ][ j - 1 ]
            } else {
                dp[ i ][ j ] = Math.min( dp[ i -1 ][ j -1 ], dp[ i ][ j - 1 ], dp[ i - 1 ][ j ]) + 1;
            }
        }
    }

    return dp[ n - 1 ][ m - 1 ];

}
console.log( Steps( 'horse', 'ros' ))