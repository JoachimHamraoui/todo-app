import Item from "./item.js";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ListWrapper = () => {
  const [listItems, setListItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const date = new Date().toDateString();

  const addItem = () => {
    if (!inputValue.trim()) return;
    setListItems([...listItems, { id: Date.now(), title: inputValue }]);
    setInputValue("");
  };

  const handleDelete = (id) => {
    setListItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") addItem();
  };

  return (
    <motion.div
      layout // This makes everything smoothly shift together
      className="p-4 bg-gray-900 rounded-lg"
    >
      {/* Animated Header */}
      <motion.h1
        layout
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="text-xl text-white font-main mb-4"
      >
        To-Do List
      </motion.h1>

      {/* Animated List Container */}
      <motion.div layout>
        <AnimatePresence>
          {listItems.map((item) => (
            <Item
              key={item.id}
              date={date}
              id={item.id}
              title={item.title}
              onDelete={handleDelete}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Animated Input & Button Section */}
      <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex gap-2 mt-4"
      >
        <input
          type="text"
          placeholder="Add a new item"
          className="w-full bg-gray-100 px-4 py-2 rounded-md font-main text-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className="bg-green-600 text-white px-4 py-2 rounded-md font-main"
          onClick={addItem}
        >
          Add
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ListWrapper;
