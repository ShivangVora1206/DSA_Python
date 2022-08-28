def strStr(haystack: str, needle: str) -> int:
    if needle not in haystack:
        return -1
    i = 0
    j = len(needle)
    while i <= len(haystack)-len(needle):
        if haystack[i:j] == needle:
            return i
        i += 1
        j += 1

print(strStr(haystack = "abba", needle = "bba"))
print(strStr(haystack = "hello", needle = "ll"))
print(strStr(haystack = "aaaa", needle = "bba"))