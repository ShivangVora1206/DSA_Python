T = int(input())
while T != 0:
    size = int(input())
    a = list(map(str, input().split(" ")))
    n = int(input())
    for i in range(n):
        x = a[0]
        a.pop(0)
        a.append(x)
    a.remove("")
    print(" ".join(a))
    T-=1
