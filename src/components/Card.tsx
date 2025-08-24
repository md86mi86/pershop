import type { productItem } from "../types/ProductItem";

const Card = ({ imageUrl, name, score, oldPrice, newPrice }: productItem) => {
  return (
    <div className=" bg-white rounded-xl overflow-hidden w-72 flex flex-col justify-center">
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-64 object-cover rounded-xl"
      />
      <h3 className="font-bold text-lg p-2">{name}</h3>
      <p className="text-yellow-500 w-full text-[13px] px-2 pb-4">
        امتیاز : {score} از 5
      </p>
      <div className="w-full flex flex-col justify-center items-end">
        <p className="p-2 line-through text-gray-400 text-[14px]">
          {oldPrice} تومان
        </p>
        <p className="px-2 pb-4 text-indigo-800 font-bold text-lg">
          {newPrice} تومان
        </p>
        <button className="w-[90%] bg-indigo-700 text-white rounded-lg mx-auto p-2 cursor-pointer text-lg mb-4">
          خرید
        </button>
      </div>
    </div>
  );
};

export default Card;
