/**
 * 
 * @description
 * 
 * 题目：
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */


/**
 * 
 * @description
 * 
 * 题目：
 * 找差值的过程
 */
var twoSum = function(nums, target) {
    let map = {};//key数字 value下标
    let loop = 0;//循环次数
    let dis;//目标与当前值的差
    while(loop < nums.length){
        dis = target - nums[loop];
        // 查找是否有差值
        if(map[dis] != undefined){
            return [map[dis], loop];
        }
        map[nums[loop]] = loop;
        loop++;
    }
    return;
};