

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def isPalindrome(self, head) -> bool:
        stack = []
        i = head
        while i:
            stack.append(i.val)
            i = i.next
        print(stack)
        j = head
        while j:
            if j.val != stack.pop():
                return False
            else:
                j = j.next
        return True

l1 = ListNode(1)
l2 = ListNode(2)
l3 = ListNode(1)
l1.next = l2
l2.next = l3
s1 = Solution()
print(s1.isPalindrome(l1))