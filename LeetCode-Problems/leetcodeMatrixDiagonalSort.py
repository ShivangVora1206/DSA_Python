

mat = [ 
        [3,3,1,1],
        [2,2,1,2],
        [1,1,1,2]
                    ]
def diagonalSort(mat):
    M, N = len(mat), len(mat[0])

    new_mat = []

    for i in range(M-1, 0, -1):
        r, c = i, 0
        temp = []
        while r < M and c < N:
            temp.append(mat[r][c])
            r += 1
            c += 1
        new_mat.append(sorted(temp))
        
    for j in range(N):
        r, c = 0, j
        temp = []
        while r < M and c < N:
            temp.append(mat[r][c])
            r += 1
            c += 1
        new_mat.append(sorted(temp))
    output = []
    for row in range(M):
        i = 0
        temp = []
        for k in range(len(new_mat)):
            if i >= N : break
            if new_mat[k] == [] : continue
            cand = new_mat[k].pop()
            temp.append(cand)
            i += 1
        output.append(temp)
    return reversed(output)