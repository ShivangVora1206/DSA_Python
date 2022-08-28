def moveElements(arr, n):
    for i in range(len(arr)):
        if arr[i] >= 0:
            for j in range(i, 0, -1):
                if arr[j-1] < 0:
                    temp = arr[j-1]
                    arr[j-1] = arr[j]
                    arr[j] = temp
                else:
                    break
    return arr

moveElements([-6, 7, 13, 10, -8, 15, 5, -9, 2, -1], 1)