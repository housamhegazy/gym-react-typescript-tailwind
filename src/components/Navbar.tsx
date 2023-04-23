import logo from "../assets/logo.png";
import { BeakerIcon, Bars4Icon } from "@heroicons/react/24/solid";

type props = {
  isOpenmenu: boolean;
  setisOpenmenu: (value: boolean) => void;
  isPageScrolled: boolean;
};
const Navbar = ({ isOpenmenu, setisOpenmenu, isPageScrolled }: props) => {
  return (
    <div>
      <div
        className={`fixed top:0 z-40 w-full px-[40px] flex justify-between items-center ${
          isPageScrolled ? "bg-blue-400" : ""
        } `}
      >
        <div className="flex items-center justify-between grow gap-8">
          {/* LOGO */}
          <div className="w-[100px]">
            <img src={logo} alt="logo" className="w-full h-full" />
          </div>
          {/* nav items */}
          <div className="hidden lg:flex justify-between items-center gap-8 grow">
            <ul className="flex justify-between items-center gap-8 ">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#classes">Classes</a>
              </li>
              <li>
                <a href="#trainers">Trainers</a>
              </li>
              <li>
                <a href="#contactus">Contact Us</a>
              </li>
              <li>
                <a href="#gallery">gallery</a>
              </li>
            </ul>
          </div>
          {/* number and sign in */}
          <div className="hidden md:flex justify-between items-center gap-8">
            <a className="py-2 px-2 text-primary-900" href="#">
              sign in{" "}
            </a>
            <button className="rounded-full mr-3 text-white bg-blue-900 px-3 py-1 border-lime-300">
              {" "}
              920008844{" "}
            </button>
          </div>
        </div>
        {/* toggle screen */}
        <div
          onClick={() => {
            setisOpenmenu(true);
          }}
        >
          <Bars4Icon className="mx-5 cursor-pointer h-[30px] w-[30px] lg:hidden" />
        </div>
      </div>

      {/* mobile menu */}

      {isOpenmenu && (
        <div className="transition dauration-500 lg:hidden pt-[50px] fixed top-0 z-50 bottom-0 right-0 w-[200px] bg-blue-400">
          <ul className=" w-100 flex flex-col justify-center items-start gap-2 mb-3">
            <li className=" w-full hover:bg-cyan-900">
              <a className=" px-5 py-2 block hover:text-white w-full" href="#home">
                Home
              </a>
            </li>
            <li className=" w-full hover:bg-cyan-900">
              <a className=" px-5 py-2 block hover:text-white w-full" href="#about">
                About
              </a>
            </li>
            <li className=" w-full hover:bg-cyan-900">
              <a className=" px-5 py-2 block hover:text-white w-full" href="#classes">
                Classes
              </a>
            </li>
            <li className=" w-full hover:bg-cyan-900">
              <a className=" px-5 py-2 block hover:text-white w-full" href="#trainers">
                Trainers
              </a>
            </li>
            <li className=" w-full hover:bg-cyan-900">
              <a
                className=" px-5 py-2 block hover:text-white w-full"
                href="#contactus"
              >
                Contact Us
              </a>
            </li>
            <li className=" w-full hover:bg-cyan-900">
              <a className=" px-5 py-2 block hover:text-white w-full" href="#gallery">
                gallery
              </a>
            </li>
          </ul>
          <div className="px-5 md:hidden flex flex-col items-start gap-4">
            <button className="rounded-full mr-3 text-white bg-blue-900 px-3 py-1 border-lime-300">
              {" "}
              920008844{" "}
            </button>
            <a className="hover:text-white py-2 text-primary-900" href="#">
              sign in{" "}
            </a>
          </div>
          <div
            onClick={() => {
              setisOpenmenu(false);
            }}
            className="absolute top-0 left-0 text-[red] mx-5 my-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};
export default Navbar;
