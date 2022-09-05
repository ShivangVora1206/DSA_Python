def isRotation(string1, string2):
    if string1 == string2:
        return True
    else:
        flag = False
        for i in range(len(string1)):
            string1 = string1[len(string1)-1:]+string1[:len(string1)-1]
            if string1 == string2:
                flag = True
                break
        if flag:
            return True
        else:
            return False

isRotation("abacd", "acdab")
isRotation("coder", "cored")
