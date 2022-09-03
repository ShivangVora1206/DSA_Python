def isPowerOfTwo(self, n: int) -> bool:
    if n < 1:
        return False
    return n&(n-1) == 0