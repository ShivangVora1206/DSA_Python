class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def inorderTraversal(root):
    out = []
    def dfs(node):
        if node:
            left = dfs(node.left)
            out.append(node.val)
            right = dfs(node.right)
            
    dfs(root)
    return out

root = TreeNode(1)
r1 = TreeNode(2)
l2 = TreeNode(3)
root.right = r1
r1.left = l2

print(inorderTraversal(root))