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
 * 思路1：
 * 利用new set的唯一性，但不符合题意
 */
const solution1 = arr => {
    const set = new Set( );
}



/**
 *
 * @description
 * 
 * 思路：
 * ptr指针法，它总指向下一个可以交换的位置
 * ptr - 1，则是上一个需要被对比的元素
*/
const solution = arr => {
    if ( !arr.length || arr.length === 1 ) return arr;
    let ptr = 1;
    for ( let i in arr ) {
        if ( arr[ ptr - 1 ] < arr[ i ] && ptr !== Number( i )) { // 值不等且大于（题意），下标不等
            [ arr[ ptr ], arr[ i ]] = [ arr[ i ], arr[ ptr ]];
            ptr++;
        } else if ( arr[ ptr - 1 ] < arr[ i ] && ptr === Number( i )) { // 下标相等，则跳过
            ptr++;
        }
    }
    return arr;
}

console.log( solution([ 0, 0, 1, 2, 3, 3, 5 ]))