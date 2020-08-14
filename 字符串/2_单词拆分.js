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
 * 1、s是否存在一个在【字典】中的单词
 * 2、除该单词以外中，是否存在一个可拆的【词组】====> 子问题
 * 
 * 如：
 * catsanddog ==> (词组 catsand)(字典 dog)
 * (catsand) ==> (字典 cats)(字典 and)
 * 
 * 处理顺序：
 * 由前往后，
 * 判断顺序，由后往前
 * 
 * 推导关系：
 * isOk( s ) => s[ x ]在字典中 + (剩余字符串可组成词组，且该词组可拆)
 */
var wordBreak = function( s, wordDict ) {
    let dp = new Array(s.length + 1).fill( false );
    // 初始化，0长度的字符串
    dp[ 0 ] = true;
    // 处理顺序：从头开始遍历，这样可标记出字典和词组（请重点查看 cat、catsand）
    // catsand：因为存在and（词典）的同时，也存在另一个可拆（词组 => 'cat' + ''），所以标记了catsand词组(下标：d)
    for (let i = 1; i <= s.length; i++) {
        console.log(`======== 当前检查的字符串：${s.slice(0, i)} ======`)
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