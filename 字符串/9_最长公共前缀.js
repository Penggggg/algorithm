/**
 * 
 * @description
 * 
 * 题目：
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 
 * 输入: [ 'flower', 'flow', 'flight' ]
   输出: 'fl'
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 第1、2先对比，拿到公共前缀。
 * 拿该公共前缀不断等3、4、5对比，并逐步缩小前缀范围
 */
const sulotion = strs => {
    if ( !strs.length ) return '';
    if ( strs.length === 1 ) return strs[ 0 ]
    let res = compare( strs[ 0 ], strs[ 1 ]);
    for ( let i = 2; i <= strs.length - 1; i++ ) {
        res = compare( res, strs[ i ])
    }
    return res;
}

const compare = ( s, t ) => {
    let i = 0;
    let res = '';
    while ( !!s[ i ] && !!t[ i ]) {
        if ( s[ i ] === t[ i ]) {
            res += s[ i ];
            i++
        } else {
            return res;
        }
    }
    return res;
}


/**
 * 
 * @description
 * 
 * 思路：
 * 每次遍历，数组中所有的元素都要进行比较
 */
const sulotion2 = strs => {

    if ( !strs.length ) return '';
    if ( strs.length === 1 ) return strs[ 0 ];

    let i = 0;
    let res = '';

    while ( 1 ) {
        const cur = strs[ 0 ][ i ]
        const isOk = strs.every( s => s[ i ] === cur );
        if ( isOk && !!cur ) {
            i++
            res += cur;
        } else {
            return res;
        }
    }
}


// console.log( sulotion([ 'flower', 'flow', 'flight' ]))
console.log( sulotion2([ 'flower', 'flow', 'flight' ]))