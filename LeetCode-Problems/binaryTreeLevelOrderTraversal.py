# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def levelOrder(self, root):
        i = root
        out = []
        out.append([i.val])
        while i:
            j = i.left
            k = i.right
            if j and k:
                out.append([j.val, k.val])
            elif j:
                out.append([j.val])
            elif k:
                out.append([k.val])
            i = j
        i = root.right
        while i:
            j = i.left
            k = i.right
            if j and k:
                out.append([j.val, k.val])
            elif j:
                out.append([j.val])
            elif k:
                out.append([k.val])
            i = k

        print(out)

root = TreeNode(3)
l = TreeNode(9)
r = TreeNode(20)
rl = TreeNode(15)
rr = TreeNode(7)
root.left = l
root.right = r
r.left = rl
r.right = rr
s = Solution()
s.levelOrder(root=root)