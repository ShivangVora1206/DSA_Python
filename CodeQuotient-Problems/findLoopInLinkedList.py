
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


def loopInList(head):
	if not head or not head.next or not head.next.next : return 0
	slow = head
	fast = head.next.next
	while fast and fast.next:
		if slow == fast:
			break
		slow = slow.next
		fast = fast.next.next
	if not fast or not fast.next: return 0
	count = 1
	slow = slow.next
	while slow != fast:
		count += 1
		slow = slow.next
	return count
    
# 1
# 10
# 5 4 9 3 10 2 19 29 8 15
# 6 2