def numsSameConsecDiff(n: int, k: int) :
    temp = range(10)
    for i in range(n-1):
        temp = {x*10+y for x in temp for y in [x%10+k, x%10-k] if x and 0<=y<10}
    return list(temp)