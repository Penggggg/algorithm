/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个整数数组 nums，按要求返回一个新数组 counts
 * 数组 counts 有该性质： counts[i] 的值是  nums[i] 右侧小于 nums[i] 的元素的数量。

 * 
    输入：nums = [5,2,6,1]
    输出：[2,1,1,0] 
 */



/**
 * 
 * @description
 * 
 * 思路：
 * 逆向思维，把输入数组反过来遍历，一个个插入一个升序数组（从右遍历，先统计右侧元素
 * 插入的位置就是原数组中，就是比它小的右侧元素的个数
 * 
 * 
原数组为：[5,2,6,1]
排序数组：[]
结果数组：[]

第一轮：
原数组为：[5,2,6]
排序数组：[1]
插入的下标为 0，记入结果数组：[0]

第二轮：
原数组为：[5,2]
排序数组：[1,6]
插入的下标为 1，记入结果数组：[0,1]

第三轮：
原数组为：[5]
排序数组：[1,2,6]
插入的下标为 1，记入结果数组：[0,1,1]

第四轮：
原数组为：[]
排序数组：[1,2,5,6]
插入的下标为 2，记入结果数组：[0,1,1,2]

最后再反转
 */
var countSmaller = function( nums ) {
   const result = [ ];
   let sorted = [ ];
   while( !!nums.length ) {
      const target = nums.pop( );
      if ( !sorted.length ) {
         result.push( 0 );
         sorted.push( target );
      } else {
         let i = 0;
         // 这里可能可以用二分查找i进行优化
         while( sorted[ i ] < target && i < sorted.length ) {
            i++;
         }
         result.push( i );
         sorted = [
            ...sorted.slice( 0, i ),
            target,
            ...sorted.slice( i ),
         ]
      }
   }
   return result.reverse( );
};

console.log( countSmaller([5,2,6,1]))