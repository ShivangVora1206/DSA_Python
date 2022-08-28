def main():
    size = int(input())
    arr = list(map(int, input().split(" ")))
    arr1 = set(arr)
    arr = list(arr1)
    arr.sort()
    secondMax = arr[len(arr)-2]
    if max(arr) != secondMax:
        print(secondMax)
    else:
        print(0)

if __name__ == "__main__":
    main()

# a = [1, 2, 3, 1, 2, 3]
# _max = 0
# for i in range(len(a)):
#     if a[i] > _max:
#         _max = a[i]

# print("max", _max)
# seconMax = 0
# for i in range(len(a)):
#     if a[i] > seconMax and a[i] < _max:
#         seconMax = a[i]
# print(seconMax)