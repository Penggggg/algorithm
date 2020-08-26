/**
 * 
 * @description
 * 
 * 题目：
 * 写一个冒泡排序
 * 
 * 思路：
 * 每一个【泡】只装载2个元素
 * 【泡】的作用就是让泡内部值更大的那个数处于【泡】的上方
 * 一组【冒泡】动作相当于让【当前最大值元素】坐电梯一般达到数组尾部（通过泡泡的内部交换，上升到水面）
 */



const buble = ( nums, isUp ) => {
    const n = nums.length;
    for( let i = 0; i < n; i++ ) {
        for( let j = 0; j < n - i - 1; j++ ) {
            if (( isUp && nums[ j ] > nums[ j + 1 ]) || // 升
                ( !isUp && nums[ j ] < nums[ j + 1 ])) { // 降
                    [ nums[ j ], nums[ j + 1 ]] = [ nums[ j + 1 ], nums[ j ]]
            }
        }
    }
    return nums;
}

console.log( buble([ 3,30,34,5,9 ], true ))
console.log( buble([ 3,30,34,5,9 ], false ))