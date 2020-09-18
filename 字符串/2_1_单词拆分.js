/**
 * 
 * @description
 * 
 * 题目：
 * 空字符串 s 和字典 wordDict，判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。
 * 
 * 输入: s = 'leetcode', wordDict = ['leet', 'code']
   输出: true
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 词 + 词组的标记
 * dp( n ) 表示下标为0到n的区间，至少可以组成一个单词或词组
 */
var wordBreak = function( s, wordDict ) {
    const dp = new Array( s.length + 1 ).fill( false );
    dp[ 0 ] = true;
    for ( let i = 1; i <= s.length; i++ ) {
        for ( let j = 0; j <= i; j++ ) {
            if ( dp[ j ] && wordDict.includes( s.slice( j, i ))) {
              dp[ i ] = true;
              break;
            }
        }
    }
    return dp[ s.length ];
};

console.log( wordBreak('leetcode', [ 'leet', 'code' ]))
console.log( wordBreak('applepenapple', [ 'apple', 'pen' ]))
console.log( wordBreak('catsandog', [ 'cat', 'cats', 'and', 'sand', 'dog' ]))