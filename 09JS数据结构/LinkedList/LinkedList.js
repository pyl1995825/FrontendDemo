/**
 *  链表
 *
 *
  append(element)：向列表尾部添加一个新的项。
  insert(position, element)：向列表的特定位置插入一个新的项。
  remove(element)：从列表中移除一项。
  indexOf(element)：返回元素在列表中的索引。如果列表中没有该元素则返回-1。
  removeAt(position)：从列表的特定位置移除一项。
  isEmpty()：如果链表中不包含任何元素，返回true，如果链表长度大于0则返回false。
  size()：返回链表包含的元素个数。与数组的length属性类似。
  toString()：由于列表项使用了Node类，就需要重写继承自JavaScript对象默认的
 toString方法，让其只输出元素的值。
 * **/

// Node辅助类。Node类表示要加入列表的项。它包含一个element属性，即要添加到列表的值，以及一个next属性，即指向列表中下一个节点项的指针。
class Node {
  constructor (element) {
    this.element = element;
    this.next = null;
  }
}

class LinkedList {
  constructor () {
    this.length = 0;
    this.head = null;
  }

  append (element) {
    let node = new Node(element);
    let current;

    if (this.head == null) {
      this.head = node;
    } else {
      current = this.head
      while (current.next) {
        current = current.next    // 循环列表，直到找到最后一项
      }
      current.next = node;    // 找到最后一项，将其next赋值为node, 建立链接
    }
    this.length++;      // 更新列表的长度
  }

  removeAt (position) {
    // 越界检查
    if (position > -1 && position < this.length) {
      let current = this.head;
      let previous;
      let index = 0;
      // 如果是移除第一项
      if (position === 0) {
        this.head = current.next;
      } else {
        // 从头查找到position位置，将前一项赋值给previous
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        // 将previous 的下一项与current的下一项建立链接，因为跳过了current，从而移除了他
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }


  insert (position, element) {
    if (position > -1 && position <= this.length) {
      let node = new Node(element);
      let current = this.head;
      let previous;
      let index = 0;
      if (position === 0) {
        node.next = current;
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true
    } else {
      return false
    }
  }

  indexOf (element) {
    let current = this.head;
    let index = 0;
    while (current.next) {
      if (element === current.element) {
        return index;
      }
      index++;
      current = current.next;
    }
    return -1;
  }

  remove (element) {
    let index = this.indexOf(element);
    return this.removeAt(index);
  }

  isEmpty () {
    return this.length === 0;
  }

  size () {
    return this.length;
  }

  getHead () {
    return this.head;
  }


  toString () {
    let current = this.head;
    let string = '';
    while (current) {
      string += current.element;
      current = current.next;
    }
    return string;
  }
}


// module.exports = LinkedList;

