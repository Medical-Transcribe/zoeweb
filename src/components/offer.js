import image from './assets/image6.svg';

const Offer = () => {
    return ( 
        <>
        <div className=" py-16 w-full px-20">
            <p className=" font-Afacad text-xl font-normal text-center">What we offer</p>
            <p className=" font-Afacad font-semibold text-5xl text-center leading-[62px] mt-3 px-[5%]">Our platform makes it simple to break down communication barriers and empower every voice</p>

            <div className=" w-full flex flex-row justify-between items-center mt-12">

                <div style={{backgroundImage:`url(${image})`, backgroundPosition:'center', backgroundSize:'cover'}}  className=" w-[48%] h-[450px] rounded-[10px] bg-[#ECF6E7]">

                </div>

                <div className=" w-[48%] flex flex-col items-center justify-center">
                    <div className=" w-full pb-8">
                        <p className=" font-Afacad font-semibold text-2xl">Effortless Efficiency</p>
                        <p className=" font-Afacad text-base font-normal mt-2">Stop note-taking, focus on participation. Capture every word instantly, access searchable transcripts, and boost productivity.</p>
                    </div>
                    
                    <div className=" w-full py-8 border-y border-[#EAEBF0]">
                        <p className=" font-Afacad font-semibold text-2xl">Enhanced Accessibility and Understanding</p>
                        <p className=" font-Afacad text-base font-normal mt-2">Break down communication barriers, enhance engagement, and foster inclusivity with real-time captions and accessible transcripts.</p>
                    </div>

                    <div className=" w-full pt-8">
                        <p className=" font-Afacad font-semibold text-2xl">Powerful Insights and Actionable Intelligence</p>
                        <p className=" font-Afacad text-base font-normal mt-2">Turn spoken content into data, analyze meeting dynamics, and unlock key takeaways. Leverage transcripts for content creation, knowledge management, and learning retention.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Offer;