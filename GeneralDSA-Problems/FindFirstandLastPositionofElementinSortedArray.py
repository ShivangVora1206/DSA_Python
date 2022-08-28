# def searchRange(nums, target) :
#     if target not in nums:
#         return [-1, -1]
#     foccurence = len(nums)
#     loccurence = -1
#     low = 0
#     high = len(nums)-1
#     mid = low+(high-low)//2
#     while low <= high:
#         if mid > len(nums)-1:
#             break
#         if nums[mid] == target:
#             occurence = mid
#             print(occurence)
#             if occurence < foccurence:
#                 foccurence = occurence
#             if occurence > loccurence:
#                 loccurence = occurence
#             try:
#                 nums.pop(mid)
#             except:
#                 break
#         elif target < nums[mid]:
#             high = mid-1
#         elif target > nums[mid]:
#             low = mid+1
#         mid = low+(high-low)//2
#     return [foccurence, loccurence]

# print(searchRange([2,2], 2))

class Solution:
        def searchRange(self, nums, target) :
            def first(arr, low, high, x, n) :
                if(high >= low) :
                    mid = low + (high - low) // 2
                    if( ( mid == 0 or x > arr[mid - 1]) and arr[mid] == x) :
                        return mid
                    elif(x > arr[mid]) :
                        return first(arr, (mid + 1), high, x, n)
                    else :
                        return first(arr, low, (mid - 1), x, n)
                
                return -1
            
            def last(arr, low, high, x, n) :
                if (high >= low) :
                    mid = low + (high - low) // 2
                    if (( mid == n - 1 or x < arr[mid + 1]) and arr[mid] == x) :
                        return mid
                    elif (x < arr[mid]) :
                        return last(arr, low, (mid - 1), x, n)
                    else :
                        return last(arr, (mid + 1), high, x, n)
                        
                return -1
                
            
            # Driver program
            arr = nums
            n = len(arr)
            
            x = target
            return [first(arr, 0, n - 1, x, n), last(arr, 0, n - 1, x, n)]

s = Solution()
print(s.searchRange([2, 2], 2))