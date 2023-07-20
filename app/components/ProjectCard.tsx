import Image from "next/image";

type projectCardProps = {
  name: string;
  category: string;
  image: string;
  link: string;
};

const ProjectCard = ({ name, category, image, link }: projectCardProps) => {
  return (
    <div className="h-full">
      <div className="relative h-full rounded-2xl w-auto">
        <Image
          src={image}
          height={715}
          width={439}
          alt={name + category + "Tateno Pictures"}
          className="h-full rounded-2xl object-cover object-center max-w-[800px]  group-hover:scale-105 duration-300"
        />
        <div className="absolute bg-gradient-to-t from-ttn-black via-ttn-black/50 top-0 left-0 w-full h-full">

        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
