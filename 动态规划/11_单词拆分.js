/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，判定 s 被空格拆分出来的单词都在词典中。
 * 
 * 输入: s = "leetcode", wordDict = ["leet", "code"]
   输出: true
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1维dp
 * 1、s是否存在一个在【字典】中的单词
 * 2、除该单词以外中，是否存在一个可拆的【词组】====> 子问题
 * 
 * 如：
 * catsanddog ==> (词组 catsand)(字典 dog)
 * (catsand) ==> (字典 cats)(字典 and)
 * 
 * 推导关系：
 * isOk( s ) => s[ x ]在字典中 + (剩余字符串可组成词组，且该词组可拆)
 */
var wordBreak = function( s, wordDict ) {
    let dp = new Array( s.length + 1 ).fill( false ); // 含有哨兵变量
    dp[ 0 ] = true; // 初始化
    for ( let i = 1; i <= s.length; i++ ) { // 从头开始遍历，这样可标记出：字典和词组（如cat字典、catsand词组）
        for ( let j = 0; j <= i; j++ ) { // 检查该词里面，是否有存在可拆的词组
            if ( !!dp[ j ] && wordDict.includes( s.slice( j, i ))) {
                dp[ i ] = true;
                break;
            }
        }
    }
    return dp[ s.length ]
};

console.log( wordBreak('catsanddog', [ 'cats', 'and', 'dog']))