import { Sorter } from "./Sorter";

class ListNode {
  next: ListNode | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter {
  head: ListNode | null = null;

  add(data: number): void {
    const node = new ListNode(data);

    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }

    let count = 1;

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
      count++;
    }

    return count;
  }

  at(index: number): ListNode {
    if (!this.head) {
      throw new Error("Index out of bounds");
    }

    let counter = 0;
    let node: ListNode | null = this.head;

    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print() {
    if (!this.head) {
      return;
    }
    let node: ListNode | null = this.head;

    while (node) {
      console.log(node.data);
      node = node.next;
    }
  }
}
