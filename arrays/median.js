// Median of two sorted array

/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  const all = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });
  // odd amount of total indices, return the middle
  if (all.length % 2 !== 0) {
    return all[Math.round(all.length - 1) / 2];
  } // *implicit else*
  // on even amount of indices, get the middle index & it's neighbor +1, and get their avg.
  const mid = all[all.length / 2 - 1];
  const mid2 = all[all.length / 2];
  return (mid + mid2) / 2;
};
