def moveElements(arr, n):
    temp = [0]*n
    j = 0
    for i in range(len(arr)):
        if arr[i] >= 0:
            temp[j] = arr[i]
            j += 1
    for k in range(len(arr)):
        if arr[k] < 0:
            temp[j] = arr[k]
            j += 1
    for x in range(len(temp)):
        arr[k] = temp[k]
    

moveElements([-6, 7, 13, 10, -8, 15, 5, -9, 2, -1], 10)