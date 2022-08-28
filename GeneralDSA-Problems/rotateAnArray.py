arr = [1, 2, 3, 4, 5, 6, 7]
n = 2
arr = arr[-len(arr)+n:] + arr[:-len(arr)+n]
print(arr)