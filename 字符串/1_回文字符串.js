/**
 * @description
 * 
 * 题目：
 * 给定一个字符串，验证它是否是回文串（只考虑字母和数字字符，忽略字符、空格，可以忽略字母的大小写）
 */



/**
 * 
 * @description
 * 
 * 思路1：
 * 回文通过可用双指针，分别从头、尾。移动指针，相互逼近
 * str.replace(/[^0-9a-zA-Z]/g, '').toLowerCase()
 */
const sulotion = s => {
    s = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase( ); // 预先处理
    let x = 0;
    let y = s.length - 1;
    while( x < y ) {
        if ( s[ x ] !== s[ y ]) return false;
        x++;
        y--;
    }
    return true;
}


/**
 * 
 * @description
 * 
 * 思路2:
 * 单栈装入一半字符，然后栈根剩余一半字符串进行对比（缺点是需要找中点mid）
 */


console.log( sulotion('A man, a plan, a canal: Panama'))
console.log( sulotion('race a car'))