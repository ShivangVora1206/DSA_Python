# basic fibs with recusrion
# def fibs(n):
#     if n==1 or n==2:
#         return 1
#     return fibs(n-1)+fibs(n-2)

# print(fibs(3))

n = int(input())
memo = [None]*(n+1)
# print(memo)
def fibs(n, memo):
    # print(n)
    if memo[n] != None:
        return memo[n]
    if n == 1 or n==2:
        return 1
    else:
        return fibs(n-1, memo)+fibs(n-2, memo)

print(fibs(n, memo))