test_case = int(input())
for i in range(test_case):
    first_line = list(map(int, input().split(' ')))
    p = first_line[-1]
    a = list(map(int, input().split(' ')))
    b = list(map(int, input().split(' ')))
    good_pairs = 0
    for i in a:
        for j in b:
            xor = i ^ j
            func = i*(xor)-1
            if xor < p and func % p == 0:
                good_pairs += 1
    print(good_pairs)



