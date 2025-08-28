import React from "react";
import SocialMedia from "../layout/SocialMedia";
import { Link } from "react-router";

const ContactUs: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-2xl font-bold md:text-3xl lg:text-4xl text-indigo-800">
        ارتباط با ما
      </h2>
      <p className="w-2/3 text-center mt-4 md:mt-6 lg:mt-8 md:text-lg lg:text-xl text-gray-700">
        برای ارتباط با ما میتونی از گزینه های زیر استفاده کنی. ۲۴ ساعته جواب
        میدیم
      </p>
      <div className="flex flex-wrap justify-center items-center gap-6 mt-6 md:mt-8 lg:mt-10">
        {SocialMedia.map((social, index) => (
          <Link to={social.link} key={index}>
            <div className="bg-indigo-50 p-4 flex justify-center items-center flex-col gap-2 rounded-lg text-indigo-800 hover:bg-indigo-100 transition-all w-40 h-20 md:h-24">
              <span className="text-2xl md:text-3xl lg:text-4xl">{social.icon}</span>
              <span className="">{social.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
