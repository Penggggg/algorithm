/**
 * 
 * @description
 * 
 * 题目：
 * 实现2字符串字符串相加的函数（返回字符串）
 * 通过此算法可避免js下的精度损失
 * 
 * 问题：
 * Number.MAX_SAFE_INTEGER = 9007199254740991
 * Number.MAX_SAFE_INTEGER + 2 却等于 9007199254740992（此算法可解决）
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 以字符串为基础，实现一个小学加法法则（按位相加）
 */
const strAdd = ( s1, s2 ) => {
    let pre = 0; // 该位相加时，是否需要额要加1
    let res = [ ]; // 答案
    let sArr1 = s1.split('');
    let sArr2 = s2.split('');
    while ( sArr1.length || sArr2.length ) {
        const p1 = sArr1.pop( );
        const p2 = sArr2.pop( );
        const n1 = p1 !== undefined ? Number( p1 ) : 0;
        const n2 = p2 !== undefined ? Number( p2 ) : 0;
        const cur = n1 + n2 + pre;
        res.unshift( cur >= 10 ? cur % 10 : cur );
        pre = cur >= 10 ? 1 : 0
    }
    !!pre && res.unshift( pre )
    return res.join('');
}

console.log( Number.MAX_SAFE_INTEGER + 2 );
console.log( strAdd( String( Number.MAX_SAFE_INTEGER ), '2' ))