/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
 
  for (var i = 0; i <nums.length; i++) {

        // Last i elements are already in place  
        for (var j = 0; j < (nums.length - i - 1); j++) {

            // Checking if the item at present iteration 
            // is greater than the next iteration
            if (nums[j] >nums[j + 1]) {

                // If the condition is true
                // then swap them
                var temp = nums[j]
               nums[j] = nums[j + 1]
                nums[j + 1] = temp
            }
        }
    }
    return nums
};