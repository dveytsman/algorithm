/* Write a function that takes in 2 list nodes and adds the values in reverse order for example (9)-(9) + (1)-(0)-(3) -> (0)-(0)-(4)*/
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let ans = new ListNode();
  let list = ans;
  while (l1 || l2 || carry) {
    let l1v = l1 ? l1.val : 0;
    let l2v = l2 ? l2.val : 0;
    let sum = l1v + l2v + carry;
    carry = (sum / 10) | 0;
    list.next = new ListNode(sum % 10, null);
    list = list.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return ans.next;
};

// for testing
let node2 = new ListNode(9);
let list1 = new ListNode(9, node2);
let list2 = new ListNode();
node = list2;
"103".split("").forEach((digit) => {
  node.next = new ListNode(Number(digit));
  node = node.next;
});
console.log(addTwoNumbers(list1, list2.next));
