import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project, reverse }) => {
  return (
    <div
      className={`flex flex-col lg:flex-row items-center mb-8 md:mb-16  ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >
      <div className={`lg:w-1/2 p-4 pr-10  ${reverse ? "pr-0" : ""}`}>
        <h3 className='md:text-3xl  font-bold text-white mb-2 font-serif'>
          {project.name}
        </h3>
        <p className='text-sm md:text-lg text-purple-100 mb-4 font-sans'>
          {project.description}
        </p>
        <a
          href={project.link}
          className='text-purple-600 flex items-center outline-none'
        >
          Read more <FaArrowRight className='ml-2' />
        </a>
      </div>
      <div className='lg:w-1/2 p-4 relative mx-6 md:mx-0'>
        <div className='relative'>
          <img
            src={project.image}
            alt={project.name}
            className='rounded-lg relative z-10 shadow-lg transform hover:translate-y-8 hover:-translate-x-8 translate-x-0 translate-y-0 transition-transform duration-300'
          />
          <div className='absolute inset-0 border-[5px] md:border-[10px] rounded-lg border-purple-600 transform translate-y-6 -translate-x-6 md:translate-y-8 md:-translate-x-8'></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
