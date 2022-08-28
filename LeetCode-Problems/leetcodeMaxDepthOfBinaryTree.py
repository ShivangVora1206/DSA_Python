class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def maxDepth(root) -> int:
    out = []
    if not root:
        return 0
    def dfs(node, temp):
        if node:
            dfs(node.left, temp+1)
            dfs(node.right, temp+1)
            out.append(temp)
    dfs(root, 1)
    return max(out)
root = TreeNode(1)
l = TreeNode(2)
r = TreeNode(3)
# ll = TreeNode(4)
# lr = TreeNode(5)
root.left = l
root.right = r
# l.left = ll
# l.right = lr

print(maxDepth(root))