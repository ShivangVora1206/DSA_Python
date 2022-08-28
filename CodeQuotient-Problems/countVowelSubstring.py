def countVowelSubstr(str):
    count = 0
    vowels = ['a', 'e', 'i', 'o', 'u']
    for i in range(len(str)):
        if str[i][0].lower() in vowels:
            count = (count + (len(str) - i) % 10007) % 10007
    return count
    
# def countVowelSubstr(str):
#     substrings = [str[i: j] for i in range(len(str)) for j in range(i + 1, len(str) + 1)]
#     count = 0
#     vowels = ['a', 'e', 'i', 'o', 'u']
#     for i in substrings:
#         if i[0].lower() in vowels:
#             count += 1
#     return count%10007


print(countVowelSubstr("CODEquotient"))