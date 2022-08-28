def plusOne(digits):
    temp1 = "".join([str(x) for x in digits])
    temp = str(int("".join(temp1))+1)
    out = [int(x) for x in temp]
    return out

print(plusOne([4,3,2,1]))