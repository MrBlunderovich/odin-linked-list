import LinkedList from "./LinkedList.js";

const newList = LinkedList();
console.log("newList:", newList);
console.log("append 2:", newList.append(2));
console.log("prepend 1:", newList.prepend(1));
console.log("append 3:", newList.append(3));
console.log("head:", newList.head());
console.log("tail:", newList.tail());
console.log("at:", newList.at(2));
