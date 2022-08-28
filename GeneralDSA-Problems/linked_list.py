class Node():
    def __init__(self, data=None):
        self.data = data
        self.next = None


# -----------------LINKED_LIST----------------------------

class Linked_list():
    def __init__(self):
        self.head = Node()
        self.tail = None

    def append(self, data):
        new_node = Node(data)
        curr = self.head
        while curr.next != None:
            curr = curr.next
        curr.next = new_node

    def length(self):
        curr = self.head
        total = 0
        while curr.next != None:
            total += 1
            curr = curr.next
        return total

    def display(self):
        elements = []
        cur_node = self.head
        while cur_node.next != None:
            cur_node = cur_node.next
            elements.append(cur_node.data)
        return elements

    def get(self, index):
        if index >= self.length():
            print("Error index out of range")
        else:
            cur_ind = 0
            cur_node = self.head
            while True:
                cur_node = cur_node.next
                if cur_ind == index:
                    return cur_node.data
                else:
                    cur_ind += 1

    def erase(self, index):
        if index >= self.length():
            print("Error index out of range")
            return
        else:
            cur_ind = 0
            cur_node = self.head
            while True:
                last_node = cur_node
                cur_node = cur_node.next
                if cur_ind == index:
                    last_node.next = cur_node.next
                    return
                else:
                    cur_ind += 1

# list_test = Linked_list()
# print(list_test.length())
# list_test.display()
# list_test.append(1)
# list_test.append(2)
# list_test.append(3)
# list_test.append(4)
# list_test.append(5)
# print(list_test.length())
# list_test.display()
# print(list_test.get(1))
# list_test.erase(2)
# list_test.display()

