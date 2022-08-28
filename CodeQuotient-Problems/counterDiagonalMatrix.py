def counterDiagonal(matrix, n):
    #  First Half
    i = 0
    while (i < n) :
        j = i
        while (j >= 0 and i - j < n) :
            #  Display element value
            print(matrix[i - j][j], end =" ")
            j -= 1
        i += 1
    #  Second Half
    i = 1
    while (i < n) :
        j = n - 1
        k = i
        while (j >= 0 and k < n) :
            print(matrix[k][j], end =" ")
            j -= 1
            k += 1
        i += 1


n = int(input())
matrix = []
for i in range(n):
    matrix.append(list(map(int, input().split(" "))))
counterDiagonal(matrix, n)
