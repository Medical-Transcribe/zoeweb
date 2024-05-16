import logo from "./assets/whiteLogo.svg";
import fb from "./assets/fb.svg";
import google from "./assets/google.svg";
import apple from "./assets/appl.svg";
// import appleblk from "./assets/blackappl.svg";
// import windows from "./assets/windows.svg";
import ig from "./assets/ig.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" px-4 md:px-20 py-8 md:py-16 bg-[#192C10]">
        {/* <div className="pb-8 w-full border-b border-[#ECF6E780] flex flex-col lg:flex-row items-center justify-between">
          <div className=" w-full lg:w-1/2">
            <p className=" text-3xl font-Afacad text-[#F9F9F9] md:leading-[64px] font-semibold">
              Download our desktop application
            </p>
          </div>
          <div className="w-full lg:w-1/2 flex mt-8 lg:mt-0 space-x-5 md:space-x-10 ml-auto">
            <button className=" px-4 md:w-[193px] h-[64px] rounded-[13px] md:px-3 py-2 bg-white flex items-center space-x-2 md:space-x-3">
              <img src={appleblk} className=" w-8 md:w-auto" alt="" />
              <span className=" block ml-auto">
                <p className=" font-Afacad text-[15px] leading-[12px] font-normal">
                  Download for
                </p>
                <p className=" font-Afacad font-semibold text-2xl md:text-[30px]">
                  Mac OS
                </p>
              </span>
            </button>
            <button className=" px-4 md:w-[193px] h-[64px] rounded-[13px] md:px-3 py-2 bg-white flex items-center space-x-2 lg:space-x-2">
              <img src={windows} className=" w-8 md:w-auto" alt="" />
              <span className=" block ml-auto">
                <p className=" font-Afacad text-[15px] leading-[12px] font-normal">
                  Download for
                </p>
                <p className=" font-Afacad font-semibold text-2xl md:text-[30px]">
                  Windows
                </p>
              </span>
            </button>
          </div>
        </div> */}
        <div className=" flex w-full flex-col lg:flex-row items-center justify-between py-12 border-b border-[#ECF6E780]">
          <p className=" w-full lg:w-[70%] font-Afacad text-3xl md:text-5xl md:leading-[64px] font-semibold text-[#F9F9F9]">
            Hear it. See it. Know it instantly. Transcribe your first meeting,
            free.
          </p>
          <span className=" w-full lg:w-[30%] flex lg:ml-auto flex-row items-center lg:justify-end space-x-8 mt-8 lg:mt-0">
            <Link to="/signup">
              <button className=" px-6 py-3 rounded-[30px] text-center font-Afacad text-base font-semibold text-[#F5F8FE] bg-[#78C257]">
                Sign up
              </button>
            </Link>
            <Link to="/signin">
              <button className=" px-6 py-3 rounded-[30px] text-center font-Afacad text-base font-semibold text-[#192C10] bg-[#ECF6E7]">
                Log in
              </button>
            </Link>
          </span>
        </div>

        <div className=" w-full flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:justify-between items-center pt-12 pb-16 border-b border-[#ECF6E780]">
          <img src={logo} alt="" />

          <span className="flex md:hidden lg:flex flex-row items-center space-x-12 font-Afacad text-[#fff] font-normal text-base">
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
          </span>

          <span className="flex flex-row items-center space-x-6">
            <img src={fb} alt="" />
            <img src={google} alt="" />
            <img src={apple} alt="" />
            <img src={ig} alt="" />
          </span>
        </div>

        <div className=" mt-8 w-full flex flex-col-reverse md:flex-row justify-between items-center">
          <p className=" font-Afacad font-normal text-base mt-8 md:mt-0 text-white">
            © 2024 Dorascribe. All Rights Reserved.
          </p>

          <span className=" flex flex-row items-center space-x-12 font-Afacad text-[#fff] font-medium text-base">
            <Link to="/privacypolicy">
              <p className="">Privacy Policy</p>
            </Link>
            <Link to="/privacypolicy">
              <p className="">Terms & Conditions</p>
            </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
