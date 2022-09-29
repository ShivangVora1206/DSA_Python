class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def checkPalindrome(head):
    temp1 = []
    while head:
        temp1.append(head.data)
        head = head.next
    temp2 = temp1[::-1]
    if temp2 == temp1:
        return 1
    return 0

a = Node(1)
b = Node(2)
c = Node(3)
d = Node(3)
e = Node(1)


a.next = b
b.next = c
c.next = d
d.next = e

print(checkPalindrome(a))