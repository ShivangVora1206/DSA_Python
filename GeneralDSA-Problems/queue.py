class Queue:
    def __init__(self, max_size):
        self.__max_size = max_size
        self.__elements = [None]*self.__max_size
        self.__rear = -1
        self.__front = 0
    
    def is_full(self):
        if self.__rear == self.__max_size-1:
            return True
        else:
            return False

    def is_empty(self):
        if self.__rear < self.__front:
            return True
        else:
            return False

    def enqueue(self, data):
        if self.is_full():
            print('Queue is full')
        else:
            self.__rear += 1
            self.__elements[self.__rear] = data

    def dequeue(self):
        dequeued = None
        if self.is_empty():
            print('Queue empty')
        else:
            dequeued = self.__elements[self.__front]
            self.__front += 1
        return dequeued

    def display(self):
        print('front -->'+ str(self.__elements[self.__front:self.__rear+1]) + '<-- rear')

    def len_queue(self):
        length = 0
        for i in self.__elements:
            if i != None:
                length += 1
        return length



# q1 = Queue(5)
# q1.enqueue(1)
# q1.enqueue(2)
# q1.enqueue(3)
# q1.display()
# q1.dequeue()
# q1.display()
# def fun(num):
#     if(num==0):
#         return 0
#     else:
#         queue.enqueue(num%10)
#         res=fun(num//10)
#         res=res*10+queue.dequeue()
#         return res
# queue = Queue(100)
# print(fun(123))
#  Input queue: 2,7,9,4,6,5,10
num_queue=Queue(7)
num_queue.enqueue(2)
num_queue.enqueue(7)
num_queue.enqueue(9)
num_queue.enqueue(4)
num_queue.enqueue(6)
num_queue.enqueue(5)
num_queue.enqueue(10)
# input_ = [2,7,9,4,6,5,10]

even = Queue(num_queue.len_queue())
odd = Queue(num_queue.len_queue())
for i in range(num_queue.len_queue()):
    x = num_queue.dequeue()
    if x % 2 == 0:
        even.enqueue(x)
    elif x % 2 != 0:
        odd.enqueue(x)
even.display()
odd.display()