def multiplyGame(N):
    count = 0
    for i in range(1, N+1):
        if i*i <= N:
            count += 1
        else:
            break
    return count
print(multiplyGame(4))
print(multiplyGame(20))