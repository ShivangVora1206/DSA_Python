x = "dvdf"
longestsub = ""
counter = 0
maxlen = 0
for i in range(len(x)):
    if x[i] in longestsub:
        counter = 0
        longestsub = x[i]
    else:
        longestsub += x[i]
        print(longestsub)
        counter = len(longestsub)
    if counter > maxlen:
        maxlen = counter
        
print(maxlen)