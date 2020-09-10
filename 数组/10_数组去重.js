/**
 * 
 * @description
 * 
 * 题目：
 * 在O(1) 空间条件下完成：原地删除排序数组中的重复项，
 * 
 * 
 * 给定数组 nums = [ 0, 0, 1, 1, 1, 2, 2, 3, 3, 4 ],
   函数应返回新长度 5, 且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
   不需要考虑数组中，超出新长度后面的元素
 */




/**
 *
 * @description
 * 
 * 思路：
 * 交换通常是双指针法
*/
const removeDuplicates = nums => {
    let ptr = 1;
    for ( let i = 1; i < nums.length; i++ ) {
        if ( nums[ i ] !== nums[ i - 1 ]) {
            nums[ ptr++ ] = nums[ i ];
        }
    }
    return ptr;
}


console.log( removeDuplicates([ 0, 0, 1 ]))