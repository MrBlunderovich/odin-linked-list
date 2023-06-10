export default function LinkedList(initialValues = []) {
  const head = { next: null };

  function append(value) {
    const tailNode = traverse();
    tailNode.next = ListNode(value);
    return size();
  }

  function size() {
    let currentElement = head;
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
    if (index > listLength()) {
      console.log("no such index: ", index + 1);
      return;
    }
    if (index === undefined) {
      destination = listLength();
    }

    let currentElement = head;
    for (let i = 0; i < destination; i++) {
      if (currentElement.next) {
        currentElement = currentElement.next;
      }
    }
    return currentElement;
  }

  return {};

  function ListNode(value = null) {
    return { value, next: null };
  }
}
