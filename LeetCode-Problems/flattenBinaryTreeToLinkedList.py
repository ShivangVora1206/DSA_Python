
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

root = TreeNode(3)
l1 = TreeNode(2)
r1 = TreeNode(5)
ll2 = TreeNode(3)
lr2 = TreeNode(4)
rr2 = TreeNode(6)
root.left = l1
root.right = r1
l1.left = ll2
l1.right = lr2
r1.right = rr2
out = []
def dfs(node):
    if not node:
        return None
    
    left = node.left
    right = node.right
    if left:
        out.append(left.val)
    if right:
        out.append(right.val)
    else:
        out.append(None)

    dfs(node.left)
    dfs(node.right)
    


dfs(root)
print(out)