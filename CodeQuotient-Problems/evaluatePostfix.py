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
        self.top = self.top-1;
        return self.stack.pop()

    def isEmpty(self):
        if(self.top == -1):
            return True
        return False

    def isFull(self):
        if(self.top == sys.maxsize):
            return True
        return False


def evalPostfix(stack,exp):
    LHS = 0
    RHS = 0
    temp = 0
    i = 0
    while i < len(exp):
        if len(exp) == 1 and exp[0] == "0":
            return
        if exp[i].isnumeric():
            stack.push(exp[i])
        elif not exp[i].isnumeric():
            RHS = int(stack.pop())
            LHS = int(stack.pop())
            if exp[i] == '+':
                temp = LHS+RHS
            elif exp[i] == '-':
                temp = LHS-RHS
            elif exp[i] == '*':
                temp = LHS*RHS
            elif exp[i] == '/':
                temp = LHS/RHS
            elif exp[i] == '^':
                temp = LHS**RHS
            stack.push(temp)
        i += 1
    return stack.pop()

print(evalPostfix(CQStack(),"0"))