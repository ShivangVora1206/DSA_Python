arr = [6, 9, 2, 8, 4, 1, 7]
arr = [6]

queries = [1, 4, 2]

def solveQueries(arr, queries):
    out = 0
    temp = sorted(list(arr[:]))[::-1]
    for i in queries:
        if i > len(temp)-1:
            out += temp[-1]
        else:
            out += temp[i-1]
    return out

print(solveQueries(arr, queries))