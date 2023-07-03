import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 20XX</p>
          <h2 className="text-4xl font-bold">Job Experiences</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Full-Stack Software Engineer Student "
            subTitle="Prime Digital Academy (February 2023 - July 2023)"
            result="Remote"
            des=" I have honed my skills in JavaScript, HTML, CSS, JQuery, React, Node.js, Redux, Saga, PostgreSQL, and Git, enabling me to tackle complex projects and develop robust applications. I recently completed an intensive full-stack software engineering program at Prime Digital Academy, where I gained practical experience by working on real-world client projects. One of my notable achievements during the program was developing a full-stack React application called Exercise Journal, which allows users to track exercises and visualize their progress."
          />
          <ResumeCard
            title="Property Manager"
            subTitle="Timberland Partners (April 2022 - December 2022)"
            result="St Cloud, MN"
            des="In this position I Addressed resident complaints, concerns, and requests promptly and professionally. I managed community rental rates to optimize income and prepared annual budgets. I also implemented self-created marketing strategies and initiatives. I Ensured the community's appearance was well-maintained and reported necessary maintenance. I Reviewed applications, prepared leases, and completed the required paperwork"
          />
          <ResumeCard
            title="Bilingual Staffing Specialist"
            subTitle="Doherty Staffing Specialist (January 2022 - April 2022)"
            result="St Cloud, MN"
            des="Recruited, interviewed, and placed qualified candidates in various positions. I Coached candidates and employees on interview skills, attendance, attitude, and workplace conduct. I also Handled daily office tasks, including paperwork, phone calls, and applicant interactions"
          />
        </div>
      </div>

    </motion.div>
  );
};

export default Experience;
