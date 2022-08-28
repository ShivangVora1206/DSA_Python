def binarySearch(arr:list, high, low, target):
    if target in arr:
        mid = low+(high-low)//2
        print(mid, arr[mid], target)
        if arr[mid] == target:
            return mid
        if arr[mid] > target:
            return binarySearch(arr, high=mid-1, low=low, target=target)
        if arr[mid] < target:
            return binarySearch(arr, high=high, low=mid+1, target=target)
        if low > high:
            return -1
    else:
        arr.append(target)
        arr.sort()
        return arr.index(target)

nums = [1,3,5,6]
print(binarySearch(arr=nums, high=len(nums)-1, low=0, target=7))
