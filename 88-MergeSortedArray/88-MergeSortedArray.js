/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // Create a temporary array to store the result
    let merged = [];
    
    // Pointers for nums1 and nums2
    let i = 0;
    let j = 0;
    
    // Traverse both arrays and merge
    while (i < m && j < n) {
        if (nums1[i] <= nums2[j]) {
            merged.push(nums1[i]);
            i++;
        } else {
            merged.push(nums2[j]);
            j++;
        }
    }
    
    // If there are remaining elements in nums1, add them to merged array
    while (i < m) {
        merged.push(nums1[i]);
        i++;
    }
    
    // If there are remaining elements in nums2, add them to merged array
    while (j < n) {
        merged.push(nums2[j]);
        j++;
    }
    
    // Copy the merged array back to nums1
    for (let k = 0; k < merged.length; k++) {
        nums1[k] = merged[k];
    }
};
