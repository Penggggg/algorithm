/**
 * 
 * @description
 * 
 * 题目：
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 输入: [ 'flower', 'flow', 'flight' ]
   输出: 'fl'
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 每次遍历，构造最短公共前缀，然后对所有数组进行逐一比较
 */
const longestCommonPrefix = strs => {

    if ( !strs.length ) return '';
    if ( strs.length === 1 ) return strs[ 0 ];

    let i = 0;
    let res = '';

    while ( 1 ) {
        const cur = strs[ 0 ][ i ]
        const isOk = strs.every( s => s[ i ] === cur );
        if ( isOk && !!cur ) {
            i++
            res += cur;
        } else {
            return res;
        }
    }
}


console.log( longestCommonPrefix([ 'flower', 'flow', 'flight' ]))