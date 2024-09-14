/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let i = 0; // Pointer to track the current index
    let n = nums.length; // Total length of the array

    while (i < n) {
        if (nums[i] === val) {
            // Remove the element at index 'i' by shifting elements forward
            nums.splice(i, 1);
            n--; // Decrease the length because we removed an element
        } else {
            i++; // Move to the next element if no removal
        }
    }
    
    return nums.length;
};
