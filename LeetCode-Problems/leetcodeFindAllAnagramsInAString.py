def findAnagrams(s: str, p: str) :
    i, j = 0, len(p)
    found = []
    out = []
    _p = sorted(p)
    while i < len(s):
        if s[i:j] in found:
            out.append(i)
        else:
            temp = sorted(s[i:j])
            if temp == _p:
                out.append(i)
                found.append(s[i:j])
        i += 1
        j += 1
    return out

print(findAnagrams(s = "cbaebabacd", p = "abc"))


