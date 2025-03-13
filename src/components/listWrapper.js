import Item from "./item.js";
import { useState } from "react";

const ListWrapper = () => {
  const [listItems, setListItems] = useState([]);

  return (
    <div>
      <h1 className="text-xl text-white font-main">To-Do List</h1>
      <div className="w-100 mt-4">
        <Item date="2023-01-01" id="1" title="Say hi to Mom 👋" />

        <input
          type="text"
          placeholder="Add a new item"
          className="mt-4 w-full bg-gray-100 px-4 py-2 rounded-md font-main text-black"
        ></input>
      </div>
    </div>
  );
};

export default ListWrapper;
