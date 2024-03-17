import apple from './assets/apple.svg';
import windows from './assets/windows.svg';

const Banner = () => {
    return ( 
        <>
        <div className=" bg-[#192C10] px-20 py-16 w-full flex flex-row items-center justify-between">
            <div className=" w-1/2">
                <p className=" text-5xl font-Afacad text-[#F9F9F9] leading-[64px] font-semibold">Download our desktop application</p>
            </div>
            <div className="w-1/2 flex space-x-10 ml-auto">
                <button className=" w-[193px] h-[64px] rounded-[13px] px-3 py-2 bg-white flex">
                    <img src={ apple } alt="" />
                    <span className=' block ml-auto'>
                        <p className=' font-Afacad text-[15px] leading-[12px] font-normal'>Download for</p>
                        <p className=' font-Afacad font-semibold text-[30px]'>Mac OS</p>
                    </span>
                </button>
                <button className=" w-[193px] h-[64px] rounded-[13px] px-3 py-2 bg-white flex">
                    <img src={ windows } alt="" />
                    <span className=' block ml-auto'>
                        <p className=' font-Afacad text-[15px] leading-[12px] font-normal'>Download for</p>
                        <p className=' font-Afacad font-semibold text-[30px]'>Windows</p>
                    </span>
                </button>
            </div>
        </div>
        </>
     );
}
 
export default Banner;