# Write a function that takes in 2 list nodes and adds the values in reverse order for example (9)-(9) + (1)-(0)-(3) -> (0)-(0)-(4)*/
class ListNode:
    def __init__(self, val = 0, next = None):
        self.val = val
        self.next = next

    def show_node(self):
        tempnode = self
        while tempnode.next != None:
            print(tempnode.val)
            tempnode = tempnode.next
        print(tempnode.val)


def addTwoNums(l1, l2):
    carry = 0
    ansNode = ListNode()
    pointer = ansNode
    while l1 or l2 or carry:
        v1 = 0
        v2 = 0
        if l1:
            v1 = l1.val
        if l2:
            v2 = l2.val
        sum = v1 + v2 + carry
        carry = int(sum / 10)
        val = sum % 10 or 0
        pointer.next = ListNode(val)
        pointer = pointer.next
        if l1:
            l1 = l1.next
        if l2:
            l2 = l2.next

    return ansNode.next
node2 = ListNode(9)
list1 = ListNode(9, node2)
list2 = ListNode()
num2 = "103"
list2pointer = list2
for digit in num2:
  list2pointer.next = ListNode(int(digit))
  list2pointer = list2pointer.next
list2 = list2.next
list2.show_node()
list1.show_node()

list3 = addTwoNums(list1, list2)
list3.show_node()
