def decodeMessage(key: str, message: str):
    cache = {" ":" "}
    
    _index = 0

    temp = ['a', 'b', 'c', 'd', 'e',
            'f', 'g', 'h', 'i', 'j', 
            'k', 'l', 'm', 'n', 'o', 
            'p', 'q', 'r', 's', 't', 
            'u', 'v', 'w', 'x', 'y', 'z']

    for i in key:
        if i not in cache:
            cache[i] = temp[_index]
            _index += 1

    out = ""
    for j in message:
        out += cache[j]
    return out

print(decodeMessage(key = "eljuxhpwnyrdgtqkviszcfmabo", message = "zwx hnfx lqantp mnoeius ycgk vcnjrdb"))