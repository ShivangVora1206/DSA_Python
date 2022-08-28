def summation(n, m):
    if n == 0:
        return 0
    return m+summation(n//10, n%10)

T = int(input())
while T!=0:
    n = int(input())
    m = int(str(n)[0])
    print(summation(n, m))
    T -= 1