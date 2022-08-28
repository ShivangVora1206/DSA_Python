def removeDuplicates(array, N):
    temp = set(array)
    array = list(temp)
    array.sort()
    return array

print(removeDuplicates([7, 7, 18, 18, 18, 18, 21, 39, 39, 42, 42, 42], 3))