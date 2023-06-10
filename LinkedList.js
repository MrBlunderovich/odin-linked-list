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

  function head() {
    return headPointer.next;
  }

  function tail() {
    return traverse();
  }

  function at(index = undefined) {
    if (index >= size() || index < 0) {
      console.error(
        `Index out of range. Range is [0:${size() - 1}]. Index is ${index}.`
      );
      return undefined;
    }
    return traverse(index).value;
  }

  function pop() {
    if (size() < 1) {
      console.error("Nothing to pop, list is empty");
      return undefined;
    }
    const secondToTailNode = traverse(size() - 2);
    const tailNode = secondToTailNode.next;
    secondToTailNode.next = null;
    return tailNode.value;
  }

  function contains(value) {
    let currentElement = headPointer;
    while (currentElement.next) {
      currentElement = currentElement.next;
      if (currentElement.value === value) {
        return true;
      }
    }
    return false;
  }

  function find(value) {
    let currentElement = headPointer;
    for (let index = 0; index < size(); index++) {
      currentElement = currentElement.next;
      if (currentElement.value === value) {
        return index;
      }
    }
    return null;
  }

  function toArray() {
    let currentElement = headPointer;
    const output = [];
    while (currentElement.next) {
      currentElement = currentElement.next;
      output.push(currentElement.value);
    }
    return output;
  }

  function toString() {
    const array = toArray();
    return array.length ? `( ${toArray().join(" ) -> ( ")} ) -> null` : "null";
  }

  function insertAt(value, index = 0) {
    if (index < 0 || value === undefined) {
      return false;
    }
    const listSize = size();
    if (index > listSize) {
      index = listSize;
      console.warn(
        `Index out of range. Range is [0:${
          size() - 1
        }]. Index is ${index}. Inserting at the tail`
      );
    }
    const previousNode = traverse(index - 1);
    const nodeToShift = previousNode.next;
    const newNode = ListNode(value);
    newNode.next = nodeToShift;
    previousNode.next = newNode;
    return true;
  }

  function removeAt(index = undefined) {
    if (index < 0 || index > size() - 1 || index === undefined) {
      console.error(
        `Index out of range. Range is [0:${
          size() - 1
        }]. Index is ${index}. Removal failed.`
      );
      return undefined;
    }
    const previousNode = traverse(index - 1);
    const nodeToRemove = previousNode.next;
    const nodeToShift = nodeToRemove.next;
    previousNode.next = nodeToShift;
    return nodeToRemove.value;
  }

  /**
   * Returns an element with specified index (0-based)
   * or last element of the list if index ommited.
   * traverse(-1) returns a head element
   */
  function traverse(index = undefined) {
    let destination = index + 1;
    if (index >= size() || index < -1) {
      console.error(
        `Index out of range. Range is [-1:${size() - 1}]. Index is ${index}.`
      );
      return undefined;
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
  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toArray,
    toString,
    insertAt,
    removeAt,
  };

  function ListNode(value = null) {
    return { value, next: null };
  }
}
