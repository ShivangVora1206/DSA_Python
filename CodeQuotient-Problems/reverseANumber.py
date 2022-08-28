def _reverse(n, out=""):
    if n==0:
        return ""
    out = str(n%10)
    return out + str(_reverse(n//10, out))

print(_reverse(123))