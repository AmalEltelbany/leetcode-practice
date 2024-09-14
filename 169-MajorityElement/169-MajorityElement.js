/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  const frequencies = {};
    for (const item of nums) {
        if (frequencies[item]) {
            frequencies[item]++;
        } else {
            frequencies[item] = 1;
        }
    }
    let majorityElement = null;
    let maxCount = 0;

  for (const [key, value] of Object.entries(frequencies)) {
    if (value > maxCount) {
      maxCount = value;
      majorityElement = key;
    }
  }

  return parseInt(majorityElement);  

};