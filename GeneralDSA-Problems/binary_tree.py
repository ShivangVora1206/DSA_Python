class Node:
    def __init__(self, data, lchild=None, rchild=None):
        self.data = data
        self.lchild = None
        self.rchild = None

root = Node(1)
root.lchild = Node(2)
root.rchild = Node(3)

print(root.data)
print(root.lchild.data)
print(root.rchild.data)