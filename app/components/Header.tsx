import Link from "next/link";
import { HiBars3 } from "react-icons/hi2";
import { FaYoutube, FaInstagram } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";

const Header = () => {
  return (
    <header className="text-white w-screen fixed top-0 grid place-items-center h-20 z-50">
      <div className="navbar px-4 sm:px-8 w-full max-w-[1400px]">
        <div className="flex-1 flex items-center gap-16 text-ttn-light">
          <Link
            href={"/"}
            className="btn btn-ghost normal-case text-sm sm:text-[16px] font-heading text-left px-0 leading-[1] tracking-wide max-w-[200px] "
          >
            Tateno <br /> Pictures.
          </Link>
          <nav className="hidden sm:block ">
            <ul className="flex gap-x-16">
              <li className="text-[16px]">
                <Link href={"/work"}>Work</Link>
              </li>
              <li className="text-[16px]">
                <Link href={"/about"}>About</Link>
              </li>
              <li className="text-[16px]">
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex-none">
          <ul className="sm:flex items-center gap-x-6 px-4 hidden">
            <li className="text-[26px] text-ttn-light">
              <Link href={"/about"}>
                <FaInstagram />
              </Link>
            </li>
            <li className="text-[30px] text-ttn-light">
              <Link href={"/work"}>
                <FaYoutube />
              </Link>
            </li>
          </ul>
          <button className="btn btn-square btn-ghost text-2xl sm:hidden">
            <HiBars3 />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
