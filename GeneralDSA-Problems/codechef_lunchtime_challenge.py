# test_cases = int(input())
# for i in range(test_cases):
#     points = list(map(int, input().split(' ')))
#     ans = False
#     for j in points:
#         for k in range(len(points)):
#             if j == points[k]+points[k-1]:
#                 ans = True
#                 print('YES')

#     if not ans:
#         print('NO')
# test_cases = int(input())
# for j in range(test_cases):
#     ans = False
#     nxy = list(map(int, input().split(' ')))
#     n = nxy[0]
#     x = nxy[1]
#     y = nxy[2]
#     array = list(map(int, input().split(' ')))
#     b = list(map(int, input().split(' ')))
#     for i in range(n):
#         if abs(array[i]-b[i]) == x or abs(array[i]-b[i]) == y:
#             ans = True
#         else:
#             ans = False
#     if ans:
#         print('YES')
#     else:
#         print('NO')
# 8 25
# 37159725

s = [3,8,0]
k = 9
max_count = 0
counts = []
for j in range(k):
    for m in range(1, len(s)+1):
        L = m
        for i in range(L):
            s[i] = (s[i]+1)%10
        # print(s)
        count = 0
        for n in s:
            if n == 0:
                count += 1
        counts.append(count)
print(max(counts))
