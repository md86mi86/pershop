import React from "react";
import { Link } from "react-router";
import { BiDollar } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import products from "../layout/ProductItems";
import { Navigation, Autoplay } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import { BiComment } from "react-icons/bi";
import CommentCard from "../components/CommentCard";
import Comments from "../layout/Comments";
import { motion } from "framer-motion";

const Home: React.FC = () => {
  return (
    <div>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="w-full min-h-screen bg-gradient-to-br from-custom-200 dark:from-custom-950 dark:to-gray-950 dark:text-white to-custom-300 flex flex-col justify-center items-center"
      >
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-3xl text-center w-2/3 font-bold md:text-5xl lg:text-7xl"
        >
          هرچیزی که نیاز داشته باشی میتونی اینجا پیدا کنی
        </motion.h1>
        <Link to="/about_us">
          <motion.button
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="cursor-pointer mt-6 md:mt-8 lg:mt-12 p-2 bg-custom-600 border-2 border-custom-500 shadow-2xl shadow-custom-400 dark:shadow-custom-900 rounded-md font-bold text-white text-xl md:text-2xl lg:text-3xl"
          >
            همین حالا خرید کن
          </motion.button>
        </Link>
      </motion.div>
      <div className="w-full min-h-screen flex justify-center items-center flex-col mt-6 gap-16">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3, once: true }}
          className="bg-custom-100 dark:bg-gray-900 w-[95%] rounded-lg flex flex-col items-center pb-4"
        >
          <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8 text-lg md:text-xl lg:text-2xl text-custom-800 dark:text-white">
            <span className="flex justify-center items-center">
              کالاهای پرفروش
              <BiDollar className="text-white bg-custom-600 rounded-full size-6 p-0.5 m-1" />
            </span>
            <Link to="/products">
              <button className="bg-custom-600 text-white p-2 rounded-lg cursor-pointer">
                مشاهده همه
              </button>
            </Link>
          </div>
          <div className="w-[98%] h-0.5 bg-custom-200 dark:bg-gray-800"></div>
          <div className="w-[95%] rounded-xl bg-custom-300 dark:bg-custom-950 p-4 mt-6">
            <div className="w-full bg-custom-600 dark:bg-custom-800 p-2 rounded-xl mb-4 flex justify-center items-center gap-1">
              <GrFormNext className="nextEl text-3xl p-1 bg-white rounded-full dark:bg-gray-950 cursor-pointer" />
              <GrFormPrevious className="prevEl text-3xl p-1 bg-white rounded-full dark:bg-gray-950 cursor-pointer" />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".nextEl",
                prevEl: ".prevEl",
              }}
              grabCursor
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              loop
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3.5,
                  centeredSlides: false,
                },
              }}
              className="w-full max-w-6xl mx-auto"
            >
              {products.map(
                (product, index) =>
                  product.score > 4 && (
                    <SwiperSlide
                      key={index}
                      className="!h-auto flex justify-center"
                    >
                      <div className="h-full flex justify-center items-stretch p-2">
                        <Card
                          imageUrl={product.imageUrl}
                          name={product.name}
                          score={product.score}
                          oldPrice={product.oldPrice}
                          newPrice={product.newPrice}
                        />
                      </div>
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3, once: true }}
          className="bg-custom-100 dark:bg-gray-900 w-[95%] rounded-lg flex flex-col items-center pb-4"
        >
          <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8 text-lg md:text-xl lg:text-2xl text-custom-800 dark:text-white">
            <span className="flex justify-center items-center">
              نظرات کاربران
              <BiComment className="text-custom-700 size-6 m-1" />
            </span>
          </div>
          <div className="w-[98%] h-0.5 bg-custom-200 dark:bg-gray-800"></div>
          <div className="w-[95%] rounded-xl bg-custom-300 dark:bg-custom-950 p-4 mt-6">
            <Swiper
              modules={[Autoplay]}
              grabCursor
              autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
              loop
              slidesPerView={1}
              spaceBetween={20}
              breakpoints={{
                480: {
                  slidesPerView: 1.2,
                  centeredSlides: true,
                },
                640: {
                  slidesPerView: 1.5,
                  centeredSlides: true,
                },
                768: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                1024: {
                  slidesPerView: 2.5,
                  centeredSlides: false,
                },
                1280: {
                  slidesPerView: 3,
                  centeredSlides: false,
                },
              }}
              className="w-full max-w-5xl mx-auto"
            >
              {Comments.map((comment, index) => (
                <SwiperSlide
                  key={index}
                  className="!h-auto flex justify-center"
                >
                  <div className="h-full flex justify-center items-stretch p-2">
                    <CommentCard comment={comment} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ amount: 0.3, once: true }}
          className="flex justify-center items-center bg-custom-100 dark:bg-gray-900 w-[95%] rounded-lg flex-col p-4 mb-4"
        >
          <p className="text-custom-800 text-2xl md:text-3xl lg:text-4xl w-2/3 text-center dark:text-white">
            میخوای زودتر از بقیه از تخفیفات و جایزه ها باخبر بشی؟
          </p>
          <div className="flex rounded-lg overflow-hidden justify-center items-center mt-6 border-2 border-custom-800">
            <input
              type="email"
              className="bg-custom-300 dark:bg-custom-950 p-2 text-center outline-none"
              placeholder="example@mail.com"
              required
            />
            <button className="p-2 bg-custom-600 text-white cursor-pointer">
              ثبت
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
