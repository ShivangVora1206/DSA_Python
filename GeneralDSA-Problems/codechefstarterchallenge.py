# T = int(input())
# while T != 0:
#     n, k = map(int, input().split())
#     if k >= n:
#         print("YES")
#     else:
#         print("NO")
#     T-=1 

# T = int(input())
# while T != 0:
#   T-= 1

# T = int(input())
# while T != 0:
#     n, k, m = map(int, input().split())
#     bagCap = k*m
#     count = 0
#     while n > 0:
#         n = n-bagCap
#         count += 1
#     print(count)
#     T -= 1

# T = int(input())
# while T != 0:
#     n, k, x, y = map(int, input().split())
#     totalRedCost = k*x
#     remaining = n-k
#     print(min(y, x)*remaining + totalRedCost)
#     T-= 1

# T = int(input())
# while T != 0:
#     n, m = map(int, input().split())
#     if n % 2 == 0 and m % 2 == 0:
#         print(0)
#     elif n == m:
#         print(n+m-1)
#     else:
#         print(abs(n-m)*min(n, m))
    
# #     T-= 1
# def isPalindrome(str1):
#     temp = list(str1)
#     temp.reverse()
#     if "".join(temp) == str1:
#         return True
#     else:
#         return False

# T = int(input())
# while T != 0:
#     length = int(input())
#     string = input()
#     if isPalindrome(string):
#         print(string)
#     else:
#         i = 0
#         iterator = 0
#         while True:
#             temp1 = string[:i] + string[i+1:]
#             print("==============", i, temp1)
#             if isPalindrome(temp1):
#                 print(temp1)
#                 break
#             else:
#                 iterator -= 1
#             i += 1
#             iterator += 1
#             if iterator > length//2:
#                 break
        
#     T-= 1

T = int(input())
while T != 0:
    x, y, n, r = map(int, input().split())
    if r < x:
        print(-1)
    else:
        premium = 0
        regular = 0
        for i in range(n):
            if r >= y and r >= (n-i+1)*x:
                premium += 1
                r -= y
            elif r >= x:
                regular += 1
                r -= x
        print(regular, premium)
    T-=1