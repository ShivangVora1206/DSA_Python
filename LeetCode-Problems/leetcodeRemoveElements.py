def removeElement(nums, val) -> int:
    while val in nums:
        nums.pop(nums.index(val))
    return len(nums)
nums = [0,1,2,2,3,0,4,2]
print(removeElement(nums, 2), nums)