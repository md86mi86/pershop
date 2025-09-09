import React from "react";
import { FaStore, FaUser, FaHandshake } from "react-icons/fa";
import { Link } from "react-router";
import { motion } from "framer-motion";

const AboutUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 1, once: true }}
        className="text-2xl font-bold md:text-3xl lg:text-4xl text-custom-800"
      >
        درباره پرشاپ
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 1, once: true }}
        className="w-2/3 mt-10 md:text-lg lg:text-xl text-center"
      >
        پرشاپ یک فروشگاه اینترنتی مدرن است که با هدف ارائه بهترین تجربه خرید
        آنلاین برای کاربران ایرانی ساخته شده است. ما تلاش می‌کنیم محصولاتی
        باکیفیت، قیمت مناسب و خدماتی مطمئن را برای شما فراهم کنیم.
      </motion.p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 1, once: true }}
          className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-custom-50 dark:bg-custom-950 gap-4 text-custom-600"
        >
          <FaStore className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl dark:text-white">
            محصولات متنوع
          </h4>
          <p className="text-center text-gray-700 dark:text-gray-200">
            هر لباسی که بخوای با کیفیت بالا می‌تونی اینجا پیدا کنی
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 1, once: true }}
          className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-custom-50 dark:bg-custom-950 gap-4 text-custom-600"
        >
          <FaUser className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl dark:text-white">
            مشتری مداری
          </h4>
          <p className="text-center text-gray-700 dark:text-gray-200">
            مشتریان برای ما در اولویت هستند و همیشه به نیازهای شما گوش می‌دهیم
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: 1, once: true }}
          className="flex flex-col items-center p-4 w-72 md:w-80 lg:w-96 h-40 justify-center rounded-xl m-2 bg-custom-50 dark:bg-custom-950 gap-4 text-custom-600"
        >
          <FaHandshake className="size-10 md:size-14 lg:size-20" />
          <h4 className="font-bold text-black text-lg md:text-xl lg:text-2xl dark:text-white">
            اعتماد و کیفیت
          </h4>
          <p className="text-center text-gray-700 dark:text-gray-200">
            ما به دنبال ایجاد اعتماد و همکاری طولانی‌مدت با شما هستیم
          </p>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ amount: 1, once: true }}
        className="mt-10 flex flex-col justify-center items-center gap-6 bg-custom-50 dark:bg-custom-950 w-[95%] p-2 mb-4 rounded-lg"
      >
        <h4 className="text-xl md:text-2xl lg:text-3xl">همراه ما باشید</h4>
        <p className="text-gray-600 dark:text-gray-200 text-center">
          ما همیشه در حال رشد و پیشرفت هستیم. برای اطلاع از جدیدترین محصولات و
          تخفیف‌ها، با ما در ارتباط باشید.
        </p>
        <Link to="/contact_us">
          <button className="bg-custom-600 p-2 rounded-lg text-white cursor-pointer text-balance md:text-lg lg:text-xl">
            ارتباط با ما
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default AboutUs;
