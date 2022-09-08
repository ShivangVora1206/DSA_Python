def nthFibonacciTerm(n,m):
    dp = {}
    def fibs(n):
        if n == 0 or n == 1:
            return n
        if n-2 not in dp.keys():
            dp[n-2] = fibs(n-2)
        if n-1 not in dp.keys():
            dp[n-1] = fibs(n-1)
        return dp[n-2] + dp[n-1]
    
    return fibs(n)%m

print(nthFibonacciTerm(4, 8))
print(nthFibonacciTerm(7, 6))