import { HiArrowUpRight } from "react-icons/hi2";

const Footer = () => {
  return (
    <>
      <footer className="max-w-[1400px] w-screen overflow-x-hidden mx-auto mt-32 lg:mt-80 px-4">
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-between">
          <h1 className="text-6xl mr-auto  lg:text-[100px] leading-[1] text-ttn-light">
            get in <br />
            <em>-touch</em>
          </h1>
          <div className="flex flex-col items-start">
            <p className=" text-ttn-orange w-fit mb-8 text-xs xl:text-sm max-w-[300px]">
              Drop us a message
            </p>
            <div className="flex flex-col lg:text-xl gap-2">
              <a
                href="mailto:hi@tatenopictures.com"
                className="py-8 border-b-[.5px] border-b-white/80 flex justify-between items-center lg:gap-40 gap-20 pr-8"
              >
                hi@tatenopictures.com <HiArrowUpRight className="text-2xl" />
              </a>
              <a
                href="tel:+256 761 074816"
                className="py-8 border-b-[.5px] border-b-white/80 flex justify-between items-center lg:gap-40 gap-20 pr-8"
              >
                +256 761 074816 <HiArrowUpRight className="text-2xl" />
              </a>

              <p className=" text-ttn-orange w-fit mb-8 mt-8 lg:mt-20 text-sm max-w-[300px]">
                we’re always looking for new challenges, so let’s chat!
              </p>
            </div>
          </div>
        </div>
        <div className="footer p-4 ">
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover text-sm text-white/80">Photography</a>
            <a className="link link-hover text-sm text-white/80">
              Graphics Design
            </a>
            <a className="link link-hover text-sm text-white/80">Film</a>
            <a className="link link-hover text-sm text-white/80">Animation</a>
            <a className="link link-hover text-sm text-white/80">
              Website Design
            </a>
            <a className="link link-hover text-sm text-white/80">Painting</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover text-sm text-white/80">About us</a>
            <a className="link link-hover text-sm text-white/80">Work</a>
            <a className="link link-hover text-sm text-white/80">Contact</a>
          </div>
          <div>
            <span className="footer-title">Social</span>
            <a className="link link-hover text-sm text-white/80">LinkedIn</a>
            <a className="link link-hover text-sm text-white/80">Youtube</a>
            <a className="link link-hover text-sm text-white/80">Instagram</a>
            <a className="link link-hover text-sm text-white/80">Facebook</a>
          </div>
        </div>
      </footer>{" "}
      <div className="w-full bg-black/40 py-4 mt-8">
        <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
          <p className="text-[11px] text-white/40">
            TATENO PICTURES © 2023
          </p>
          <a href="mailto:zziwafic@gmail.com" className="text-[11px] text-white/40">
            Design + Dev Shafic Zziwa
          </a>
          {/* <p className="text-xs text-white/40">
            TATENO PICTURES © 2023 terms & conditions
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
