def numberOfWeakCharacters(properties):
    properties.sort(key=lambda x:(-x[0], x[1]))
    count = 0
    maxAttack = properties[0][0]
    maxDefense = properties[0][1]
    for i in range(1, len(properties)):
        if properties[i][0] < maxAttack and properties[i][1] <maxDefense:
            count += 1
        else:
            maxAttack = properties[i][0]
            maxDefense = properties[i][1]
    return count

print(numberOfWeakCharacters([[5,5],[6,3],[3,6]]))
print(numberOfWeakCharacters([[2,2],[3,3]]))
print(numberOfWeakCharacters([[1,5],[10,4],[4,3]]))
print(numberOfWeakCharacters([[7,9],[10,7],[6,9],[10,4],[7,5],[7,10]]))
