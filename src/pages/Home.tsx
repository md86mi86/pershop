import React from "react";
import Header from "../layout/Header";
import { Link } from "react-router";
import { BiDollar } from "react-icons/bi";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../components/Card";
import products from "../layout/ProductItems";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "swiper/modules";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen bg-gradient-to-br from-indigo-200 to-indigo-300 flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center w-2/3 font-bold md:text-5xl lg:text-7xl">
          هرچیزی که نیاز داشته باشی میتونی اینجا پیدا کنی
        </h1>
        <Link to="/about_us">
          <button className="cursor-pointer mt-6 md:mt-8 lg:mt-12 p-2 bg-indigo-600 border-2 border-indigo-500 shadow-2xl shadow-indigo-400 rounded-md font-bold text-white text-xl md:text-2xl lg:text-3xl">
            همین حالا خرید کن
          </button>
        </Link>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="bg-indigo-100 w-[95%] h-[95%] rounded-lg flex flex-col items-center">
          <div className="w-full flex justify-between items-center p-4 md:p-6 lg:p-8 text-lg md:text-xl lg:text-2xl text-indigo-800">
            <span className="flex justify-center items-center">
              کالاهای پرفروش
              <BiDollar className="text-white bg-indigo-600 rounded-full size-6 p-0.5 m-1" />
            </span>
            <Link to="/about_us">
              <button className="bg-indigo-600 text-white p-2 rounded-lg cursor-pointer">
                مشاهده همه
              </button>
            </Link>
          </div>
          <div className="w-[98%] h-0.5 bg-indigo-200"></div>
          <div className="w-[95%] rounded-xl bg-indigo-300 p-4 mt-6">
            <div className="w-full bg-indigo-600 p-2 rounded-xl mb-4 flex justify-center items-center gap-1">
              <GrFormNext className="nextEl text-3xl p-1 bg-white rounded-full cursor-pointer" />
              <GrFormPrevious className="prevEl text-3xl p-1 bg-white rounded-full cursor-pointer" />
            </div>
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".nextEl",
                prevEl: ".prevEl",
              }}
              autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
              loop={true}
              slidesPerView={1.4}
              spaceBetween={50}
              breakpoints={{
                640: { slidesPerView: 1.8 },
                768: { slidesPerView: 2.3 },
                1024: { slidesPerView: 3.4 },
              }}
              className="w-[90%] mx-auto rounded-xl"
            >
              {products.map(
                (product, index) =>
                  product.score > 4 && (
                    <SwiperSlide>
                      <Card
                        key={index}
                        imageUrl={product.imageUrl}
                        name={product.name}
                        score={product.score}
                        oldPrice={product.oldPrice}
                        newPrice={product.newPrice}
                      />
                    </SwiperSlide>
                  )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
