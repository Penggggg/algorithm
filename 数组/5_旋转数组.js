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
 * 正常平移，可以通过“截断” + “拼接”来处理
 */
var rotate = function( nums, k ) {
    const temp = [ ...nums ];
    const header = temp.splice( nums.length - k , k );
    return header.concat( temp );
};


/**
 * 
 * @description
 * 
 * 思路：
 * O( 1 )
 */
const rotate2 = function( nums, k ) {
    for ( let i = 0; i < k; i++ ) {
        nums.unshift( nums.pop( ))
    }
}

console.log( rotate( [1,2,3,4,5,6,7], 3 ))