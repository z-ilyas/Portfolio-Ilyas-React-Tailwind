import React from 'react'
import { motion } from 'framer-motion';
import { SiJavascript, SiPostgresql, SiHtml5, SiCss3, SiExpress, SiReact, SiReduxsaga, SiJquery  } from "react-icons/si";


const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Software Skills</h2>
        </div>
          <div className='className="mt-14 w-full flex flex-col gap-6'>

          <div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiPostgresql />
            </span>
          </div><div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiHtml5 />
            </span>
          </div><div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiCss3 />
            </span>
          </div>
        </div>
      </div>

      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Tech Stack
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">Software Skills</h2>
        </div>
        <div className="flex flex-col gap-6">

        <div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiExpress/>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiReact/>
            </span>
          </div>
          <div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiReduxsaga/>
            </span>
          </div><div className="overflow-x-hidden">
            <span className="bannerIcon">
              <SiJquery/>
            </span>
          </div>




        </div>
      </div>
    </motion.div>
  );
}

export default Skills