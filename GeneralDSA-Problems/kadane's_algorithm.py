def maxSumSubArray(arr):
    maxsum = -999999999
    cursum = 0
    for i in range(len(arr)):
        cursum += arr[i]
        if cursum > maxsum:
            maxsum = cursum
        if cursum < 0:
            cursum = 0
    return maxsum

print(maxSumSubArray([-2,-3,4,-1,2,5,-3]))
