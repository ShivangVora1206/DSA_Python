def canTransformed(a, b, c, d):
    def recr(a, b):
        if a > c or b > d:
            return False
        if a == c and b == d:
            return True
        return recr(a+b, b) or recr(a, a+b)

    if recr(a, b):
        return 1
    return 0

print(canTransformed(1, 3, 7, 3))
print(canTransformed(1, 3, 4, 5))