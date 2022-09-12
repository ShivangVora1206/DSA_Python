T = int(input())
while T != 0:
    mat1 = []
    mat2 = []
    R1, C1 = map(int, input().split())
    for _ in range(R1):
        mat1.append(list(map(int, input().split())))

    R2, C2 = map(int, input().split())
    for _ in range(R2):
        mat2.append(list(map(int, input().split())))
    
    mat3 = [[0]*C2 for x in range(R1)]
    
    for i in range(len(mat1)):
        for j in range(len(mat2[0])):
            for k in range(len(mat2)):
                mat3[i][j] += mat1[i][k] * mat2[k][j]
    
    for l in mat3:
        for n in l:
            print(n, end=" ")
        print("")


    T -= 1
