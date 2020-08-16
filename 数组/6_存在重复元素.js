/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个整数数组，判断是否存在重复元素。
 * 如果任意一值在数组中出现至少两次，函数返回 true，否则false
 * 
 * 输入: [1,2,3,1]
   输出: true
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 遍历数组，记录每个数字的出现次数。若有大于1的，直接return
 */
var containsDuplicate = function( nums ) {
    let map = { };
    for( let i = 0; i < nums.length; i++ ) {
        if ( !map[ nums[ i ]]) {
            map[ nums[ i ]] = true;
        } else {
            return true;
        }
    }
    return false;
};

console.log( containsDuplicate([ 1,2,3,1 ]))