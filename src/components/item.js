const Item = ({ date, id, title }) => {
  return (
    <div id={id} className="bg-gray-100 px-4 py-2 rounded-md font-main mb-2">
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-gray-500 text-sm">{date}</p>
    </div>
  );
};

export default Item;
