/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个Excel表格中的列名称，返回其相应的列序号
 *     
 *  如：
 *  A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 1、通过JS内置API，构建字母跟数值的映射
 * 2、从个位数逐位累加每位的值，这里是26进制
 */
var titleToNumber = function( s ) {
    let res = 0;
    const size = s.length;
    s = s.toUpperCase( );
    for ( let i = size; i > 0; i-- ) {
        res += getCode( s[ i - 1 ]) * Math.pow( 26, size - i );
    }
    return res;
};

function getCode( letter ) {
    return letter.charCodeAt( ) - 64; 
}

console.log( titleToNumber('AB'))