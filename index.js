import LinkedList from "./LinkedList.js";

const newList = LinkedList();
console.log("newList:", newList);
console.log("append 2:", newList.append(2));
console.log("prepend 1:", newList.prepend(1));
console.log("append 3:", newList.append(3));
console.log("append 4:", newList.append(4));
console.log("append 5:", newList.append(5));
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
console.log("toString:", newList.toString());

const container = document.querySelector(".container");
const nullElement = document.querySelector(".null");

document.addEventListener("click", handleClick);

function handleClick(event) {
  //
}

function renderList() {
  newList.toArray().forEach((element) => {
    const newElement = listElement(element);
    container.insertBefore(newElement, nullElement);
  });
}

function listElement(value) {
  const element = document.createElement("div");
  element.classList.add("list-element");
  const valueCell = document.createElement("div");
  valueCell.classList.add("list-element__value");
  valueCell.textContent = value;
  const pointerCell = document.createElement("div");
  pointerCell.classList.add("list-element__pointer");
  pointerCell.textContent = "->";

  element.appendChild(valueCell);
  element.appendChild(pointerCell);

  return element;
}

window.onload = () => {
  renderList();
};
