def solveChallenges(arr, challenges):
    def binarySearchFirstOccurence(arr, target):
        res = -1
        low = 0
        high = len(arr)-1
        while low <= high:
            mid = low+(high-low)//2
            if arr[mid] == target:
                res = mid
                high = mid - 1
            elif arr[mid] > target:
                high = mid - 1
            elif arr[mid] < target:
                low = mid + 1
        return res
    def binarySearchLastOccurence(arr, target):
        res = -1
        low = 0
        high = len(arr)-1
        while low <= high:
            mid = low+(high-low)//2
            if arr[mid] == target:
                res = mid
                low = mid + 1
            elif arr[mid] > target:
                high = mid - 1
            elif arr[mid] < target:
                low = mid + 1
        return res
    out = 0
    for i in challenges:
        first = binarySearchFirstOccurence(arr, i)
        last = binarySearchLastOccurence(arr, i)
        if first != -1 and last != -1:
            out += last-first+1
    return out

print(solveChallenges([2, 2, 4, 5, 5, 5, 6], [5, 2, 6]))