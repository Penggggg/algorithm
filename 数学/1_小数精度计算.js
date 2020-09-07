/**
 * 
 * @description
 * 
 * 思路：
 * 判断位数最大的小数位，
 * 然后两个数都乘 10^位数，相加后，再除10^位置 
 */
const accuracy = ( n1, n2 ) => {
    const square = Math.pow( 10, maxDecimal( n1, n2 ));
    return (( n1 * square ) + ( n2 * square )) / square;
}


/**
 * 
 * @description
 * 
 * 两个小数中，位数最大的是
 */
const maxDecimal = ( n1, n2 ) => {
    const decimal = n => String( n ).split('.')[ 1 ].length;
    const s1 = decimal( n1 );
    const s2 = decimal( n2 );
    return s1 > s2 ? s1 : s2;
}

console.log( accuracy( 0.1, 0.2 ));