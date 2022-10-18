def collectData(arr, N):
    stack = [arr[0]]
    out = []
    for i in range(1, N):
        if arr[i] > stack[-1]:
            while arr[i] > stack[-1]:
                stack.pop()
                out.append(arr[i])
                if len(stack) == 0: break
            stack.append(arr[i])
        else:
            stack.append(arr[i])
        print(out, stack)
    while len(stack) != 0:
        stack.pop()
        out.append(-1)
    # print(out, stack)
    return sum(out)

print(collectData([1, 2, 3, 4], 4))
print(collectData([2, 1, 4, 6, 5], 5))
print(collectData([2, 1, 4, 6, 5, 11, 9, 10, 2, 3], 10))