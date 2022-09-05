def belongToSameSpecies(DNA_str1, DNA_str2):
    if DNA_str1 == DNA_str2 : return True
    prev = -1
    cur = 0
    for i in DNA_str2:
        try:
            cur = DNA_str1.index(i, prev+1)
            prev = cur
        except:
            return False
    return True


print(belongToSameSpecies("CodeQuotient", "CQti"))
print(belongToSameSpecies("CodeQuotient", "QCa"))
print(belongToSameSpecies("Hello", "Hi"))
