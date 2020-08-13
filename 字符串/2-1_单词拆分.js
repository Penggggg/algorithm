/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个非空字符串 s 和一个包含非空单词列表的字典 wordDict，在字符串中增加空格来构建一个句子，使得句子中【所有】的单词都在词典中。返回所有这些可能的句子。
 * 
    输入:
    s = "catsanddog"
    wordDict = ["cat", "cats", "and", "sand", "dog"]
    输出:
    [
      "cats and dog",
      "cat sand dog"
    ]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 加上Map结构，辅助输出
 * 请看下面的备注
 */
var wordBreak = function(s, wordDict) {
    let dp = new Array(s.length + 1).fill( false )
    dp[ 0 ] = true;
    for (let i = 1; i <= s.length; i++) {
        for (let j = 0; j <= i; j++) {
            if ( !!dp[j] && wordDict.indexOf( s.slice( j, i )) >= 0 ) {
                dp[ i ] = true
                break;
            }
        }
    }
    console.log(dp)
};

console.log( wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))

/**
 * 
 * cat ==> [
 *   {  
 *       dic: 'cat', 
 *       pre: ''
 *   }
 * ]
 * cats ==> [
 *   { 
 *       dic: 'cats', 
 *       pre: ''
 *   }
 * ]
 * catsand ==> [
 *    {
 *        dic: 'sand',
 *        pre: 'cat'
 *    }, {
 *       dic: 'and',
 *       pre: 'cats'
 *    }
 * ]
 * catsanddog ==> [
 *     {
 *          dic: 'dog',
 *          pre: 'catsand'
 *     }
 * ]
 */