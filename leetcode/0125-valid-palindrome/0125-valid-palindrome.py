class Solution:
    def isPalindrome(self, s: str) -> bool:
        res = ''.join(c.lower() for c in s if c.isalnum())
        left = 0
        right = len(res) - 1
        
        while left < right:
            if res[left] != res[right]:
                return False
            left = left + 1 
            right = right - 1
        return True

        
        