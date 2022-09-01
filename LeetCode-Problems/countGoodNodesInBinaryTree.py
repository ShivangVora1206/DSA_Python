from doctest import OutputChecker


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def goodNodes(self, root: TreeNode):
        
        
        def dfs(node, prevNode):
            if node:
                cur = 0
                if prevNode <= node.val:
                    cur += 1
                    prevNode = max(prevNode, node.val)
            elif not node:
                return 0
            return dfs(node.left, prevNode) + dfs(node.right, prevNode) + cur
        
        return dfs(root, -1)

root = TreeNode(3)
l = TreeNode(1)
r = TreeNode(4)
ll = TreeNode(3)
rl = TreeNode(1)
rr = TreeNode(5)
root.left = l
root.right = r
l.left = ll
r.left = rl
r.right = rr
s = Solution()
print(s.goodNodes(root=root))

root = TreeNode(3)
l = TreeNode(3)
ll = TreeNode(4)
lr = TreeNode(2)
root.left = l
l.left = ll
l.right = lr
s1 = Solution()
print(s1.goodNodes(root=root))

root = TreeNode(1)
s3 = Solution()
print(s3.goodNodes(root))