def maxToys(cost, n, X):
    cost.sort()
    count = 0
    for i in cost:
        if X >= i:
            X -= i
            count += 1
    return count

maxToys([10, 12, 13, 111, 200, 1000, 10], 5, 7)