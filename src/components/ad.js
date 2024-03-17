import gradient from './assets/grad.svg';

const Ad = () => {
    return ( 
        <>
        <div className=" pl-16 flex flex-row justify-between items-center">
            <div className=" w-[60%] py-16 ">
                <p className=" font-Afacad text-[#121216] text-[40px] font-normal leading-[50px] w-[400px]">Your NEW Everyday MVPs are Reporting for Duty</p>
                <button className=" bg-[#192C10] px-8 py-6 rounded-[36px] text-[#FFFFFF] mt-8 font-Afacad text-center font-normal text-base uppercase">CHECK IT OUT now</button>
            </div>
            <div style={{backgroundImage:`url(${gradient})`, backgroundPosition:'center', backgroundSize:'cover'}} className=" w-[40%] h-[360px] relative">
                <div className=' w-full h-[360px] absolute top-0 right-0  bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF00]'></div>
            </div>

        </div>
        </>
     );
}
 
export default Ad;