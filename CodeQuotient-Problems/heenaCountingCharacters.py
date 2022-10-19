
def countFrequency(string:str):
    cache = {}
    for i in string:
        if i not in cache:
            cache[i] = 1
        else:
            cache[i] += 1
    
    cache = dict(sorted(cache.items(), key=lambda x:x[0]))
    for i in cache.keys():
        print(i+str(cache[i]), end=" ")

countFrequency("codequotient")