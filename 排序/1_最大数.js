/**
 * 
 * @description
 * 
 * 题目：
 * 给定一组非负整数，重新排列它们的顺序组成一个最大的整数。
 * 
 * 输入: [ 10,2 ]
   输出: 210

   输入: [3,30,34,5,9]
   输出: 9534330
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 俩俩组合比较，大的换到前面（降序） 
 */
const composeMax = ( nums ) => {
  const _nums = nums.sort(( a, b ) => { // 俩俩组合排序
      return -Number(`${a}${b}`) + Number(`${b}${a}`);
  });
  return _nums[ 0 ] ? String( _nums.join('')) : '0';
}
console.log( composeMax([ 3,30,34,5,9 ]))