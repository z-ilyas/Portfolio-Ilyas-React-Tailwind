import React from 'react'
import { FaLinkedinIn, FaReact,FaNodeJs } from "react-icons/fa";
import { SiGithub, SiJavascript, SiPostgresql, SiHtml5, SiCss3, } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
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
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            REACT FULL STACK
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
            <span className="bannerIcon">
              <SiHtml5/>
            </span>
            <span className="bannerIcon">
              <SiCss3/>
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <FaNodeJs />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media