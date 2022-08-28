def isAnagram(string1:str, string2:str):
    letters = {}
    flag = True
    for i in string1:
        if i not in letters.keys():
            letters[i] = 1
        else:
            letters[i] += 1
    for j in string2:
        if j not in letters.keys():
            flag = False
            break
        else:
            if letters[j] != 0:
                letters[j] -= 1
            else:
                flag = False
    return flag


print(isAnagram("Hello", "Hillo"))