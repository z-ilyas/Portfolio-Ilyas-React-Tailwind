import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Educational Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full Stack Software Engineer"
            subTitle="Prime Digital Academy in Minneapolis,Minnesota (Febuary 2023 - July 2023)"
            result="Graduated"
            des=" I have honed my skills in JavaScript, HTML, CSS, JQuery, React, Node.js, Redux, Saga, PostgreSQL, and Git, enabling me to tackle complex projects and develop robust applications. I recently completed an intensive full-stack software engineering program at Prime Digital Academy, where I gained practical experience by working on real-world client projects. One of my notable achievements during the program was developing a full-stack React application called Exercise Journal, which allows users to track exercises and visualize their progress."
          />
            <ResumeCard
            title="Bachelor of Science in Business Management and a Minor in Economics"
            subTitle="St Cloud State University (SCSU) in St. Cloud,MN, (2016 - 2021)"
            result="Graduated"
            des="I completed my Bachelor of Science in Business Management with a Minor in Economics, which provided me with a well-rounded understanding of the principles and practices of the business world.
            During my studies in Business Management, I gained a comprehensive knowledge of various aspects of business operations, including marketing, finance, human resources, and strategic planning. This foundation equipped me with the skills necessary to analyze business challenges, make informed decisions, and contribute to the overall success of an organization."
          />
        </div>
      </div>

    </motion.div>
  );
}

export default Education