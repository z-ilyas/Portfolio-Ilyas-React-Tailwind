import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Check these out on my github"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Exercise Journal"
          des="A user-friendly app designed for those seeking to regain control of their body weight and track their exercise routines.
          With features like personalized exercise logging, goal setting, and progress monitoring, it empowers users to make informed modifications, save past exercises, and witness their hard work pay off."
          src={projectOne}
          githubLink="https://github.com/z-ilyas/prime-solo-project"
          websiteLink=""

        />
        <ProjectsCard
          title="Plus-App"
          des=" A unique social media platform where users can upload a daily media piece and receive ratings from anonymous users.
          With a dynamic algorithm, uploaded media progresses from the Rating Stage to the Automated Matching Stage, where higher-rated media claims tokens from lower-rated media.
          Accumulate tokens, win matchups, and boost your tokens won balance in this engaging and competitive environment."
          src={projectTwo}
          githubLink=""
          websiteLink=""
        />
        
      </div>
    </section>
  );
}

export default Projects