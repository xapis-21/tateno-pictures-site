import ProjectCard from "./ProjectCard";
import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/6954220/pexels-photo-6954220.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/6954222/pexels-photo-6954222.jpeg?auto=compress&cs=tinysrgb&w=1600",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3825584/pexels-photo-3825584.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3491697/pexels-photo-3491697.jpeg",
      link: "",
    },
    {
      name: "",
      category: "",
      image:
        "https://images.pexels.com/photos/3206167/pexels-photo-3206167.jpeg",
      link: "",
    },
  ];
  return (
    <section className="relative pl-40 border">
      <div className="carousel carousel-center p-4 gap-8 w-full">
        {projects.map(({ name, category, image, link }) => (
          <div className="carousel-item">
            <ProjectCard
              name={name}
              category={category}
              image={image}
              link={link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
