import React from "react";
// import aboutImg from "../assets/about.jpg";
import pic1 from "../assets/pic1.jpg";

const about = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto my-12  " id="about">
      <div className="md:gird md:grid-cols-2  grid grid-cols-2 sm:py-16 ">
        <div className="mt-4 md:mt-0 text-left flex ">
          <div className="my-auto mx-6">
            <h2 className="text-3xl font-bold mb-4 primary-color">About me</h2>
            <p className="text-base lg:text-lg">
              I am Siddharth Kumar, a final-year Computer Science and
              Engineering student at the University Institute of Technology,
              Burdwan University, graduating in May 2025. <br></br>
              Passionate about software development, I enjoy creating innovative solutions that
              blend creativity and technology. I have experience in developing
              gesture recognition systems and building React-based web
              applications.<br></br> 
              My academic projects and hands-on expertise reflect
              my commitment to solving real-world problems through technology. I
              aspire to contribute to impactful projects in the tech industry,
              driving progress in dynamic environments.
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
