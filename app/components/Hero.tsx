import Image from "next/image";
import heroImage from "../../public/images/hero-image.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-end relative items-center xl:items-start isolate overflow-hidden x:bg-[url(/images/hero-bg.png)] bg-cover bg-left-bottom max-w-[1400px] mx-auto px-4">
      <Image
        src={heroImage}
        alt="Tateno Pictures Film Makers in Uganda"
        className="min-h-[544px] min-w-[398.98px] 2xl:scale-[110%] xl:hiddn absolute -z-10 top-16 bottom-auto xl:top-auto xl:bottom-40 left-[50%] -translate-x-[50%] xl:-translate-x-[20%]"
      />
      {/* <div className="absolute -z-10 bg-gradient-to-t from-ttn-black via-ttn-black/80 to-ttn-black/40 w-full top-0 left-0 h-full"/> */}
      <div className="px-4 flex flex-col sm:items-center sm:max-w-[640px] xl:max-w-[800px] gap-4 -translate-y-28 xl:-translate-y-[300px]">
        <h1 className="font-heading font-bold text-3xl text-ttn-light leading-[1] max-w-[324px] sm:max-w-[600px] xl:max-w-[800px] sm:text-6xl xl:text-[70px]">
          VISUALS FOR FILM, WEB & ANIMATION
        </h1>
        <p className="text-xs sm:text-sm text-white/80 mb-8 max-w-[600px] mr-auto">
          With a perfect blend of imagination, innovation, and expertise, we
          craft captivating stories that leave a lasting impression on your
          audience.
        </p>
        <Link
          className="w-full xl:max-w-[200px] xl:mr-auto bg-ttn-orange text-ttn-black grid place-items-center py-2 sm:py-2.5 sm:text-lg text-base rounded-full font-semibold"
          href={"/contact"}
        >
          Hire us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
