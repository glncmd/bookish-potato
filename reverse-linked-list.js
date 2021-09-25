/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var reverseList = function (head) {
  let curr = head;
  let prev = null;
  let next;

  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  return prev;
};

// Visualize the linked list.
var printList = function (head) {
  let curr = head;
  let str = "";

  while (curr) {
    str += `${curr.val} > `;
    curr = curr.next;
  }

  str += "null";

  return str;
};
