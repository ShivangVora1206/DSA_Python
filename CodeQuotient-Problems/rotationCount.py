def rotationCount(arr:list):
    temp = sorted(arr)
    count = 0
    while True:
        if arr == temp:
            return count
        else:
            arr = arr[1-len(arr):]+arr[:1-len(arr)]
            count+=1

print(rotationCount([-7, -6, -5, -4, -2, -8]))
