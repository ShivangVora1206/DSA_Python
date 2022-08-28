# def maxCoins(A, B, T, N):
#     if T == 0:
#         return 
#     return 

arr = [1, 2, 3, 4, 5, 6, 7]
x = 5
low = 0
high = len(arr) - 1
mid = 0

while low <= high:

    mid = (high + low) // 2
    if arr[mid] < x:
        low = mid + 1
    elif arr[mid] > x:
        high = mid - 1
    else:
        print(mid)
        break

# If we reach here, then the element was not present
else:
    print("not found")