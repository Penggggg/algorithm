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
 * 回溯：逐步尝试，不行就回退
 */
var wordBreak = function( s, wordDict ) {
    const res = [ ];
    const dfs = ( str, paths = [ ]) => {
        if ( !str && !!paths.length ) {
            res.push( paths.join(' '));
        }
        for ( let i = 1; i <= str.length; i++ ) {
            const cur = str.slice( 0, i );
            if ( wordDict.includes( cur )) {
                dfs( str.slice( i ), [ ...paths, cur ]) // 注意这里不能传paths，会造成应用问题
            }
        }
    }
    dfs( s, [ ]);
    return res;
};

console.log( wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']))
