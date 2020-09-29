/**
 * 
 * @description
 * 
 *  题目：
    给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n）
    可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。

    输入: [1,3,4,2,2]
    输出: 2

    输入: [3,1,3,4,2]
    输出: 3
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 重复性功能，基本上用set
 * 
 * 备注：89%、6%
 * 我尝试用obj替换Set，发现时间上obj是Set的一半
 */
var findDuplicate = function( nums ) {
    const set = new Set( );
    for ( let i = 0; i < nums.length ; i++ ) {
        if ( set.has( nums[ i ])) return nums[ i ];
        set.add( nums[ i ]);
    }
};

console.log( findDuplicate([ 3, 1, 3, 4, 2 ]))