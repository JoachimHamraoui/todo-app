import React from "react";
import { motion } from "framer-motion";

const Item = ({ date, id, title, onDelete }) => {
  return (
    <motion.div
      layout
      id={id}
      className="bg-gray-100 px-4 py-2 rounded-md font-main mb-2 flex justify-between"
      initial={{ opacity: 0, y: 20, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{
        opacity: 0,
        scale: 0,
        transition: { duration: 0.3, ease: "easeInOut" },
      }} // Deflating effect
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => onDelete(id)}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete
        </button>
      </div>
    </motion.div>
  );
};

export default Item;
