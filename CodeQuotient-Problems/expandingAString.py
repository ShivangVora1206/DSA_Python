def expandString(Str):
    out = Str[0]
    prevLetter = Str[0]
    for i in Str[1:]:
        if i.isdigit():
            temp = int(i)-1
            while temp > 0:
                out += prevLetter
                temp -= 1
        else:
            prevLetter = i
            out += prevLetter

    return out
print(expandString("g2k2gd3g4"))
print(expandString("abd7"))
