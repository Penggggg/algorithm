/**
 * 
 * @description
 * 
 * 题目：
 * 实现一个计数器，整数除法仅保留整数部分，不能使用eval
 * 
 * 输入: " 3/2 "
   输出: 1

   输入: " 3+5 / 2 "
   输出: 5
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 双栈、预处理空格、挑选数字、符号
 * 
 * 备注：超时了...
 */
var calculate1 = function( s ) {
    let num = ''
    let ops = [ ];
    let nums = [ ];
    const _s = s.replace(/ /g, '');
    const isOp = s => [ '+', '-', '*', '/' ].includes( s ); // 是否为操作符
    const shouldOp = ( ) => [ '*', '/' ].includes( ops[ ops.length - 1 ]); // 当前该轮，是否需要立马计算

    for ( let i = 0; i < _s.length; i++ ) {
        const cur = _s[ i ];
        if ( isOp( cur )) { // 操作符
            ops.push( cur )
        } else {
            num += cur;
            if ( isOp( _s[ i + 1 ]) || _s[ i + 1 ] === undefined ) { // 已经是一个完整的数字，判断是否需要执行高级的操作
                if( shouldOp( )) {
                    const op = ops.pop( );
                    const lastNum = nums.pop( );
                    nums.push( 
                        op === '/' ?
                            Math.floor( lastNum / num ) :
                            lastNum * num
                    )
                } else {
                    nums.push( num );
                }
                num = '';
            }
        }
    }
    console.log(nums,ops)
    // 进行余下结果的运算
    while ( ops.length ) {
        const op = ops.shift( );
        const num1 = nums.shift( );
        const num2 = nums.shift( );
        nums.unshift( 
            op === '+' ?
                Number( num1 ) + Number( num2 ) :
                Number( num1 ) - Number( num2 )
        )
    }
    return nums[ 0 ];
};


/**
 * 
 * @description
 * 
 * 思路：
 * 每次遇到低操作符，直接入栈，遇到高操作符，则计算后入栈
 */
var calculate = function( s ) {
    let stack = [ ], num = 0, sign = '+'; // 默认是+
    for ( let i = 0; i <= s.length; i++ ) {
        if ( s[ i ] === ' ') continue
        if ( s[ i ] <= '9' && s[ i ] >= '0' ) {
            num = num * 10 + parseInt( s[ i ])
            continue
        } 
        switch( sign ) { // 上一个操作符
            case '+': stack.push( num ); break
            case '-': stack.push( -num ); break
            case '*': stack.push( stack.pop( ) * num ); break
            case '/': stack.push( ~~( stack.pop( ) / num )); break
        }
        sign = s[ i ]
        num = 0
    }
    return stack.reduce(( p, c ) => p + c, 0 )
}

console.log( calculate('3/2'))