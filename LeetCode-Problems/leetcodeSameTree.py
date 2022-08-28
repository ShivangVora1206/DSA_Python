class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        out = []
        def dfs(node):
            if node:
                out.append(node.val)
                dfs(node.left)
                dfs(node.right)
            else:
                out.append(None)
        dfs(p)
        temp1 = out[:]
        out.clear()
        dfs(q)
        temp2 = out[:]
        if temp1 == temp2:
            return True
        else:
            return False