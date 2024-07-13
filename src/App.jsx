import "./App.css";
import ProjectCard from "./components/projectCard";

const projects = [
  {
    name: "Coalition Technology",
    description:
      "Short about Coalition Technology. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis earum, tempore modi iste molestias natus rem deserunt voluptatum quae quis expedita quos voluptatem ullam exercitationem error dignissimos temporibus quasi! ",
    image: "/images/Coa.png",
    link: "#",
  },
  {
    name: "Netcommerce",
    description:
      "Short about Netcommerce. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis earum, tempore modi iste molestias natus rem deserunt voluptatum quae quis expedita quos voluptatem ullam exercitationem error dignissimos temporibus quasi!",
    image: "/images/Netcommerce.png",
    link: "#",
  },
  {
    name: "Github",
    description:
      "Short about Github project. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis earum, tempore modi iste molestias natus rem deserunt voluptatum quae quis expedita quos voluptatem ullam exercitationem error dignissimos temporibus quasi!",
    image: "/images/githubproject.png",
    link: "#",
  },
  {
    name: "XYZ",
    description:
      "Short about XYZ. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit facilis earum, tempore modi iste molestias natus rem deserunt voluptatum quae quis expedita quos voluptatem ullam exercitationem error dignissimos temporibus quasi!",
    image: "/images/Netcommerce.png",
    link: "#",
  },
];

function App() {
  return (
    <section className='bg-black py-6 px-6 md:py-16 md:px-8 md:6 md:mx-20'>
      <h2 className='text-2xl md:text-4xl font-extrabold text-center text-white mb-6 md:mb-16 font-serif underline-fancy'>
        Getting My Hands Dirty
        {/* My professional highlight  */}
      </h2>
      <div className='container mx-auto'>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
      <div className='text-center mt-16'>
        <button className='bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors duration-300 font-sans'>
          See More Projects
        </button>
      </div>
    </section>
  );
}

export default App;
