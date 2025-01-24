import React from "react";
import { SocialIcon } from 'react-social-icons';

const footer = () => {
  return (
    <div className="max-w-[1200px] md:flex  p-12  justify-between mx-auto  mt-3">
      <span className="primary-color "><p>S Kumar</p>Still fighting</span>
      
      <span className="text-white">
        <div className="flex justify-items-center gap-4 sm:p-4">
          <SocialIcon url="https://github.com/Siddearth8"  target="_blank" className=""/>
          <SocialIcon url="https://www.linkedin.com/in/siddharth-kumar-439868238/ " target="_blank" className=""/>
          <SocialIcon url="https://twitter.com" target="_blank" />
          <SocialIcon url="https://facebook.com" target="_blank" />
          <SocialIcon url="https://www.instagram.com/sid_earth17/" target="_blank"></SocialIcon>
        </div>
      </span>
      <p className="text-gray-600">
        skyrky2003@gmail.com
        <br /> #webdev2024
      </p>
    </div>
  );
};

export default footer;
