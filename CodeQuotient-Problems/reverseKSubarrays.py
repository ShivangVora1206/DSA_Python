def reverseSubarray(a, n, k):
    subs = []
    for i in range(0, n, k):
        temp = list(a[i:i+k])
        temp.reverse()
        subs.append(temp)
    arr = []
    for i in subs:
        for j in range(len(i)):
            arr.append(i[j])
    return arr


print(reverseSubarray([1, 2, 3, 4, 5, 6], 6, 3))