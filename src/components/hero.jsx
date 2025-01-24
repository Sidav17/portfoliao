import React from "react";
import { TypeAnimation } from "react-type-animation";
// import Heroimage from "../assets/3dc82f47fc6f2c2e4d1dc3958490316c.jpg";
import Edited from '../assets/edit.png';
// import Resume from 'C:\Users\siddharth kumar\Desktop\holiday\portfolio\src\assets\re.pdf';


const hero = () => {
  return (
    <div  className="grid grid-cols-1 sm:grid-cols-3 gap-8   max-w-[1200px] md:h-[87vh] mx-auto py-8  " id="hero" >
      <div className=" col-span my-auto mx-auto w-[300px] h-auto lg:w-[400]">
        <img className="bg-transparent" src={Edited} alt="hero image" />
      </div>
      <div className=" z-[-10] col-span-2 px-5 my-auto">
        <h1  className=" text-white text-4xl sm:text-5xl lg:text-8xl
        font-extrabold" >
          <span className=" primary-color">I'M a</span>
          <br />
          <TypeAnimation
            sequence={[
              "Frontend Dev",
              1000,
              "Webdesigner",
              1000,
              "Data scientists",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white sm:text-lg my-6 lg:text-xl">
          My name is Siddharth , CS student of<br/>
          University Institute of technology, Burdwan University
        </p>
        
        <div className="my-8">
          <a  href=""  className="px-6 py-3 w-full rounded-xl mr-4 bg-gradient-to-br from-orange-500 to-pink-500 text-white hover: " >
            Download Resume
          </a>
         

          <a
            href="#contact"
            className="px-6 py-3 w-full rounded-xl border border-gray-400 hover:bg-gradient-to-br from-orange-500   to-pink-500 text-white hover:border-none"  >
            contact
          </a>
        </div>
      </div>
    </div>
  );
};

export default hero;
