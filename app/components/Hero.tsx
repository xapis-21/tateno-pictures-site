import Image from "next/image";
import heroImage from "../../public/images/hero-image.png";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-end relative isolate overflow-hidden">
      <Image
        src={heroImage}
        alt="Tateno Pictures Film Makers in Uganda"
        className="min-h-[544px] min-w-[398.98px] absolute -z-10 top-16 left-[50%] -translate-x-[50%]"
      />
      <div className="px-4 flex flex-col sm:items-center sm:max-w-[640px] gap-4 -translate-y-28 mx-auto">
        <h1 className="font-heading text-3xl text-ttn-light leading-[1] font-bold max-w-[324px] sm:max-w-[600px] sm:text-6xl">
          VISUALS FOR FILM, WEB & ANIMATION
        </h1>
        <p className="text-xs sm:text-sm text-white/80 mb-8">
          With a perfect blend of imagination, innovation, and expertise, we
          craft captivating stories that leave a lasting impression on your
          audience.
        </p>
        <Link
          className="w-full bg-ttn-orange text-ttn-black grid place-items-center py-2 sm:py-2.5 sm:text-lg text-base rounded-full font-semibold"
          href={"/contact"}
        >
          Hire us
        </Link>
      </div>
    </div>
  );
};

export default Hero;
