/**
 * 
 * @description
 * 
 * 题目：
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 
    输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
    输出：[4,9]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 遍历数组O( n )，记录出现过的数字、次数
 * 遍历数组O( m )，如果有出现过，则推入结果。
 */
var intersect = function( nums1, nums2 ) {
    const map = { };
    const res = [];
    for (const num1 of nums1) { // 存下nums1数字的出现次数
      if (map[num1]) {
        map[num1]++;  
      } else {         
        map[num1] = 1; 
      }
    }
    for (const num2 of nums2) {
      const val = map[num2];
      if (val > 0) {            
        res.push(num2);         
        map[num2]--;            // 匹配掉一个，就少了一个
      }
    }
    return res;
};

// console.log( intersect( [1,2,2,1], [2,2] ))
console.log( intersect( [4,9,5], [9,4,9,8,4] ))