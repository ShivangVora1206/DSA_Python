import sys
def minCoins(n, a, dp):
    if n == 0:
        return 0
    ans = sys.maxsize

    for i in range(len(a)):
        if(n-a[i] >= 0):
            subAns = 0
            if dp[n-a[i]] != -1:
                subAns = dp[n-a[i]]
            else:
                subAns = minCoins(n-a[i], a, dp)
            if subAns != sys.maxsize and subAns +1 < ans:
                ans = subAns + 1
    
    dp[n] = ans
    return ans

n = 18
a = [7, 5, 1]
dp = [-1]*(n+1)
dp[0] = 0
ans = minCoins(n, a, dp)
print(ans)
# print(dp)