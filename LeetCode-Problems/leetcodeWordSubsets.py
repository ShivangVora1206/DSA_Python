from collections import Counter


class Solution:
    def wordSubsets(self, A: List[str], B: List[str]) -> List[str]:
    #create totalword
        totalword ={}
        for b in B:
            tmp = Counter(b)
            for k,v in tmp.items():
                if k not in totalword:
                    totalword[k]=v
                else:
                    totalword[k]= max(v,totalword[k])
        output = []
        #for loop A in totalword
        for a in A:
            tmp = Counter(a)
            
        return output