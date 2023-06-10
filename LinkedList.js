export default function LinkedList(initialValues = []) {
  const headPointer = { next: null };

  function append(value) {
    const tailNode = traverse();
    tailNode.next = ListNode(value);
    return headPointer.next;
  }

  function prepend(value) {
    const newNode = ListNode(value);
    newNode.next = headPointer.next;
    headPointer.next = newNode;
    return headPointer.next;
  }

  function size() {
    let currentElement = headPointer;
    let counter = 0;
    while (currentElement.next) {
      counter++;
      currentElement = currentElement.next;
    }
    return counter;
  }

  /**
   * Returns an element with specified index (0-based)
   * or last element of the list if index ommited.
   * traverse(-1) returns a head element
   */
  function traverse(index = undefined) {
    let destination = index + 1;
    if (index > size()) {
      console.log("no such index: ", index + 1);
      return;
    }
    if (index === undefined) {
      destination = size();
    }

    let currentElement = headPointer;
    for (let i = 0; i < destination; i++) {
      if (currentElement.next) {
        currentElement = currentElement.next;
      }
    }
    return currentElement;
  }

  return { head: headPointer.next, append, prepend, size };

  function ListNode(value = null) {
    return { value, next: null };
  }
}
