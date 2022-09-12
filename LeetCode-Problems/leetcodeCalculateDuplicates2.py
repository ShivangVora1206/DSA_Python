class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        cache = {}
        for i in range(len(nums)):
            if nums[i] in cache.keys():
                if abs(i-cache[nums[i]]) <= k:
                    return True  
            cache[nums[i]] = i
        return False
        