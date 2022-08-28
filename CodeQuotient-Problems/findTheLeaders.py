def findTheLeaders(arr):
    leaders = [arr[-1]]
    for i in range(len(arr)-2, -1, -1):
        if arr[i] > max(arr[i+1:]):
            print(arr[:-i], i)
            leaders.append(arr[i])
    # print(leaders)
    return leaders


findTheLeaders([12, 27, 14, 11, 25, 6, 7])