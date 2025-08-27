import React from "react";
import { FaStore, FaUser, FaHandshake } from "react-icons/fa";
import { Link } from "react-router";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-indigo-800">
        درباره پرشاپ
      </h2>
      <p className="w-2/3 mt-10 md:text-lg lg:text-xl text-center">
        پرشاپ یک فروشگاه اینترنتی مدرن است که با هدف ارائه بهترین تجربه خرید
        آنلاین برای کاربران ایرانی ساخته شده است. ما تلاش می‌کنیم محصولاتی
        باکیفیت، قیمت مناسب و خدماتی مطمئن را برای شما فراهم کنیم.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        <div className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-indigo-50 gap-4 text-indigo-600">
          <FaStore className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
            محصولات متنوع
          </h4>
          <p className="text-center text-gray-700">
            هر لباسی که بخوای با کیفیت بالا می‌تونی اینجا پیدا کنی
          </p>
        </div>
        <div className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-indigo-50 gap-4 text-indigo-600">
          <FaUser className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
            مشتری مداری
          </h4>
          <p className="text-center text-gray-700">
            مشتریان برای ما در اولویت هستند و همیشه به نیازهای شما گوش می‌دهیم
          </p>
        </div>
        <div className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-indigo-50 gap-4 text-indigo-600">
          <FaHandshake className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl">
            اعتماد و کیفیت
          </h4>
          <p className="text-center text-gray-700">
            ما به دنبال ایجاد اعتماد و همکاری طولانی‌مدت با شما هستیم
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col justify-center items-center gap-6 bg-indigo-50 w-[95%] p-2 mb-4 rounded-lg">
        <h4 className="text-xl md:text-2xl lg:text-3xl">همراه ما باشید</h4>
        <p className="text-gray-600 text-center">
          ما همیشه در حال رشد و پیشرفت هستیم. برای اطلاع از جدیدترین محصولات و
          تخفیف‌ها، با ما در ارتباط باشید.
        </p>
        <Link to="/contact_us">
          <button className="bg-indigo-600 p-2 rounded-lg text-white cursor-pointer text-balance md:text-lg lg:text-xl">
            ارتباط با ما
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
