/**
 * 
 * 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
 * 
 *  初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
    你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

    输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3

    输出: [1,2,2,3,5,6]
 */


/**
 * 
 * @description
 * 
 * 思路：
 * 设置指针 len1 和 len2 分别指向 nums1 和 nums2 的有数字尾部，从尾部值开始比较遍历
 * nums2中的大，则插到尾部
 * nums1中的大，则交换位置，让“前排位置”置空
 * 
 * [1,2,3,0,0,0]
 * [2,5,6]
 * ⬇️
 * [1,2,3,0,0,6]
 * [2,5,null]
 * ⬇️
 * [1,2,3,0,5,6]
 * [2,null,null]
 * ⬇️
 * [1,2,null,3,5,6]
 * [2,null,null]
 * ⬇️
 * ....
 */
var merge = function(nums1, m, nums2, n) {
    let len1 = m - 1;
    let len2 = n - 1;
    let len = m + n - 1;
    while(len1 >= 0 && len2 >= 0) {
        nums1[len--] = nums1[len1] > nums2[len2] ? nums1[len1--] : nums2[len2--];
    }
    // 剩余的
    function arrayCopy(src, srcIndex, dest, destIndex, length) {
        dest.splice(destIndex, length, ...src.slice(srcIndex, srcIndex + length));
    }
    arrayCopy(nums2, 0, nums1, 0, len2 + 1);
};


