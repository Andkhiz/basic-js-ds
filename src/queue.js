const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.arr = [];
  }

  getUnderlyingList() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a = {};
    
    for (let i = this.arr.length - 1; i >= 0; i--) {
      if (i === this.arr.length - 1) {
        a.value = this.arr[i];
        a.next = null;
      }
      else {
        let b = {};
        b.value = this.arr[i];
        b.next = a;
        a = JSON.parse( JSON.stringify(b) );
      }  
    }
    return a;
  }

  enqueue(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.arr.push(value);
    //return a;
  }

  dequeue() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let a = this.arr[0];
    this.arr.shift();
    return a;
  }
}

module.exports = {
  Queue
};
