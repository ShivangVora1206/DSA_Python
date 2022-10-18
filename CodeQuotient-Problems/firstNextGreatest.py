def printNextGreaterElement(arr,n):
    out = []
    for i in range(n):
        for j in range(i, n):
            if arr[j] > arr[i]:
                out.append(arr[j])
                break
            if j == n-1:
                out.append(-1)
    return out

print(printNextGreaterElement([1,2,3,4],4))