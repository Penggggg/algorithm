/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 */



/**
 * 
 * @description
 * 
 * 思路：
 * O( 1 )空间
 */
const rotate = function( nums, k ) {
    while ( k-- ) {
        nums.unshift( nums.pop( ))
    }
    return nums;
}

console.log( rotate( [1,2,3,4,5,6,7], 3 ))