def power(num, Pow):
    if Pow < 0:
        return -1
    if Pow == 0:
        return 1
    if Pow == 1:
        return num
    return num*power(num, Pow-1)

print(power(2, 5))