def lengthOfLastWord(s: str) -> int:
    temp = s.split()
    return len(temp[-1])

print(lengthOfLastWord("luffy is still joyboy"))