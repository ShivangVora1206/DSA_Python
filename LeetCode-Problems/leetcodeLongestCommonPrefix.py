def longestCommonPrefix( strs) -> str:
    reference = list(min(strs))
    counter = len(reference)
    if len(strs) > 1:
        if len(strs[0]) > 0 and len(strs[1]) > 0:
            if strs[0][0] != strs[1][0]:
                return ""
    for i in strs:
        for j in range(min(len(i),len(reference))):
            if i[j] != reference[j]:
                reference[j] = ""
                counter -= 1
    
    # print(counter, reference, reference[:counter])

    return "".join(reference[:counter])


print(longestCommonPrefix(["flower","flow","flight"]))
print(longestCommonPrefix(["dog","racecar","car"]))
print(longestCommonPrefix(["cir","car"]))
print(longestCommonPrefix(["babb","caa"]))
print(longestCommonPrefix(["",""]))