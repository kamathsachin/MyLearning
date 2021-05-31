class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };

    this.tail = this.head;
  }
}

const linkedList = new LinkedList(10);
console.log(linkedList);
