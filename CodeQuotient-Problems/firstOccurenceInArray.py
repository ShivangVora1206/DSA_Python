def main():
    T = int(input())
    while T!=0:
        size, target = map(int, input().split(" "))
        arr = list(map(int, input().split(" ")))
        if len(set(arr)) == 1:
            print(0)
        else:
            occurence = -1
            low = 0
            high = len(arr)-1
            mid = low+(high-low)//2
            while low <= high:
                if mid > len(arr)-1:
                    break
                if arr[mid] == target:
                    occurence = mid
                    try:
                        arr.pop(mid)
                    except:
                        break
                elif target < arr[mid]:
                    high = mid-1
                elif target > arr[mid]:
                    low = mid+1
                mid = low+(high-low)//2
            print(occurence)
        
        T-=1
if __name__ == "__main__":
    main()