from audioop import lin2adpcm
from threading import currentThread


class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def reverseList(head):
    previous = None
    current = head
    while current:
        temp = current.next
        current.next = previous
        previous = current
        current = temp
    head = previous
    return head

def listReader(head):
    while head:
        print(head.data)
        head = head.next

head = Node(0)
l1 = Node(1)
l2 = Node(2)
l3 = Node(3)
head.next = l1
l1.next = l2
l2.next = l3
listReader(head)
x = reverseList(head)
listReader(x)