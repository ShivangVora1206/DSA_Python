def out(s, t):
    t1 = sorted(s)
    t2 = sorted(t)
    return t1 == t2

print(out(s = "rat", t = "car"))