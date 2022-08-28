def isPangram(str):
    alphabets = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    flag = True
    temp = str.split(" ")
    str = "".join(temp)
    for i in alphabets:
        if i not in str:
            flag = False
            break
    return flag

print(isPangram("pack the box with five dozen liquor jugs"))