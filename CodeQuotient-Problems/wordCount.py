def countWords(string):
    arr = string.split(" ")
    count = 0
    for i in arr:
        if str(i).isalnum():
            count += 1
    return count

print(countWords("Programming            starts     at        CodeQuotient"))