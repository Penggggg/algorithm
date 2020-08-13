/**
 * 
 * @description
 * 
 * 题目：
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
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
 * 求同，排除异。把两个字符串根据ASCALL排序，然后比较
 */
const isStr = ( s1, s2 ) => {
    const sortStr = s => s.split('')
        .sort(( x, y ) => x.charCodeAt( 0 ) - y.charCodeAt( 0 ))
        .join('');
    return sortStr( s1 ) === sortStr( s2 );
}

console.log( isStr( 'anagram', 'nagaram' ))
console.log( isStr( 'rat', 'car' ))