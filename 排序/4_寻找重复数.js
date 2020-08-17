/**
 * 
 * @description
 * 
 * 题目：
   给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。


 * 
输入: [1,3,4,2,2]
输出: 2

输入: [3,1,3,4,2]
输出: 3
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 二分查找。二分实际含义是对元素个数进行2、2分组
 * 除了有有序集合进行二分，也能对无序集合二分
 * 
 * 类似于抽屉原理，
 * 桌上有十个苹果，要把这十个苹果放到九个抽屉里，无论怎样放，我们会发现至少会有一个抽屉里面放不少于两个苹果
 * 
 * 先猜一个数mid，
 * 后统计原始数组中大于等于这个中间数的元素的个数 cnt，如果 cnt大于mid
 * 则可以缩小集合 low = mid + 1
 */
var findDuplicate = function(nums) {
  let low = 1, high = nums.length - 1 // 数组项的范围 1 到 n
  while (low < high) { // 在循环中缩小区间，区间闭合循环结束
    let mid = (low + high) >> 1 // 求中位数
    let count = 0
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++ // 统计小于等于mid的个数
    }
    if (count > mid) { // 重复数落在 [1,mid]
      high = mid       // 区间收缩
    } else {           // 落在 [mid+1,n]
      low = mid + 1    // 区间收缩
    }
  }
  return low
};

console.log( findDuplicate([3,1,3,4,2]))