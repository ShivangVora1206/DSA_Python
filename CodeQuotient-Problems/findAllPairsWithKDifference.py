def getPairsCount(arr, k):
    def binarySearch(arr, target):
        low = 0
        high = len(arr)-1
        while low <= high:
            mid = low+(high-low)//2
            if arr[mid] == target:
                return True
            elif arr[mid] > target:
                high = mid - 1
            elif arr[mid] < target:
                low = mid + 1
        return False
    count = 0
    arr.sort()
    for i in arr:
        if binarySearch(arr, i+k):
            count += 1
    return count

print(getPairsCount([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))