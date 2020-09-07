/**
 * 
 * @description
 * 
 * 题目：
 * 统计其中可以组成三角形三条边的三元组个数。
 * 
 * 输入: [2,2,3,4]
   输出: 3
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 双指针
 */
var triangleNumber = function( nums ) {
    if ( nums.length < 3 ) return 0;
    let res = 0;
     nums.sort(( a, b ) => a - b ); // 升序
     for( let i = nums.length - 1; i > 1; i-- ){
         let l = 0;
         let r = i - 1;
         while( l < r ) {
             if( nums[ l ] + nums[ r ] > nums[ i ]){
                 res += r - l;
                 r--;
             } else {
                 l++;
             }
         }
     }
     return res;
};