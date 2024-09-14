/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
     const numMap = {}; // To store the index of the numbers

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // Check if the complement exists in the map
        if (complement in numMap) {
            return [numMap[complement], i];
        }

        // Store the index of the current number
        numMap[nums[i]] = i;
    }

    // If no solution is found, return null or any other appropriate value
    return null;
};