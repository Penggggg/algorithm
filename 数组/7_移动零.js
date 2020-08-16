/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 按要求截断 + 拼接
 */
var moveZeroes = function(nums) {
    const notZero = nums.filter( x => !!x );
    const zeroArr = new Array( nums.length - notZero.length ).fill( 0 );
    return notZero.concat( zeroArr );
};

console.log( moveZeroes([0,1,0,3,12]))