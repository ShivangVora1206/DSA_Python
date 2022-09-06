# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def pruneTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        def search(root):
            if not root:
                return 0
            
            left = search(root.left)
            right = search(root.right)
            
            if not left:
                root.left = None
            if not right:
                root.right = None
            
            return max(root.val, left, right)
            
        if search(root):
            return root