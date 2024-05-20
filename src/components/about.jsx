import React from "react";
// import aboutImg from "../assets/about.jpg";
import pic1 from '../assets/pic1.jpg';

const about = () => {
  return (

    <div className="text-white max-w-[1200px] mx-auto my-12  " id="about">
      <div className="md:gird md:grid-cols-2  grid grid-cols-2 sm:py-16 ">
        <div className="mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-6">
            <h2 className="text-3xl font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg">
              asdfghiuytrerjhgfcghdxcvbjkiu7u6tredfgh<br/>
              jkhvcbnjkjhgfdsftyuiou6ytredfghjkh<br/>
              vcvbnbvcxdfghjkujythgdfs
            </p>
          </div>
        </div>




        <img
          className="mx-auto rounded-3xl py-8 md:py-0"
          src={pic1}
          width={200}
          height={200}
        />

      </div>
    </div>
  );
};

export default about;
