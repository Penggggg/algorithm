/**
 * 
 * @description
 * 
 *  问题：
 *  给定一个数组表示一个数，在该数的基础上加一。
    最高位数字存放在数组的首位， 你可以假设除了整数 0 之外，这个整数不会以零开头。

    示例 1:
    输入: [1,2,3]
    输出: [1,2,4]
    解释: 输入数组表示数字 123。

    示例 2:
    输入: [4,3,2,1]
    输出: [4,3,2,2]
    解释: 输入数组表示数字 4321。
    */

/** 
 * 
 * @description
 * 
 * 思路：
 * 利用十进制，会出现精度问题，只能手动实现加法法则
 */
const plusOne = digits => {
    let fix = 0;
    res = [ ];
    const size = digits.length - 1;
    for ( let i = size; i >= 0; i-- ) {
        const cur = digits[ i ] + ( i === size ? 1 : fix );
        res.unshift( cur % 10 );
        fix = cur >= 10 ? 1 : 0
    }
    !!fix && res.unshift( fix );
    return res;
}

console.log( plusOne([ 9, 9, 9 ]))