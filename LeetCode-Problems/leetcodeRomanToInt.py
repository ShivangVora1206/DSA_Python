def romanToInt(s: str):
    romanDict = {
        "I":1,
        "V":5,
        "X":10,
        "L":50,
        "C":100,
        "D":500,
        "M":1000
    }

    temp = list(s)
    out = 0
    i = len(s)-1
    while i >= 0:
        if romanDict[temp[i-1]] < romanDict[temp[i]]:
            out += romanDict[temp[i]] + romanDict[temp[i-1]]*-1
            temp.pop(i)
            temp.pop(i-1)
            i -= 1
        else:
            out += romanDict[temp[i]]
            temp.pop(i)
        i -= 1
    return out

print(romanToInt("III"))