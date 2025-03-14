import Item from "./item.js";
import { useState } from "react";

const ListWrapper = () => {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const date = new Date().toDateString();

  const addItem = () => {
    setListItems([...listItems, inputValue]);
    setInputValue("");
  };

  // when the enter key is pressed, add the item
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addItem();
    }
  }

  return (
    <div>
      <h1 className="text-xl text-white font-main">To-Do List</h1>
      <div className="w-100 mt-4">
        {listItems.map((item, index) => (
          <Item key={index} date={date} id={index} title={item} />
        ))}

        <div className="flex gap-1">
        <input
          type="text"
          placeholder="Add a new item"
          className="w-full bg-gray-100 px-4 py-2 rounded-md font-main text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        ></input>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md font-main"
          onClick={addItem}
        >
          Add
        </button>
        </div>
      </div>
    </div>
  );
};

export default ListWrapper;
