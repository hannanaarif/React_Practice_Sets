/*
3. Given an array of items:
const itemList = [
 { id: 1, name: "Apple", category: "Fruit" },
 { id: 2, name: "Carrot", category: "Vegetable" },
 { id: 3, name: "Banana", category: "Fruit" },
 { id: 4, name: "Broccoli", category: "Vegetable" },
];

a. Build a React component that displays a list of items. Display fruits in orange color and
vegetables in green color.

b. Create two buttons to filter the items by their category using the useState hook.
*/

import { useState } from "react";

const itemlist = [
  { id: 1, name: "Apple", category: "Fruit" },
  { id: 2, name: "Carrot", category: "Vegetable" },
  { id: 3, name: "Banana", category: "Fruit" },
  { id: 4, name: "Broccoli", category: "Vegetable" },
];

function ItemList() {
  const [filteredItem, setFilteredItem] = useState(itemlist);

  function handleAll() {
    setFilteredItem(itemlist);
  }

  function handleVeg() {
    setFilteredItem(itemlist.filter((item) => item.category == "Vegetable"));
  }

  function handlefruits() {
    setFilteredItem(itemlist.filter((item) => item.category == "Fruit"));
  }

  return (
    <>
      <button onClick={handleAll}>All</button>
      <button onClick={handleVeg}>Vegetable</button>
      <button onClick={handlefruits}>fruits</button>

      {filteredItem.map((item) => (
        <li key={item.id}  style={{
            color: item.category === "Fruit" ? "red" : "green", // ✅ Different colors
            fontWeight: "bold",
          }}>
          {item.name}
        </li>
      ))}
    </>
  );
}
export default ItemList;
