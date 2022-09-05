class Node:
    def __init__(self, val=None, children=None):
        self.val = val
        self.children = children


def levelOrder(root) :
    cache = {}
    def dfs(node, depth):
        if node:
            if depth in cache.keys():
                cache[depth].append(node.val)
            else:
                cache[depth] = [node.val]
            if node.children:
                for i in node.children:
                    dfs(i, depth+1)
    dfs(root, 0)
    out = [cache[x] for x in sorted(cache.keys())]
    return out

root = Node(1)
a1 = Node(3)
b1 = Node(2)
c1 = Node(4)
d2 = Node(5)
e2 = Node(6)

root.children = [a1, b1, c1]
a1.children = [d2, e2]

print(levelOrder(root))