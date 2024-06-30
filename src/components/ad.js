import { Link } from "react-router-dom";
import gradient from "./assets/grad.svg";

const Ad = () => {
  return (
    <>
      <div className=" md:pl-16 flex flex-row justify-between items-center">
        <div
          style={{
            backgroundImage: `url(${gradient})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className=" px-4 md:px-0 h-[360px] w-full py-16 relative z-[99]"
        >
          <div className=" w-full h-[360px] absolute top-0 right-0 -z-20 bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF00]"></div>
          <p className=" font-Afacad text-[#121216] text-3xl md:text-[40px] font-normal md:leading-[50px] w-full md:w-[400px] z-[99]">
            Your NEW Everyday MVPs are Reporting for Duty
          </p>
          <Link to="/signup">
            <button className=" bg-[#192C10] px-8 py-6 rounded-[36px] text-[#FFFFFF] mt-8 font-Afacad text-center font-normal text-base uppercase z-[99]">
              CHECK IT OUT now
            </button>
          </Link>
        </div>
        {/* <div style={{backgroundImage:`url(${gradient})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" hidden md:block w-[40%] h-[360px] relative">
                <div className=' w-full h-[360px] absolute top-0 right-0  bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF00]'></div>
            </div> */}
      </div>
    </>
  );
};

export default Ad;
