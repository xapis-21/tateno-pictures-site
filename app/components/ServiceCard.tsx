import Image from "next/image";

type ServiceCardPorps = {
  image: string;
  name: string;
    desc: string;
    width: number;
    height: number;
};

const ServiceCard = ({ image, name, desc,height,width }: ServiceCardPorps) => {
  return (
    <div className="flex flex-col items-center gap-8 border-ttn-light/40 w-[300px] h-[300px] border p-4 justify-center rounded-2xl">
      <Image
        src={image}
        height={height}
        width={width}
        alt={"Tateno Pictures" + name}
        className="object-contain"
      />
      <div className="flex flex-col items-start gap-2">
        <h2 className="text-sm font-semibold text-ttn-light">{name}</h2>
        <p className="text-xs text-white/80">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
