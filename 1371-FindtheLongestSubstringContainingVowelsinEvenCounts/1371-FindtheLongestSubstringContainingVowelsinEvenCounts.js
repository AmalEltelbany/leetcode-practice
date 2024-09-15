/**
 * @param {string} s
 * @return {number}
 */
var findTheLongestSubstring = function(s) {
 let prefixXOR = 0;
        let longestSubstring = 0;
        
        // Initialize the character map for vowels
        let characterMap = new Array(26).fill(0);
        characterMap['a'.charCodeAt(0) - 'a'.charCodeAt(0)] = 1; // 1 << 0
        characterMap['e'.charCodeAt(0) - 'a'.charCodeAt(0)] = 2; // 1 << 1
        characterMap['i'.charCodeAt(0) - 'a'.charCodeAt(0)] = 4; // 1 << 2
        characterMap['o'.charCodeAt(0) - 'a'.charCodeAt(0)] = 8; // 1 << 3
        characterMap['u'.charCodeAt(0) - 'a'.charCodeAt(0)] = 16; // 1 << 4
        
        // Map to store the first occurrence of each prefixXOR value
        let mp = new Array(32).fill(-1);
        mp[0] = -1; // base case for prefixXOR 0
        
        for (let i = 0; i < s.length; i++) {
            // Update prefixXOR based on the current character
            let charCode = s[i].charCodeAt(0);
            prefixXOR ^= characterMap[charCode - 'a'.charCodeAt(0)];
            
            // Update the map and calculate the longest substring length
            if (mp[prefixXOR] === -1 && prefixXOR !== 0) {
                mp[prefixXOR] = i;
            }
            longestSubstring = Math.max(longestSubstring, i - mp[prefixXOR]);
        }
        
        return longestSubstring;
};