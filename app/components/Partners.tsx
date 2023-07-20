import Marquee from "react-fast-marquee";
import Image from "next/image";

const Partners = () => {
    const afterStyle = "after:w-[115%] after:-translate-x-[50%] after:h-[1px] after:bg-gradient-to-r after:from-transparent after:to-transparent after:via-ttn-light/10 after:top-8 after:left-[50%] after:absolute";
       const beforeStyle =
         "before:w-[115%] before:-translate-x-[50%] before:h-[1px] before:via-ttn-light/10 before:bottom-8  before:left-[50%] before:absolute before:bg-gradient-to-r before:from-transparent before:to-transparent";
  const clients = [
    { name: "CHANGE THE TRUTH", image: "/images/partners/ctt-logo.png" },
    { name: "EINSTEIN RISING", image: "/images/partners/einstein-logo.png" },
    { name: "SODZO FOUNDATION", image: "/images/partners/sodzo-logo.png" },
    { name: "STUDIO CONTRAL", image: "/images/partners/stc-logo.png" },
    { name: "FAMMI", image: "/images/partners/fammi-logo.png" },
    { name: "AFRICAN INSTITUTE FOR INVESTIGATIVE JOURNALISM", image: "/images/partners/aiij-logo.png" },
    { name: "SWANGZ AVENUE", image: "/images/partners/swangs-logo.png" },
    { name: "TENDER TALENTS", image: "/images/partners/ttms-logo.png" },
    { name: "MUSIC ACROSS BORDERS", image: "/images/partners/mab-logo.png" },
  ];
  return (
    <section className="w-full -translate-y-20 xl:-translate-y-40">
      <p className="mx-auto w-fit text-xs xl:text-sm">you're in good company</p>
      <div
        className={`w-full max-w-[1400px] mx-auto py-14 relative  border-x-ttn-light/10 ${afterStyle} ${beforeStyle}`}
      >
        <Marquee gradient={true} gradientColor={[13, 13, 13]} speed={30}>
          {clients.map(({ name, image }) => (
            <div className="flex items-center gap-2 mx-4 xl:mx-8 grayscale">
              <Image
                src={image}
                alt={""}
                width={40}
                height={40}
                className="h-6 xl:h-8 object-contain"
              />
              <h2 className="font-heading text-sm xl:text-xl font-thin text-ttn-light/60">
                {name}
              </h2>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

export default Partners;
