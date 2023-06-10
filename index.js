import LinkedList from "./LinkedList.js";

const newList = LinkedList();
console.log("newList:", newList);
console.log("append 2:", newList.append(2));
console.log("prepend 1:", newList.prepend(1));
console.log("append 3:", newList.append(3));
console.log("append 4:", newList.append(4));
console.log("append 5:", newList.append(5));
console.log("head:", newList.head());
console.log("tail:", newList.tail());
console.log("at index2:", newList.at(2));
console.log("pop:", newList.pop());
console.log("at index2:", newList.at(2));
console.log("contains 1:", newList.contains(1));
console.log("contains 10:", newList.contains(10));
