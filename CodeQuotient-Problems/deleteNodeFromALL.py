def deleteNode(node):
	if not node : return
	if not node.next : return
	nextData = node.next.data
	nextNode = node.next.next
	node.data = nextData
	node.next = nextNode