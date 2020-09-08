/**
 * 
 * @description
 * 
 * 题目：
 * 原地操作，将所 0移动到数组的末尾，同时保持非零元素的相对顺序。
 * 
    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 交换操作，一般伴随着双指针
 */
var moveZeroes = function( nums ) {
    let j = 0;
    for ( let i = 0; i < nums.length; i++ ) {
        if ( nums[ i ] !== 0 ) {
            [ nums[ i ], nums[ j ]] = [ nums[ j ], nums[ i ]];
            j++;
        }
    }
    return nums
};

console.log( moveZeroes([ 0, 1, 0, 3, 12 ]))