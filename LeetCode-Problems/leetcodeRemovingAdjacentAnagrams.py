
def removeAnagrams(words):
    if len(words)==1:
        return words
    i = 1 
    while i<len(words):
        if sorted(list(words[i]))==sorted(list(words[i-1])):
            words.pop(i)
        else:
            i+=1 
    return words

print(removeAnagrams(["yjonq","yqnoj","oyqjn","nqoyj","onjqy","joqyn","qynjo","jynoq"]))
print(removeAnagrams(["abba","baba","bbaa","cd","cd"]))
print(removeAnagrams(["a","b","c","d","e"]))
print(removeAnagrams(["z","z","z","gsw","wsg","gsw","krptu"]))