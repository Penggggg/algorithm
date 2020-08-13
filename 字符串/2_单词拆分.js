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
 * 判断长度为s的字符串是否可拆，需要判断：
 * 1、s是否存在一个在字典中的单词x + 
 * 2、s-x中是否存在一个可拆的词组
 * 
 * 如：
 * catsanddog ==> (词组 catsand)(字典 dog)
 * (catsand) ==> (字典 cats)(字典 and)
 * 
 * 推导关系：
 * isOk( s ) => s[ i ~ s ]在字典中 + (剩余词组可拆)
 */
var wordBreak = function( s, wordDict ) {
    let dp = new Array(s.length + 1).fill( false );
    // 0长度的字符串
    dp[ 0 ] = true;
    // 从字符串头开始遍历，可以标记出，字典和词组（请重点查看 cat、catsand）
    // catsand：标记了and（词典）的同时，也标记了catsand词组。(下标：d)
    for (let i = 1; i <= s.length; i++) {
        console.log(`======== 总字符串：${s.slice(0, i)} ======`)
        for (let j = 0; j <= i; j++) {
            console.log(`j: ${j}, i：${i}, 存在字符串：${s.slice(j, i)}，${wordDict.indexOf(s.slice(j, i)) >= 0}`)
            if ( !!dp[j] && wordDict.indexOf( s.slice( j, i )) >= 0 ) {
                dp[ i ] = true
                break;
            }
        }
    }
    return dp[ s.length ]
};

console.log( wordBreak('catsanddog', [ 'cats', 'and', 'dog']))