def fibs(n, memo={}):
    if n <= 2:
        return 1
    if n in memo.keys():
        return memo[n]
    memo[n] = fibs(n-1)+fibs(n-2)
    return memo[n]

print(fibs(50))