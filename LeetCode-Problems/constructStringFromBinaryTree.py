# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def tree2str(self, root: Optional[TreeNode]) -> str:
        string = []
        def logic(root, string):
            # base case
            if root is None:
                return

            # push the root data as character
            string.append(str(root.val))

            # if leaf node, then return
            if not root.left and not root.right:
                return

            # for left subtree
            string.append('(')
            logic(root.left, string)
            string.append(')')

            # only if right child is present to
            # avoid extra parenthesis
            if root.right:
                string.append('(')
                logic(root.right, string)
                string.append(')')
        logic(root, string)
        return "".join(string)