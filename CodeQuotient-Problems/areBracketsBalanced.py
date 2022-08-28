class Stack():
    def __init__(self, size):
        self.size = size
        self.stack = [None]*size
        self.top = -1
    def isFull(self):
        if self.top == self.size-1:
            return True
        else:
            return False
    def isEmpty(self):
        if self.top == -1:
            return True
        else:
            return False
    def push(self, data):
        if not self.isFull():
            self.top += 1
            self.stack[self.top] = data
            return True
        else:
            return False
    def pop(self):
        if not self.isEmpty():
            temp = self.stack[self.top]
            self.stack[self.top] = None
            self.top -= 1
            return temp
        else:
            return -1

# def areBracketsBalanced(s):
#     S1 = Stack(len(s))
#     parity = {
#         ')':'(',
#         '}':'{',
#         ']':'['
#     }
#     if s[0] in parity.keys():
#         return False
#     for i in s:
#         if i in parity.values():
#             S1.push(i)
#         elif i in parity.keys():
#             val = S1.pop()
#             if val == -1:
#                 return False
#             elif val != parity[i]:
#                 return False
#     out = [x for x in S1.stack if x != None]
#     if len(out) == 0:
#         return True
#     else:
#         return False

class Solution:
    def isValid(self, s: str) -> bool:
        S1 = Stack(len(s))
        parity = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        if s[0] in parity.keys():
            return False
        for i in s:
            if i in parity.values():
                S1.push(i)
            elif i in parity.keys():
                val = S1.pop()
                if val == -1:
                    return False
                elif val != parity[i]:
                    return False
        out = [x for x in S1.stack if x != None]
        if len(out) == 0:
            return True
        else:
            return False
    
s = Solution()
print(s.isValid('(]'))