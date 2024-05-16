import { Link } from "react-router-dom";
import logo from "./assets/logo.svg";
// import icon from "./assets/Icon.svg";

const Navbar = () => {
  function overlay() {
    //check classlist
    const overlayDiv = document.getElementById("overlay");
    if (overlayDiv.classList.contains("-translate-y-[500px]")) {
      overlayDiv.classList.remove("-translate-y-[500px]");
    } else if (!overlayDiv.classList.contains("-translate-y-[500px]")) {
      overlayDiv.classList.add("-translate-y-[500px]");
    }
  }

  return (
    <>
      {/* overlay */}
      <div
        id="overlay"
        className=" w-full bg-[#ECF6E7] backdrop-blur-xl h-[400px] p-6 flex justify-center items-center -translate-y-[500px] shadow transition-all duration-700 top-[78px] fixed z-[99]"
      >
        <div className="w-full flex flex-col justify-center items-center space-y-6">
          <Link to="/">
            <p className=" font-normal  transition-all cursor-pointer text-base text-[#000] font-Afacad ">
              Home
            </p>
          </Link>
          <Link to="/pricing">
            <p className=" font-normal  transition-all cursor-pointer text-base text-[#000] font-Afacad ">
              Pricing
            </p>
          </Link>
          <Link to="/faq">
            <p className=" font-normal  transition-all cursor-pointer text-base text-[#000] font-Afacad ">
              FAQ
            </p>
          </Link>
          <Link to="/contact">
            <p className=" font-normal  transition-all cursor-pointer text-base text-[#000] font-Afacad ">
              Contact Us
            </p>
          </Link>
          <Link to="/how-to-download">
            <p className=" font-normal  transition-all cursor-pointer text-base text-[#000] font-Afacad ">
              How it Works
            </p>
          </Link>
          <span className=" flex md:hidden flex-row items-center space-x-6">
            <Link to="/signin">
              <p className=" font-Afacad text-[#78C257] font-semibold text-base">
                Login
              </p>
            </Link>
            <Link to="/signup">
              <button className=" px-6 py-4 bg-[#78C257] rounded-[50px] font-Afacad text-center font-semibold text-base text-white">
                Start for free
              </button>
            </Link>
          </span>
        </div>
      </div>
      {/* navbar */}
      <div className=" py-5 px-4 md:px-20 flex flex-row items-center justify-between bg-[#ECF6E7]">
        <img src={logo} alt="" />

        <span className=" hidden lg:flex flex-row items-center space-x-12 font-Afacad text-[#121212] font-normal text-base">
          <Link to="/">
            <p className="">Home</p>
          </Link>
          <Link to="/pricing">
            <p className="">Pricing</p>
          </Link>
          <Link to="/faq">
            <p className="">FAQ</p>
          </Link>
          <Link to="/contact">
            <p className="">Contact Us</p>
          </Link>
          <Link to="/how-to-download">
            <p className="">How it Works</p>
          </Link>
        </span>

        <span className=" hidden md:flex flex-row items-center space-x-6">
          <Link to="/signin">
            <p className=" font-Afacad text-[#78C257] font-semibold text-base">
              Login
            </p>
          </Link>
          <Link to="/signup">
            <button className=" px-6 py-4 bg-[#78C257] rounded-[50px] font-Afacad text-center font-semibold text-base text-white">
              Start for free
            </button>
          </Link>
          <div onClick={overlay} class="menu-icon lg:hidden">
            <input class="menu-icon__cheeckbox" type="checkbox" />
            <div class="lg:hidden">
              <span></span>
              <span></span>
            </div>
          </div>
        </span>

        <div onClick={overlay} class="menu-icon md:hidden">
          <input class="menu-icon__cheeckbox" type="checkbox" />
          <div class="md:hidden">
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
