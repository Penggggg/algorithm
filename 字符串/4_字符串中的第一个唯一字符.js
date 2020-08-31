/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个字符串，找到它的第一个不重复的字符，并返回它的索引。如果不存在，则返回 -1。
 * 
    s = "leetcode"
    返回 0

    s = "loveleetcode"
    返回 2
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 第一个不重复的字符，因此不能对原字符串进行排序
 * 但可以遍历一遍字符串，把每个字符出现的次数记录一下，
 * 然后找出第一个出现次数为1的
 */
const findOnly = s => {

    if ( !s ) return -1;

    // 用于计数
    const map = { };
    // 用于记录原顺序
    const keyArr = [ ];
    
    for ( let i = 0; i < s.length; i++ ) {
        if ( map[ s[ i ]] === undefined ){
            keyArr.push( s[ i ]);
            map[ s[ i ]] = {
                index: i,
                count: 1
            }
        } else {
            map[ s[ i ]].count += 1;
        }
    }

    for ( let i = 0; i < keyArr.length; i++ ) {
        const { count, index } = map[ keyArr[ i ]];
        if ( count === 1 ) {
            return index
        }
    }

    return -1;
}

console.log( findOnly('cc'))