class Stack:
    def __init__(self, max_length):
        self.__max_length = max_length
        self.__elements = [None] * self.__max_length
        self.__top = -1

    def get_top(self):
        return self.__top
    
    def get_elements(self):
        return self.__elements

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
book_input = {

}

def output():
    to_find = min(book_input)
    amount = 0
    x = s1.get_elements()
    index = s1.get_top()
    while index >= 0:
        if x[index] != to_find:
            amount += 1
        elif x[index] == to_find:
            break
        index -= 1
    print(amount, book_input[to_find])

n = int(input())
s1 = Stack(n)
for i in range(n):
    try:
        a, b = map(str, input().split(' '))
        a = int(a)
        book_input[a] = b
        s1.push(a)
    except:
        output()


