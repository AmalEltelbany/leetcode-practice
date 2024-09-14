/**
 * @param {number[]} nums
 * @return {number}
 */
//input :array
// remove duplicates in place
// all array unique
//return output
// my thoughts using hashset
//non decresing order


var removeDuplicates = function(nums) {
    let j=1;
    for(let i=0;i<nums.length;)
    {
        if(nums[i]===nums[j]){
        
            nums.splice(j,1)
           
        }
        
      else{ 
      j++;
      i++;
      } 

         
    }
  return nums.length;
};