# class Node:
#     def __init__(self, data):
#         self.data = data
#         self.next = None
# The above structure is used to define a linked list node

# Return the data of middle node of the linked list

def findLength(head):
    temp = 0
    while head.next:
        temp += 1
        head = head.next
    return (temp, head.data)

def findMiddle(head):
    if not head : return -1
    slow = head
    fast = head.next.next
    while fast.next:
        slow = slow.next
        fast = fast.next
    return slow.data

def findNLast(head, n):
    if not head : return -1
    length = findLength(head)
    i = 0
    temp = head
    while temp:
        if i == length-n:
            return temp.data
        temp = temp.next
        i += 1

# def findNLast(head,n):
#     if not head : return -1
#     length = findLength(head)
#     if n > length[0] : return length[1]
#     slow = head
#     fast = head
#     while n != 0:
#         fast = fast.next
#         n -= 1
#     while fast:
#         slow = slow.next
#         fast = fast.next
#     return slow.data

# 2
# 5
# 1 2 3 4 5
# 2
# 6
# 1 2 3 4 5 6
# 8

# WORKING C++ CODE
# /* struct Node
# {
#     int data;
#     Node* next;
# };
# Above structure is used to define the linked list, You have to complete the below functions only */
# int findMiddle(Node* head) { 
#   Node* slow=head; 
#   Node* fast=head; 
#   if (head == NULL)  
#   return -1;  
#   while(fast!=NULL &&fast->next!=NULL){ 
#     fast=fast->next->next; 
#     slow=slow->next; 
#   } 
#   return slow->data; 
# } 
# int findNLast(Node* head, int n){ 
#   Node* slow=head; 
#   Node* fast=head; 
#   int i=0; 
#   if (head == NULL)  
#   return -1; 
#   while (i<n){ 
#   if(fast->next!=NULL){ 
#   fast=fast->next; 
#   i++; 
#   } 
#   else 
#   return fast->data; 
# } 
#   while(fast!=NULL){ 
#     fast=fast->next; 
#  slow=slow->next; 
#   } 
#   return slow->data; 
# }