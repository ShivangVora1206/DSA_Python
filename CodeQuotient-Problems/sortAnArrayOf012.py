def sorting012Array(arr):
    zeroList = []
    oneList = []
    twoList = []
    for i in arr:
        if i == 0:
            zeroList.append(i)
        elif i == 1:
            oneList.append(i)
        else:
            twoList.append(i)
    return zeroList+oneList+twoList


sorting012Array([2, 2, 1, 0])