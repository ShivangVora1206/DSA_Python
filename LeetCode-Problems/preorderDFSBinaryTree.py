class Tree:
    def __init__(self, val, left=None, right=None):
        self.left = left
        self.right = right
        self.val = val

root = Tree(1)
l1 = Tree(2)
r1 = Tree(3)
ll2 = Tree(4)
lr2 = Tree(5)

root.left = l1
root.right = r1
l1.left = ll2
l1.right = lr2

out = []

def dfs(node):
    if not node:
        out.append(None)
        return
    out.append(node.val) #preorder position
    dfs(node.left)
    dfs(node.right)

dfs(root)
print(out)
