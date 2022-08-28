def isPalindrome(Str:str):
    arr = [x for x in Str]
    arr.reverse()
    rev = "".join(arr)
    if Str == rev:
        return True
    else:
        return False

print(isPalindrome("abca"))