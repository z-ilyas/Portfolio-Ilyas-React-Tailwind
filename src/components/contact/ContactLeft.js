import React from 'react'
import {  FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-5 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-1">
        <h3 className="text-3xl font-bold text-white">Ilyas Mohamed</h3>
        <p className="text-lg font-normal text-gray-400">
          REACT Full Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am a passionate and driven full-stack software developer based in Saint Cloud, MN. With a strong foundation in both front-end and back-end development, I am dedicated to creating exceptional user experiences and delivering high-quality software solutions.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+1 320-237-7310</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">zswaleh@ymail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-0">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
          <a href="https://github.com/z-ilyas" target="_blank" rel="noopener noreferrer">
            <SiGithub /></a>
          </span>
          <span className="bannerIcon">
          <a href="https://www.linkedin.com/in/ilyas-a-mohamed-917a691b9/" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn /></a>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft