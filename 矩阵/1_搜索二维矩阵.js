/**
 * 
 * 编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target。该矩阵具有以下特性：

    每行的元素从左到右升序排列。
    每列的元素从上到下升序排列。

    [
        [1,   4,  7, 11, 15],
        [2,   5,  8, 12, 19],
        [3,   6,  9, 16, 22],
        [10, 13, 14, 17, 24],
        [18, 21, 23, 26, 30]
    ]

    给定 target = 5，返回 true。
    给定 target = 20，返回 false。
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 从 matrix[0][0]开始搜索，比他大的总是可以向下或者向右两个方向前进
 * 
 * 逆向思维：
 * 为了确定一个唯一方向，可以从左下或右上开始搜索
 * 左下时，比这个值大的往右，比这个值小的往上
 * 直到数组越界可以停下来了。
 */
var searchMatrix = function( matrix, target ) {
    if ( !matrix.length ) return false;
    if ( target < matrix[ 0 ][ 0 ]) return false;

    let col = 0; // 初始化
    let row = matrix.length - 1;

    while( col < matrix[ 0 ].length && row >= 0 ) {
        if ( matrix[ row ][ col ] > target ) {
          row--;
        } else if ( matrix[ row ][ col ] < target ) {
          col++;
        } else {
          return true;
        }
    }
    return false;
}

  console.log(searchMatrix([
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ], 5 ));