import ServiceCard from "./ServiceCard";

const ServiceGrid = () => {
  const services = [
    {
      name: "Film",
      image: "/images/icons/film-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 111,
      width: 136.6,
    },
    {
      name: "Photography",
      image: "/images/icons/photography-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 89.24,
      width: 199.49,
    },
    {
      name: "Graphics Design",
      image: "/images/icons/graphics-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 121.87,
      width: 118.11,
    },
    {
      name: "Animation",
      image: "/images/icons/animation-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 104,
      width: 126.48,
    },
    {
      name: "Website Design",
      image: "/images/icons/website-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 103,
      width: 103,
    },
    {
      name: "Paiting",
      image: "/images/icons/painting-icon.png",
      desc: "We are the leading film producers blah, blah in Kampala lorem ipsum",
      height: 150,
      width: 108.24,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[300px] md:max-w-[640px] lg:max-w-[1048px] mx-auto">
      {services.map(({ name, image, desc,height,width }) => (
        <ServiceCard image={image} name={name} desc={desc} height={height} width={width} />
      ))}
    </div>
  );
};

export default ServiceGrid;
