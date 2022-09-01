def compressString(string):
    cache = {}
    for i in string:
        if i in cache.keys():
            cache[i] += 1
        else:
            cache[i] = 1
    out = ""
    for j in sorted(cache.keys()):
        if cache[j] > 1:
            out += j+str(cache[j])
        else:
            out += j
    return out

print(compressString("aabbccdef"))