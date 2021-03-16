# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __repr__(self):
        return f'{self.__class__.__name__}({self.val}, {self.next})'

def addTwoNumbers(l1, l2):
    x = ListNode()
    y = x
    carry = 0

    while l1 or l2 or carry:
        v1 = 0
        v2 = 0

        if l1:
            v1 = l1.val
            l1 = l1.next

        if l2:
            v2 = l2.val
            l2 = l2.next

        carry, v3 = divmod((v1 + v2 + carry), 10)
        y.next = ListNode(v3)
        y = y.next

    return x.next