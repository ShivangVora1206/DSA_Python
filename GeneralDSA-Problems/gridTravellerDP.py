def gridTraveller(m, n, memo={}):
    if m == 0 or n == 0:
        return 0
    if m == 1 and n == 1:
        return 1
    if str(m)+","+str(n) in memo.keys():
        return memo[str(m)+","+str(n)]
    memo[str(m)+","+str(n)] = gridTraveller(m-1, n)+gridTraveller(m, n-1)
    return memo[str(m)+","+str(n)]

print(gridTraveller(18, 18))