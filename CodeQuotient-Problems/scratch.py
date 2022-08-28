# arr = [-5, 3, 7, 4, -2, 5, 2]
# for i in range(len(arr)):
#     if sum(arr[:i]) == sum(arr[i+1:]):
#         print(i)
a = [1, 2, 3]
b = [7, 8, 9]
a1 = set(a)
b1 = set(b)
temp = list(a1.union(b1))
print(temp)