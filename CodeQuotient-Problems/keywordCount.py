def keywordCount(str, word):
    temp = str.split()
    count = 0
    while word in temp:
        count += 1
        temp.remove(word)
    return count

print(keywordCount("Code Quotient CoDE and CoDE", "CoDE"))