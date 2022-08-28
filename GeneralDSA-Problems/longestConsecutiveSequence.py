class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums = list(sorted(set(nums)))
        if nums == []:
            return 0
        else:
            temp = ""
            for i in range(len(nums)):
                if nums[i-1] == nums[i]-1:
                    temp+='1'
                else:
                    temp+='0'

            return (len(max(temp.split('0')))+1)

