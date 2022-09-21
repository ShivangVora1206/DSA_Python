class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

def findLength(node):
    count = 0
    while node:
        count += 1
        node = node.next
    return count


def findMergePoint(head1,head2):
    firstCount = findLength(head1)
    secondCount = findLength(head2)
    difference = abs(firstCount-secondCount)
    biggerListHead = head1
    smallerListHead = head2
    if firstCount > secondCount:
        biggerListHead = head1
        smallerListHead = head2
    elif secondCount > firstCount:
        biggerListHead = head2
        smallerListHead = head1
    while difference != 0:
        biggerListHead = biggerListHead.next
        difference -= 1
    while biggerListHead != smallerListHead:
        if not biggerListHead or not smallerListHead:
            return None
        biggerListHead = biggerListHead.next
        smallerListHead = smallerListHead.next
    return biggerListHead

h1 = Node(1)
a1 = Node(2)
b1 = Node(3)
c1 = Node(4)
d1 = Node(5)
e1 = Node(6)

h2 = Node(11)
a2 = Node(22)
b2 = Node(33)

h1.next = a1
a1.next = b1
b1.next = c1
c1.next = d1
d1.next = e1

h2.next = a2
a2.next = b2
b2.next = d1

print(findMergePoint(h1, h2).data)