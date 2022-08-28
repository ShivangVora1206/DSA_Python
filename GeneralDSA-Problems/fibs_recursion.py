def fibs(n):
    if n == 0 or n == 1:
        return n
    return fibs(n-2) + fibs(n-1)

print(fibs(6))