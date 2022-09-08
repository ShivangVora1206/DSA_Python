def spiralTraversal(matrix):
    top = 0
    left = 0
    bottom = len(matrix)-1
    right = len(matrix[0])-1
    direction = 0

    while top <= bottom and left <= right:

        if direction == 0:
            for i in range(left, right+1):
                print(matrix[top][i])
            top += 1
            direction = 1

        elif direction == 1:
            for i in range(top, bottom+1):
                print(matrix[i][right])
            right -= 1
            direction = 2

        elif direction == 2:
            for i in range(right, left-1, -1):
                print(matrix[bottom][i])
            bottom -= 1
            direction = 3

        elif direction == 3:
            for i in range(bottom, top-1, -1):
                print(matrix[i][left])
            left += 1
            direction = 0
    
spiralTraversal(matrix = [  [1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9]   ])
