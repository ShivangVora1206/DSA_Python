nums = [-1,0,0,0,0,3,3]
class Solution:
    def removeDuplicates(self, nums) -> int:
        temp = list(set(nums))
        temp.sort()
        for i in range(len(nums)):
            if i < len(temp):
                nums[i] = temp[i]
            else:
                nums[i] = '_'
        return len(temp)

s1 = Solution()
print(s1.removeDuplicates(nums))
print(nums)