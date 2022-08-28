def combinationSum4(nums, target) -> int:
    def dfs(_sum, dp={}, temp=""):
        if _sum > target:
            return 0
        if _sum == target:
            return 1
        count = 0
        for i in nums:
            temp += str(i)+str(_sum)
            if temp in dp:
                count += dp[temp]
            else:
                dp[temp] = dfs(_sum+i)
                count += dp[temp]
        print(dp)
        return count
    return dfs(0)

print(combinationSum4([1, 2, 3], 4))
print(combinationSum4([9], 3))