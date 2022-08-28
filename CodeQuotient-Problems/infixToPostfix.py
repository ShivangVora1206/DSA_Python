from sys import maxsize

def isEmpty(stack):
    return len(stack) == 0

def push(stack, item):
    stack.append(item)

def pop(stack):
    if (isEmpty(stack)):
        return -1
    return stack.pop()

def peek(stack):
    if(isEmpty(stack)):
        return -1
    return stack[-1]

def infixtopostfix(stack, exp):
    if len(exp) == 1 and exp[0] == "0":
        return
    Operators = set(['+', '-', '*', '/', '(', ')', '^'])
    Priority = {'+':1, '-':1, '*':2, '/':2, '^':3} 
    output = '' 
    for character in exp:
        if character not in Operators:  
            output+= character
        elif character=='(':  
            stack.append('(')
        elif character==')':
            while stack and stack[-1]!= '(':
                output+=stack.pop()
            stack.pop()
        else: 
            while stack and stack[-1]!='(' and Priority[character]<=Priority[stack[-1]]:
                output+=stack.pop()
            stack.append(character)
    while stack:
        output+=stack.pop()
    return output



print(infixtopostfix([], "(A-(B+C))*D"))