def totalNoise(book_IDs, booksToFind):
    out = 0
    def binarySearch(arr, target):
        high = 0
        low = len(arr)-1
        mid = high+(low-high)//2
        while low >= high:
            mid = high+(low-high)//2
            if arr[mid] == target:
                return mid
            elif arr[mid] > target:
                high = mid + 1
            elif arr[mid] < target:
                low = mid - 1
        return len(arr)
    for i in booksToFind:
        out += binarySearch(book_IDs, i)
    return out


print(totalNoise([12, 10, 9, 8, 3, 2, 1], [9, 12, 2]))