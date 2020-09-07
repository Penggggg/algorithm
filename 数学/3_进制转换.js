/**
 * 
 * @description
 * 
 * 题目：
 * 十进制整数转为任意进制
 */
var integerToAny = ( num, jinzhi ) => {
    if ( num < jinzhi ) return num;
    const res = [ ];
    const getRest = ( n, jinzhi ) => {
        res.unshift( n % jinzhi );
        const divide =  Math.floor( n / jinzhi );
        !!divide && getRest( divide, jinzhi );
    }
    getRest( num, jinzhi );
    return res.join('')
}


/**
 * 
 * @description
 * 
 * 题目：
 * 十进制小数转为任意进制
 * 
 * 逻辑：
 * 乘积不为1，则记录整数，小数部分继续相乘
 */
var decimalToAny = ( num, jinzhi ) => {
    if ( num === 1 ) return num;
    const res = [ ];
    const handle = ( n, jinzhi ) => {
        const cur = n * jinzhi;
        res.push( Math.floor( cur )); // 取整
        cur !== 1 && handle( getDecimal( cur ), jinzhi );
    }
    handle( num, jinzhi );
    return res.join(''); // 防止 01 这种情况变成了 1
}


/**
 * 
 * @description
 * 获取一个整数里面的小数
 */
var getDecimal = num => {
    return Number(`0.${String( num ).split('.')[ 1 ]}`)
}

console.log( decimalToAny( 0.25, 2 ))
console.log( integerToAny( 8, 2 )); // 把十进制的8转为二进制（整数）