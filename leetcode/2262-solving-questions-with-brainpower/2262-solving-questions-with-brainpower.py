class Solution:
    def mostPoints(self, questions: List[List[int]]) -> int:
        n = len(questions)
        memo = {}
    
        def dp(i):
            if i >= n:  # Base case
                return 0
            if i in memo:  # Cached result
                return memo[i]
            
            points_i, brainpower_i = questions[i]
            # Skip or solve
            memo[i] = max(dp(i + 1), points_i + dp(i + brainpower_i + 1))
            return memo[i]
        return dp(0)