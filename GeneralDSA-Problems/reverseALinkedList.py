from linked_list import Linked_list



def reverseLinked(linkedList):
    length = linkedList.length()-1
    _reversedList = Linked_list()
    while length >= 0:
        _reversedList.append(linkedList.get(length))
        length -= 1
    return _reversedList

_list = Linked_list()
_list.append(1)
_list.append(2)
_list.append(3)
_list.append(4)
_list.append(5)
print(_list.display())
rev_list = reverseLinked(_list)
print(rev_list.display())