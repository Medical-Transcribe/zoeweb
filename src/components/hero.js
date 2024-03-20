import heroImg from './assets/heroImg.svg';
import heroMob from './assets/heroMob.svg';

const Hero = () => {
    return ( 
        <>
        <div className=" py-8 md:py-20 md:px-20 bg-[#ECF6E7] flex flex-col items-center justify-center">
            <p className=" font-Afacad font-semibold text-[32px] md:text-[64px] leading-[42px] md:leading-[85px] text-center capitalize px-4 md:px-[5%] lg:px-[12%]">Powerful AI transcription for every conversation</p>
            <p className=" font-Afacad text-center px-4 md:px-[10%] font-normal text-base md:text-xl mt-3">Real-time AI transcription turns spoken words into accurate text for your calls, meetings, interviews, and more.</p>
            <img src={ heroImg } className=' mt-16 hidden md:block' alt="" />
            <img src={ heroMob } className=' mt-16 block md:hidden' alt="" />
        </div>
        
        </>
     );
}
 
export default Hero;