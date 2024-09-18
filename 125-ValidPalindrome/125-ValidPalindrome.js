/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Remove non-alphanumeric characters and convert to lowercase
    let res = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    let start = 0;
    let end = res.length - 1;
    
    // Compare characters from start and end
    while (start < end) {  
        if (res[start] !== res[end]) {     
            return false;   
        }      
        start++; 
        end--;       
    }  
    return true; 
};