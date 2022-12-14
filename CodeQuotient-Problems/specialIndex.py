
def specialIndex(arr,n):
    total_sum = sum(arr)
    leftsum = 0
    for i, num in enumerate(arr):
         
        # total_sum is now right sum
        # for index i
        total_sum -= num
         
        if leftsum == total_sum:
            return i
        leftsum += num
      
      # If no equilibrium index found,
      # then return -1
    return -1