
rows = 1
out = [[1]*x for x in range(1, rows+1)]
index = 0
for i in out:
    print(index)
    if len(i) > 2:
        p1 = 1
        while p1 < len(i)-1:
            i[p1] = out[index-1][p1] + out[index-1][p1-1]
            p1 += 1
    index += 1

print(out)
