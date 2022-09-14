

from collections import Counter


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def pseudoPalindromicPaths (self, root) -> int:
        def pre(root,dic):
            if root is None:
                return 0
            if root.left is None and root.right is None:
                if root.val not in dic:
                    dic[root.val]=1
                else:
                    dic[root.val]+=1
                fg=0
                for i in dic:
                    if dic[i]%2==1 and fg==1:
                        return 0
                    if dic[i]%2==1:
                        fg=1
                return 1
            if root.val not in dic:
                dic[root.val]=1
            else:
                dic[root.val]+=1
            x=pre(root.left,dic)
            if root.left:
                dic[root.left.val]-=1
            y=pre(root.right,dic)
            if root.right:
                dic[root.right.val]-=1
            return x+y
        dic={}
        return pre(root,dic)

root = TreeNode(2)
l = TreeNode(3)
r = TreeNode(1)
ll = TreeNode(3)
lr = TreeNode(1)
rr = TreeNode(1)

root.left = l
root.right = r
l.left = ll
l.right = lr
r.right = rr

s = Solution()

print(s.pseudoPalindromicPaths(root))