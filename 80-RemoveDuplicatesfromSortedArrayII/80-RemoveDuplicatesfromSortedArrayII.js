/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
      let j=1;
    for(let i=0;i<nums.length;)
    {
        if(nums[i]===nums[j+1]){
        
            nums.splice(j,1)
           
        }
        
      else{ 
      j++;
      i++;
      } 

         
    }
  return nums.length;
};