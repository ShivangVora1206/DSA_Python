def partitionArray(arr,x):
    i = 0
    j = len(arr)-1

    while (i < j):
        while (arr[i] <=x):
            i+=1
        while (arr[j] > x):
            j-=1
        if i < j:
            temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        
        i+=1
        j-=1