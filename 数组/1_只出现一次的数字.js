/**
 * 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
 * 
 * 输入: [ 2, 2, 1 ]
   输出: 1
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 从左到右，依次进行位运算
 * 
 * 位运算符
 * n ^ n === 0 且 n ^ 0 === n
 */
var singleNumber1 = nums => {
    let res = nums[ 0 ]
    for ( let i = 1; i < nums.length; i++ ) {
      res = res ^ nums[ i ];
    }
    return res
};