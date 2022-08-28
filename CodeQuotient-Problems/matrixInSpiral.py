
# def spiralPrint(m, n, arr):
def printSpiral(arr, m, n):
    # m is the rows
    # n is the columns
    # arr is the list of elements
    k, l = 0, 0

    while k < m and l < n:
        # This will print the first row from the remaining rows
        for i in range (l, n):
            print (arr[k][i])

        k += 1

        # This will print the last column from the remaining columns
        for i in range (k, m):
            print (arr[i][n - 1])

        n -= 1

        # This will print the last row from the remaining rows
        if k < m:
            for i in range (n - 1, l - 1, -1):
                print (arr[m - 1][i])

            m -= 1

        # This will print the first column from the remaining columns
        if l < n:
            for i in range (m - 1, k - 1, -1):
                print (arr[i][l])

            l += 1



matrix1 = [  [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]   ]

matrix2 = [
    [7, 10, 9],
    [2, 9, 1],
    [6, 2, 3],
    [9, 1, 4],
    [2, 7, 5],
    [9, 9, 11]
]

printSpiral(matrix2, 6, 3)