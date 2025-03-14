const Item = ({ date, id, title }) => {

  const deleteItem = () => {
    document.getElementById(id).remove();
  }
  
  return (
    <div id={id} className="bg-gray-100 px-4 py-2 rounded-md font-main mb-2 flex justify-between">
      <div>
        <h1 className="font-bold text-xl">{title}</h1>
        <p className="text-gray-500 text-sm">{date}</p>
      </div>
      <div className="flex items-center">
        <button id={id} onClick={deleteItem} className="bg-red-500 text-white px-4 py-2 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default Item;
