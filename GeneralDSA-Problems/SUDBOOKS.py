class Stack:
    def __init__(self, max_length):
        self.__max_length = max_length
        self.__elements = [None] * self.__max_length
        self.__top = -1

    def is_full(self):
        if self.__top == self.__max_length-1:
            return True
        else:
            return False
    
    def is_empty(self):
        if self.__top == -1:
            return True
        else:
            return False
    
    def push(self, data):
        if self.is_full():
            print('Stack is full')
        else:
            self.__top += 1
            self.__elements[self.__top] = data

    def pop(self):
        to_pop = None
        if self.is_empty():
            print('kuchbhi?')
        else:
            to_pop = self.__elements[self.__top]
            self.__elements[self.__top] = None
            self.__top -= 1
            print(to_pop)

    def display(self):
        index = self.__top
        while index >= 0:
            print(self.__elements[index])
            index -= 1

q = int(input())
s1 = Stack(q)
for i in range(q):
    query = input()
    if query == '-1':
        s1.pop()
    else:
        _query = query.split(' ')
        s1.push(_query[1])
