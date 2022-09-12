def makeAllZero(mat, r, c):
    cordsRow = []
    cordsCol = []

    for i in range(r):
        for j in range(c):
            if mat[i][j] == 0:
                cordsRow.append(i)
                cordsCol.append(j)

    for i in range(r):
        for j in range(c):
            if i in cordsRow or j in cordsCol:
                mat[i][j] = 0 
    
mat=[
        [4, 5, 6],
        [7, 0, 9],
        [1, 1, 1]

    ]
makeAllZero(mat)
print(mat)