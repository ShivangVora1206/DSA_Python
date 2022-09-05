def revWordsString(string):
    def reverser(inputString):
        _string = list(inputString)
        i = 0
        j  = len(_string)-1
        while i <= j:
            _string[i], _string[j] = _string[j], _string[i]
            i += 1
            j -= 1
        return "".join(_string)

    temp = string.split()
    out = [reverser(i) for i in temp]
    return " ".join(out)


print(revWordsString("Code Quotient Loves Code"))