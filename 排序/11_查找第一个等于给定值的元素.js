/**
 * 
 * @description
 * 
 * 题目：
 * 查找第一个目标值（针对有序数组）
 * 
 * 思路：
   根据题意，找到目标值后，前后挪动
 */


const find = ( arr, num ) => {

    const _find = ( a, s, e, n ) => {
        if ( s === e ) { 
            // 找到目标值后，前后挪动
            if ( n === a[ s ]) {
                let i = s;
                while ( a[ i ] === n ) {
                    i--;
                }
                return i + 1;
            } else {
                return -1
            }
        }

        const m = Math.floor(( s + e ) / 2 );
        if ( n > a[ m ]) {
            return _find( a, m + 1, e, n );
        } else {
            return _find( a, s, m, n );
        }
    }
    return _find( arr, 0, arr.length - 1, num );
}

console.log( find([ 1, 1, 1, 5, 5, 5, 5, 9, 9, 9 ], 5 ))