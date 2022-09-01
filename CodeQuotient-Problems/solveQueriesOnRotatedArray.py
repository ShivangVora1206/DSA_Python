from collections import deque 
def solveQueries(R, arr, queries):
	#arr = arr[R:] + arr[:R]
	arr = deque(arr) 
	arr.rotate(-R) 
	arr = list(arr) 
	for i in range(len(queries)):
		print(arr[queries[i]], end=" ")