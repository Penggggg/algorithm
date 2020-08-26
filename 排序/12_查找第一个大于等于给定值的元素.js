/**
 * 
 * @description
 * 
 *  题目：
    [ 3，4，6，7，10 ]
    第一个大于等于 5 的元素: 6
 */


const find = ( arr, num ) => {
   const _find = ( a, s, e, n ) => {
      if ( s === e ) { 
         console.log( a[ s ])
         return n === a[ s ] ? s : -1
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

console.log( find([ 3, 5.3, 5.6, 7, 10 ], 5.5 ))