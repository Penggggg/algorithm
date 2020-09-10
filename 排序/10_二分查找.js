/**
 * 
 * @description
 * 
 * 题目：
 * 写一个二分查找
 * 
 * 前提：
 * 针对有序数组
 * 
 * 思路：
 * 每次递归执行都将范围缩小
 * 
 * 递推公式：
 * find( arr, start1, end1, target ) = find( arr, start2, end2, target ) 
 * 
 * 终止条件：
 * start <= end
 */


const find = ( arr, num ) => {
    const _find = ( a, s, e, n ) => {
        if ( s === e ) { return n === a[ s ] ? s : -1 }

        const m = Math.floor(( s + e ) / 2 );
        if ( n > a[ m ]) {
            return _find( a, m + 1, e, n );
        } else {
            return _find( a, s, m, n );
        }
    }
    return _find( arr, 0, arr.length - 1, num );
}

console.log( find([ 1, 1, 3, 5, 9, 30, 34 ], 9 ))