class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def printList(node):
    while (node != None):
        print(node.data, end=' ')
        node = node.next


def rotateList(head, k):
    if head == None or k < 1:
        return head
    
    newHead = None
    curr = head
    
    i = 1
    while i < k and curr != None:
        curr = curr.next
        i+=1
    
    if curr == None or curr.next == None:
        return head
    else:
        kthNode = curr
        curr = curr.next

        newHead = kthNode.next
            

        kthNode.next = None
    

    while curr.next != None:
        curr = curr.next
    

    curr.next = head
    
    return newHead


a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)
f = Node(6)

a.next = b
b.next = c
c.next = d
d.next = e
e.next = f

printList(rotateList(a, 4))