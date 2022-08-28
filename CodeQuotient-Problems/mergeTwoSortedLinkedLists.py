class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def mergeTwoLists(self, list1, list2):
        """
        :type list1: ListNode
        :type list2: ListNode
        :rtype: ListNode
        """
        if list1 == None and list2 == None:
            return None
        elif list1 != None and list2 == None:
            return list1
        elif list2 != None and list1 == None:
            return list2
        else:
            dummy = ListNode(0)
            p = dummy

            while list1 != None and list2 != None:
                if list1.val < list2.val:
                    p.next = list1
                    list1 = list1.next
                else:
                    p.next = list2
                    list2 = list2.next
                p = p.next

            if list1 != None:
                p.next = list1

            if list2 != None:
                p.next = list2

            return dummy.next