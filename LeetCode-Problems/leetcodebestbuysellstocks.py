arr =[7,1,5,3,6,4]

maxsofar = 0
_min = 9223372036854775807

for i in range(1, len(arr)):
    if arr[i] < _min:
        _min = arr[i]
    elif arr[i] > _min:
        maxsofar = max(arr[i]-_min, maxsofar)

print(maxsofar)
