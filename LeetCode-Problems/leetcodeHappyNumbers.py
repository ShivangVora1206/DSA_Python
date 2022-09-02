
def isHappy(n: int) -> bool:
    cache = {n : 1}
    def rec(num):
        if num == 1:
            return True
        if cache[num] > 1:
            return False
        _sum = 0
        for i in str(num):
            _sum += int(i)**2
        if _sum in cache.keys():
            cache[_sum] += 1
        else:
            cache[_sum] = 1
        # print(cache)
        return rec(_sum)
    return rec(n)

print(isHappy(19))
print(isHappy(2))