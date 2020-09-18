/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个未排序的数组，判断这个数组中是否存在长度为 3 的递增子序列。
 * 
 * 是否存在 i, j, k,  满足 0 ≤ i < j < k ≤ n-1，且 arr[i] < arr[j] < arr[k] 
 * 注意：不一定需要连续的 i、j、k
 * 
 * [ 1, 2, 3, 4 ] true
 * [ 4, 3, 2, 1 ] false
 * 
 * 要求： O(n)
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 贪心算法，用数组res保存一个可能性的答案，
 * 
 * 第一位：遇到比res[ 0 ]小的的则替换(扩大了可能性范围)
 * 第二位：遇到比res[ 1 ]小，比res[ 0 ]大的，则替换res[ 1 ]
 * 第三位：遇到比res[ 1 ]大的，则插入、返回结果
 */
var increasingTriplet = function( nums ) {
    const res = [ nums[ 0 ]];
    for ( let i = 1; i < nums.length; i++ ) {
        const cur = nums[ i ];

        if ( cur < res[ 0 ]) {
            res[ 0 ] = cur;
        } else if ( res[ 1 ] === undefined && cur < res[ 0 ]) {
            res[ 0 ] = cur;
        } else if ( res[ 1 ] === undefined && cur > res[ 0 ]) {
            res.push( cur);
        } else if ( res[ 1 ] !== undefined && cur < res[ 1 ] && cur > res[ 0 ]) {
            res[ 1 ] = cur;
        } else if ( res[ 1 ] !== undefined && cur > res[ 1 ]){
            res.push( cur);
            return true;
        }
    }
    return false;
};


console.log( increasingTriplet([ 1, 2, -10, -8, -7 ]))
// console.log( increasingTriplet([ 5, 1, 5, 5, 2, 5, 4 ]))