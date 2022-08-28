
class Stack:
    def __init__(self, max_size):
        self.__maxsize = max_size
        self.__elements = [None]*self.__maxsize
        self.__top = -1
    
    def is_full(self):
        if self.__top == self.__maxsize-1:
            return True
        else:
            return False

    def is_empty(self):
        if self.__top == -1:
            return True
        else:
            return False

    def display(self):
        output = []
        length = 0
        for i in range(0, self.__top+1):
            output.append(self.__elements[i])
            length += 1
        print(output)
        return length

    def push(self, data):
        self.data = data
        if self.is_full():
            print('stack full')
        else:
            self.__top += 1
            self.__elements[self.__top] = self.data
            # self.display()
        

    def pop(self):
        to_pop = None
        if self.is_empty():
            print('stack empty')
        else:
            to_pop = self.__elements[self.__top]
            self.__elements[self.__top] = None
            self.__top -= 1
        return to_pop
# -------------------------------------------------

# class Stack:
#     def __init__(self,max_size):
#         self.__max_size=max_size
#         self.__elements=[None]*self.__max_size
#         self.__top=-1

#     def is_full(self):
#         if(self.__top==self.__max_size-1):
#             return True
#         return False

#     def is_empty(self):
#         if(self.__top==-1):
#             return True
#         return False

#     def push(self,data):
#         if(self.is_full()):
#             print("The stack is full!!")
#         else:
#             self.__top+=1
#             self.__elements[self.__top]=data

#     def pop(self):
#         if(self.is_empty()):
#             print("The stack is empty!!")
#         else:
#             data= self.__elements[self.__top]
#             self.__top-=1
#             return data

#     def display(self):
#         if(self.is_empty()):
#             print("The stack is empty")
#         else:
#             index=self.__top
#             while(index>=0):
#                 print(self.__elements[index])
#                 index-=1

s1 = Stack(5)
s1.push(1)
s1.push(2)
s1.push(3)
s1.push(4)
s1.push(5)
s1.display()
s1.push(6)
s1.pop()
s1.display()
print(len(s1))
# a = '(())(())'
# s1 = Stack(len(a))
# s2 = Stack(len(a))
# for i in a:
#     if i == '(':
#         s1.push(i)
#     elif i == ')':
#         s2.push(i)
# if s1.display() == s2.display():
#     print('match')
# else: print('mismatch')
