import React from "react";
import { useNavigate } from "react-router";

const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <p className="font-bold text-[20vw] text-custom-200 dark:text-custom-950 animate-bounce">
        ۴۰۴
      </p>
      <p className="text-xl md:text-2xl lg:text-3xl text-custom-700 dark:text-custom-500">
        صفحه ای که دنبالشی پیدا نشد
      </p>
      <button
        onClick={() => navigate("/")}
        className="bg-custom-700 text-white p-2 rounded-lg mt-4 cursor-pointer"
      >
        صفحه اصلی
      </button>
    </div>
  );
};

export default NotFound;
