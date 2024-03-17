import heroImg from './assets/heroImg.svg';

const Hero = () => {
    return ( 
        <>
        <div className=" py-20 px-20 bg-[#ECF6E7] flex flex-col items-center justify-center">
            <p className=" font-Afacad font-semibold text-[64px] leading-[85px] text-center capitalize px-[12%]">Powerful AI transcription for every conversation</p>
            <p className=" font-Afacad text-center px-[10%] font-normal text-xl mt-3">Real-time AI transcription turns spoken words into accurate text for your calls, meetings, interviews, and more.</p>
            <img src={ heroImg } className=' mt-16' alt="" />
        </div>
        </>
     );
}
 
export default Hero;