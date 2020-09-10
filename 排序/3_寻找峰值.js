/**
 * 
 * @description
 * 
 * 题目：
    峰值元素是指其值大于左右相邻值的元素。

    给定一个输入数组 nums，其中 nums[i] ≠ nums[i+1]，找到峰值元素并返回其索引。

    数组可能包含多个峰值，在这种情况下，返回任何一个峰值所在位置即可。

    你可以假设 nums[-1] = nums[n] = -∞。
 
    输入: nums = [1,2,3]
    输出: 2
    解释: 3 是峰值元素，返回其索引 2。

    输入: nums = [1,2,1,3,5,6,4]
    输出: 1 或 5 
    解释: 你的函数可以返回索引 1，其峰值元素为 2；
    或者返回索引 5， 其峰值元素为 6。
 */



var findPeakElement = function(nums) {
   if ( !nums.length ) return -1; // 特殊情况
   if ( nums.length === 1 ) return 0;
   
   if ( nums[ 0 ] > nums[ 1 ]) return 0; // 边界情况，321或者123
   if ( nums[ nums.length - 1 ] > nums[ nums.length - 2 ]) return nums.length - 1;
   
   for( let i = 1; i <= nums.length - 2; i++) { // 正常情况，遍历法
       if ( nums[ i ] > nums[ i - 1 ] && nums[ i ] > nums[ i + 1 ]) {
           return i;
       }
   }
   return -1
};