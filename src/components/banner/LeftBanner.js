import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Professional Reader.", "Full Stack Developer.", "Traveling Enthusiast.","Painter."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Welcome.</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Ilyas Mohamed</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        "I am a passionate and driven full-stack software developer based in Saint Cloud, MN. With a strong foundation in both front-end and back-end development, I am dedicated to creating exceptional user experiences and delivering high-quality software solutions."
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner