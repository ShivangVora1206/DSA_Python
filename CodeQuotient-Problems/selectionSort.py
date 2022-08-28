def selectionSort(array):
    for i in range(len(array)):
        min_index = i
        for j in range(i+1, len(array)):
            if array[min_index] > array[j]:
                min_index = j       
        array[i], array[min_index] = array[min_index], array[i]

if __name__=='__main__':
    arr=[6, 3, 8, 9, 5]
    print('Given Array',' '.join( str(x) for x in arr ))
    selectionSort(arr)
    print('Sorted Array',' '.join( str(x) for x in arr ))