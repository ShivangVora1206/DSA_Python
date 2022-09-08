class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        cache = {}
        for i in nums:
            if i in cache.keys():
                cache[i] += 1
            else:
                cache[i] = 1
        for i in cache.keys():
            if cache[i] >= 2:
                return True
        return False