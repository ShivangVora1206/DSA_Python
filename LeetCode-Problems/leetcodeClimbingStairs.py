def climbStairs(n: int) -> int:
    
    def dp(step, memo = {}):
        if step > n:
            return 0
        if step == n:
            return 1
        if step not in memo:
            memo[step] = dp(step + 1) + dp(step + 2)
        return memo[step]

    return dp(0)

print(climbStairs(5))