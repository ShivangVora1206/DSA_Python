
t = int(input())
for i in range(t):
    a, b = map(str, input().split(" "))
    parents = a+b
    n = int(input())
    names = ""
    for i in range(n):
        names+= input()
        # print(len(names))
    parentDict = {}
    for i in parents:
        if i in parentDict.keys():
            parentDict[i] = parentDict[i]+1
        else:
            parentDict[i] = 1
    flag = True
    for i in names:
        if i not in parentDict.keys():
            flag = False
            break
        if parentDict[i] <= 0:
            flag = False
        if i in parentDict.keys():
            parentDict[i] = parentDict[i]-1
    if flag:print("YES") 
    else : print("NO")