/**
 * 
 * @description
 * 
 * 题目：
 * 写一个插入排序
 * 
 * 思路：
 * 给原数组划分，“有序”、“无序”两个区域
 * 从“无序区”挑选第一个元素，不断跟“有序区”比较
 * 
 * 不适合的话，有序区就往后挪。
 * 适合的话，就插入到目标位置
 */


const insertSort = arr => {
    for( let i = 1; i < arr.length; i++ ) { // i=0，默认为有序区
        let j =  i;
        const target = arr[ i ];
        for( ; j > 0; j-- ) {
            if ( target >= arr[ j - 1 ]) break; // 找到了
            arr[ j ] = arr[ j - 1 ];  // 找不到，就挪一下
        }
        arr[ j ] = target;
    }
    return arr;
}

console.log( insertSort([ 3,30,34,5,9 ]))