const { NotImplementedError } = require('../extensions/index.js');

 const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(/*value, left = null, right = null*/) {
    this.rot = null;
    /*this.left = left;
    this.right = right;
    this.value = value;*/
  }
  
  root() {
    /*if (this.rot) return (this.rot);
    else return null;*/
    return (this.rot) ;
  }

  add( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.rot = add(this.rot, data); 

    function add(node, data) {
      if (!node) { return new Node(data) }
      if (node.data === data) { return node }
      if (data < node.data) node.left = add(node.left, data); 
      else node.right = add(node.right, data);
      return node;
    }
  }

  has( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return search(this.rot, data);

    function search(node, data) {
      if (!node) return false;
      if (node.data === data) return true;

      if (data < node.data) return search(node.left, data);
      else return search(node.right, data);
    }
  }

  find( data ) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    return search(this.rot, data);

    function search(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (data < node.data) return search(node.left, data);
      else return search(node.right, data);
    }
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    console.log(this.rot.data);
    this.rot = remove(this.rot, data);

    function remove(node, data) {
      if (!node) return null;

      if (data < node.data) {
        node.left = remove(node.left, data);
        return node;  
      }
      else if (data > node.data) {
        node.right = remove(node.right, data);
        return node;
      } else {
          if (!node.left && !node.right) return null;

          if (!node.left) {
            node = node.right;
            return node;
        }
        
        if (!node.right) {
            node = node.left;
            return node;
        }
        let mi = node.right;
        while (mi.left) { mi = mi.left };
        node.data = mi.data;

        node.right = remove(node.right, mi.data);

        return node;
      }
    }
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rot) return null;

    let node = this.rot;
    while (node.left) node = node.left;

    return node.data;

  }

  max() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.rot) return null;

    let node = this.rot;
    while (node.right) node = node.right;

    return node.data;

  }
}

module.exports = {
  BinarySearchTree
};