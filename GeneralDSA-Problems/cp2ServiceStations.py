class Node:
    def __init__(self, Value=None):
        self.Value = Value
        self.connectedVertices = []
        self.degree = len(self.connectedVertices)
class Graph:
    def __init__(self):
        self.graphNodes = []
    
    def addNode(self, Value, connectedVertices=None):
        newNode = Node(Value)
        self.graphNodes.append(newNode)
    
    def addEdge(self, fromNode, toNode):
        for i in self.graphNodes:
            if i.Value == fromNode:
                i.connectedVertices.append(toNode)
            if i.Value == toNode:
                i.connectedVertices.append(fromNode)

g1 = Graph()
towns = []
n, m = map(int, input().split(" "))
for i in range(1, n+1):
    g1.addNode(i)
    towns.append(i)
for j in range(m):
    a, b = map(int, input().split(" "))
    g1.addEdge(a, b)

degrees = []
for x in g1.graphNodes:
    degrees.append(len(x.connectedVertices))
print(degrees)
for i in range(len(towns)):
    for j in range(len(towns)):
        if degrees[i] > degrees[j]:
            temp = degrees[i]
            degrees[i] = degrees[j]
            degrees[j] = temp
            temp = towns[i]
            towns[i] = towns[j]
            towns[j] = temp
print(towns)



stations = 0

for x in range(len(g1.graphNodes)):
    print(x, g1.graphNodes[x].connectedVertices, g1.graphNodes[x].Value)
while len(towns) != 0:
    for k in towns:
        stations += 1
        towns.pop(towns.index(k))
        print("pop k", towns, k)
        for j in g1.graphNodes[k-1].connectedVertices:
            if j in towns:
                towns.pop(towns.index(j))
                print('pop j', towns, j)

print(stations)