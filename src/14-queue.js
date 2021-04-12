const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.firstitem = null;
    this.lastitem = null;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    if (this.firstitem === null) {
      this.firstitem = new ListNode();
      this.firstitem.value = element;
      this.lastitem = this.firstitem;
    } else {
      const newitem = ListNode();
      this.lastitem.next = newitem;
      this.lastitem = newitem;
    }
    this.length++;
  }

  dequeue() {
    const previtem = this.firstitem;
    if (this.firstitem.next !== 'undefined') {
      this.firstitem = this.firstitem.next;
    } else {
      this.firstitem = null;
      this.lastitem = null;
    }
    this.length--;

    return previtem.value;
  }
}

module.exports = Queue;
