import React from "react";
import Html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
// import Tailwind from '../assets/tailwind.png'
import Tailwind from "../assets/react.png";
import react from "../assets/proj6.png";

const skills = () => {
  return (
    <div>
      <div
        className="  text-gray-400 md:h-[150px] mx-20px grid grid-cols-6 place-items-center md:flex  md:justify-between md:items-center p-6 mt-5"
        id="skill"
      >
        {/* <h2 className="text-gray-700 text-xl md:text-4xl font-bold m-4">
        my
        <br />
        tech
        <br />
        stack
      </h2> */}

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={Html} alt="htmlimg" />
          <p className="mt-2">Html</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={css} alt="cssimage" />
          <p className="mt-2">Css</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={javascript} alt="javascriptimg" />
          <p className="mt-2">javascript</p>
        </div>

        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={Tailwind} alt="tailwingimg" />
          <p className="mt-2">tailwind</p>
        </div>
        <div className="flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]">
          <img src={react} alt="reactimg" />
          <p className="mt-2">react</p>
        </div>
      </div>
      {/* ////mine///////////////////// */}/


      <div className=" text-pink-500 ">
        <h2 className="md:text-center  font-serif p-3 "> My Skills :<hr className="w-[100px] md:ml-[556px]"/></h2>

        <div className="grid  md:grid-cols-3 ">
          {/* <div className=" items-start border  h-80  col-span-1  "> */}

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img> </p>
            <p className=" border h-2 items-center m-2   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img></p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img> </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img></p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img> </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img> </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6"><img  className="w-[30px] " src={Html}></img> </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6">Html: </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6">Html: </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

          <div className="flex border p-3 rounded-2xl m-3 ">
            <p className=" ml-6">Html: </p>
            <p className=" border h-2 items-center m-2.5   w-[300px] bg-gradient-to-r from-green-400 to-90% rounded-xl"></p>
            <p>80%</p>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default skills;
