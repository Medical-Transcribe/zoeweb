import apple from "./assets/apple.svg";
import windows from "./assets/windows.svg";

const Banner = () => {
  return (
    <>
      <div className=" bg-[#192C10] px-4 md:px-20 py-16 w-full flex flex-col lg:flex-row items-center justify-between">
        <div className=" w-full lg:w-1/2">
          <p className=" text-3xl md:text-5xl font-Afacad text-[#F9F9F9] md:leading-[64px] font-semibold">
            Download our desktop application
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex mt-8 lg:mt-0 space-x-5 md:space-x-10 ml-auto">
          <button className=" px-4 md:w-[193px] h-[64px] rounded-[13px] md:px-3 py-2 bg-white flex items-center space-x-2 md:space-x-2">
            <img src={apple} className=" w-8 md:w-auto" alt="" />
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
      </div>
    </>
  );
};

export default Banner;
