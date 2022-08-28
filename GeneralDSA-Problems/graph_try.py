class Graph:
    def __init__(self, gdict=None):
        if gdict==None:
            self.gdict = {}
        else:
            self.gdict = gdict
    def getVertices(self):
        return self.gdict.keys()
    def addVertice(self, vert):
        self.gdict[vert] = []
    def getEdges(self):
        return self.gdict.values()
    def addEdge(self, _from, _to):
        self.gdict[_from].append(f'{_from},{_to}')
        self.gdict[_to].append(f'{_from},{_to}')

graph = {
    'a':['ab', 'ac'],
    'b':['ba', 'bc'],
    'c':['ca', 'cb']
}

g1 = Graph(graph)
print(g1.getVertices())
print(g1.getEdges())