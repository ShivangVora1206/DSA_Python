import sys
class CQStack:
    def __init__(self):
        self.top = -1
        self.stack=[]
    
    def push(self,j):
        if self.isFull() :
            return
        self.top = self.top + 1
        self.stack.append(j)
    
    def pop(self):
        if(self.top == -1):
            return -1
        self.top = self.top-1
        return self.stack.pop()

    def isEmpty(self):
        if(self.top == -1):
            return True
        return False

    def isFull(self):
        if(self.top == sys.maxsize):
            return True
        return False
def reverseString(stack:CQStack,string):
    for i in string:
        stack.push(i)
    output = []
    while not stack.isEmpty():
        output.append(stack.pop())
    return "".join(output)

print(reverseString(CQStack(), "edoCtneitouQ"))
