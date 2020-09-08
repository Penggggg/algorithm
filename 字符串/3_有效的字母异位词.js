/**
 * 
 * @description
 * 
 * 题目：
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词（两个字符串所包含的字母的出现次数都相同,只是顺序不一样.）。
 * 
 * 输入: s = "anagram", t = "nagaram"
   输出: true

   输入: s = "rat", t = "car"
   输出: false
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 求同，排除异
 * 把两个字符串根据ASCALL排序，然后比较
 */
var isAnagram = function(s, t) {
    const sortStr = s => s.split('')
        .sort(( x, y ) => x.charCodeAt( 0 ) - y.charCodeAt( 0 ))
        .join('');
    return sortStr( s ) === sortStr( t );
};

console.log( isAnagram( 'anagram', 'nagaram' ))
console.log( isAnagram( 'rat', 'car' ))