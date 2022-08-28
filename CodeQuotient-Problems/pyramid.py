n = int(input())

def makeString(n:int):
    arr = [str(x) for x in range(1, n+1)]
    arr2 = [str(x) for x in range(n, 1, -1)]
    return "".join(arr2+arr)

for i in range(n):
    print(makeString(i+1))
    