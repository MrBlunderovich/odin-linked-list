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
console.log("find 3:", newList.find(3));
console.log("find 30:", newList.find(30));
console.log("toArray:", newList.toArray());
console.log("toString:", newList.toString());
newList.insertAt(77, 30);
console.log("newList.insertAt(77, 30);");
console.log("toString:", newList.toString());
newList.removeAt();
console.log("newList.removeAt();");
console.log("toString:", newList.toString());
newList.reverse();
console.log("newList.reverse();");
console.log("toString:", newList.toString());
newList.trimToSize(3);
console.log("newList.trimToSize(3);");
console.log("toString:", newList.toString());
