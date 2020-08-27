/**
 * 
 * @description
 * 
 *  题目：
 *  移动零
    原地操作：给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序

    示例:
    输入: [0,1,0,3,12]
    输出: [1,3,12,0,0]
 */



/**
 * 
 * @description
 * 
 * 思路：
 * O( n )
 * 类似于插入排序，记录一个可以被插入的位置（0的位置），遍历过程把非0和0的位置进行互换
 */
const solution = arr => {
    let i = 0;
    let ptr = -1;
    while ( i < arr.length ) {
        if ( !arr[ i ]) { // 为0，找到可以插入的下标
            if ( ptr === -1 ) {
                ptr = i;
            }
        } else { // 非0
            if ( i === 4 ) {
                
            }
            if ( ptr !== -1 ) { // 可以互换
                [ arr[ ptr ], arr[ i ]] = [ arr[ i ], arr[ ptr ]];
                ptr++;
            }
        }
        i++;
    }
    return arr;
}

console.log( solution([ 0, 1, 0, 3, 12 ]))