def printArray(A,size):
    for i in range(size):
        print(A[i],end=' ')
    print()

def insertionSort(array,size):
    for i in range(1, size):
        key = array[i]
        j = i-1
        while j >=0 and key < array[j] :
            array[j+1] = array[j]
            j -= 1
        array[j] = key

if __name__=="__main__":
    A = [15,11,14,12,18]
    print('Unsorted Array:')
    printArray(A,len(A))
    print()
    
    insertionSort(A,len(A))

    print('Sorted Array')
    printArray(A,len(A))