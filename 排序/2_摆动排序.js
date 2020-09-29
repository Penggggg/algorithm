/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个无序的数组 nums，将它重新排列成 nums[0] < nums[1] > nums[2] < nums[3]... 的顺序。
 * 
 * 输入: nums = [1, 5, 1, 1, 6, 4]
   输出: 一个可能的答案是 [1, 4, 1, 5, 1, 6]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 先给原数组排序，
 * 然后双指针在数组一头一尾，相互逼近并填充到新数组
 */
var wiggleSort1 = function( nums ) {
    const res = [ ]
    nums.sort(( x, y ) => x - y );
    while( nums.length ) {
        const s = nums.shift( );
        const b = nums.pop( );
        s !== undefined && res.push( s );
        b !== undefined && res.push( b );
    }
    return res
}; 


console.log( wiggleSort1(
  [ 1, 5, 1, 1, 6, 4 ]
))

/**
 * 
 * @description
 * 
 * 思路2:
 * 先排序，然后双指针在一头一尾相互靠近，且互换
 * 空间复杂度O（1）
 */
var wiggleSort2 = function( nums ) {
  nums.sort(( x, y ) => x - y );
  let s = 0;
  let e = nums.length - 1;
  while ( s < e ) {
    [ nums[ s ], nums[ e ]] = [ nums[ e ], nums[ s ]];
    s += 2;
    e -= 2;
  }
  return nums;
}

console.log( wiggleSort2(
  [ 1, 5, 1, 1, 6, 4 ]
))