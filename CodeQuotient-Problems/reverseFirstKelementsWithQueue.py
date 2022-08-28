class Queue:
    def __init__ (self):
        self.queue = []
    def enQueue(self,data):
        self.queue.append(data)
    def deQueue(self):
        if( not self.queue):
            return -1
        return self.queue.pop(0)
    def isEmpty(self):
        return not self.queue
    def size(self):
        return len(self.queue)

def reverseKElementsQueue(queue:Queue, K):
    stack = []
    for i in range(K):
        stack.append(queue.queue[i])
    for j in range(len(stack)):
        queue.enQueue(stack.pop())
        queue.deQueue()
    for k in range(len(queue.queue)-K):
        queue.enQueue(queue.deQueue())


Q = Queue()
Q.enQueue(10)
Q.enQueue(20)
Q.enQueue(30)
Q.enQueue(40)
Q.enQueue(50)
Q.enQueue(60)
Q.enQueue(70)
Q.enQueue(80)
Q.enQueue(90)
reverseKElementsQueue(Q, 5)
while not Q.isEmpty():
    print(Q.deQueue(), end=" ")