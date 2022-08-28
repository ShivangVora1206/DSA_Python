

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def rightSideView(self, root):
        outList = []
        outList.append(root.val)
        i = root
        while i.right:
            outList.append(i.right.val)
            i = i.right
        print(outList)


root = TreeNode(1)
l1 = TreeNode(2)
r1 = TreeNode(3)
ll2 = TreeNode(None)
lr2 = TreeNode(5)
rl2 = TreeNode(None)
rr2 = TreeNode(4)
root.left = l1
root.right = r1
l1.left = ll2
l1.right = lr2
r1.left = rl2
r1.right = rr2
s1 = Solution()
s1.rightSideView(root)