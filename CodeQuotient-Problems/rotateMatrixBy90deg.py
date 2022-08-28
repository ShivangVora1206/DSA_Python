
T = int(input())
while T!=0:
    N = int(input())
    matrix = []
    for i in range(N):
        matrix.append(list(map(int, input().split(" "))))
    def rotate90Clockwise(arr, N) :
        for j in range(N) :
            for i in range(N - 1, -1, -1) :
                if i != 0:
                    print(arr[i][j], end = " ")
                else:
                    print(arr[i][j], end = "")
            print()


    rotate90Clockwise(matrix, N)
    print()
    T-=1