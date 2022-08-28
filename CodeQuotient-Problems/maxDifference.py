
def maxDifference(arr, n):
    maxDiff = 0
    # for i in range(n-1, -1, -1):
    #     j = i
        # while j >= 0 and arr[j] <= arr[i]:
        #     print(i, j, arr[j:i+1])
        #     maxDiff = max((max(arr[j:i+1]) - min(arr[j:i+1])), maxDiff)
        #     j -= 1
    i = n-1
    j = i
    while j >= 0:
        if arr[j] > arr[i]:
            i = j
        print(i, j, arr[j:i+1])
        maxDiff = max((max(arr[j:i+1]) - min(arr[j:i+1])), maxDiff)
        j -= 1
    return maxDiff

print(maxDifference(n = 7, arr = [2, 3, 10, 2, 4, 8, 1]))