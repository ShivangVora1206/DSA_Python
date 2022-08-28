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


def evalPostfix(stack, expression):

    for c in expression[::-1]:
        if c.isnumeric():
            stack.push(int(c))
        else:
            RHS = stack.pop()
            LHS = stack.pop()
            if c == '+':
                stack.push(RHS + LHS)

            elif c == '-':
                stack.push(RHS - LHS)

            elif c == '*':
                stack.push(RHS * LHS)

            elif c == '/':
                stack.push(RHS // LHS)

            elif c == '^':
                stack.push(RHS ** LHS)

    return stack.pop()


# def evalPostfix(stack:CQStack,exp):
#     LHS = -1
#     RHS = -1
#     temp = 0
#     i = 0
#     while i < len(exp):
#         if len(exp) == 1 and exp[0] == "0":
#             return
#         if exp[i].isnumeric():
#             if str(stack.stack[stack.top]).isnumeric():
#                 RHS = int(stack.pop())
#                 LHS = int(exp[i])
#             else:
#                 RHS = int(exp[i])
#                 LHS = int(exp[i+1])
#             print(LHS, RHS)
#             operation = stack.pop()
#             if operation == '+':
#                 temp = LHS+RHS
#             elif operation == '-':
#                 temp = LHS-RHS
#             elif operation == '*':
#                 temp = LHS*RHS
#             elif operation == '/':
#                 temp = LHS/RHS
#             elif operation == '^':
#                 temp = LHS**RHS
#             stack.push(temp)



#         elif not exp[i].isnumeric():
#             stack.push(exp[i])
#         i += 1
#     return stack.pop()

print(evalPostfix(CQStack(),"*+3+3^3+333"))