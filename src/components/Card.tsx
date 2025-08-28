import type { productItem } from "../types/ProductItem";
import { motion } from "framer-motion";

const Card = ({ imageUrl, name, score, oldPrice, newPrice }: productItem) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ amount: 0.3, once: false }}
      className="bg-white rounded-xl overflow-hidden max-w-xs sm:max-w-sm md:max-w-md w-full flex flex-col justify-center relative shadow-md -z-0"
    >
      <span className="absolute bg-red-600 top-2 left-2 text-white rounded-lg w-10 h-10 text-center flex justify-center items-center text-sm font-bold">
        {Math.round(((oldPrice - newPrice) / oldPrice) * 100)}%
      </span>
      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-xl"
      />
      <h3 className="font-bold text-lg p-2">{name}</h3>
      <p className="text-yellow-500 w-full text-[13px] px-2 pb-2">
        امتیاز : {score} از 5
      </p>
      <div className="w-full flex flex-col justify-center items-end">
        <p className="p-2 line-through text-gray-400 text-[14px]">
          {oldPrice.toLocaleString()} تومان
        </p>
        <p className="px-2 pb-4 text-indigo-800 font-bold text-lg">
          {newPrice.toLocaleString()} تومان
        </p>
        <button className="w-[90%] bg-indigo-700 text-white rounded-lg mx-auto p-2 cursor-pointer text-lg mb-4 transition hover:bg-indigo-800">
          خرید
        </button>
      </div>
    </motion.div>
  );
};

export default Card;
