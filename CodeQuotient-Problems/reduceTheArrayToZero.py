def reduceArray(arr):
    outList = []
    while sum(arr) != 0:
        count = 0
        temp = [x for x in arr if x != 0]
        nonZeroMin = min(temp)
        for i in range(len(arr)):
            if arr[i] >= nonZeroMin:
                arr[i] -= nonZeroMin
                count += 1
        outList.append(count)
    return outList

reduceArray([4, 5, 10, 8, 11])

