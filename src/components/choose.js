import accuracy from './assets/accuracy.svg';
import easy from './assets/easy.svg';
import secure from './assets/secure.svg';
import fast from './assets/fast.svg';
import best from './assets/best.svg';
import multi from './assets/multi.svg';

const Choose = () => {

    const features =[
        {img:accuracy, title:'High Accuracy', detail:'Powered by cutting-edge machine learning, our AI engine continuously evolves, delivering real-time transcription with exceptional 98.86% accuracy.'},
        {img:easy, title:'Easy to Use', detail:'We prioritize accessibility with an intuitive interface that empowers anyone to transcribe conversations with ease.'},
        {img:secure, title:'Security & Privacy', detail:'From end-to-end encryption to strict compliance with data privacy regulations, we ensure your conversations are secure and private.'},
        {img:fast, title:'Fast Transcript', detail:'Our cutting-edge AI transcribes even a 2-hour audio in just 5 minutes, all while maintaining industry-leading precision. '},
        {img:best, title:'Best Live Caption', detail:'Unlock the full potential of your virtual meetings. Immerse everyone with real-time, accessible captions for Zoom, Google Meet.'},
        {img:multi, title:'Multi-language', detail:'Conquer communication barriers with live captions and real-time transcriptions in over 100 languages, from spoken word to text instantly.'}
    ]
    return ( 
        <>
        <div className=" px-20 py-16 bg-[#192C10]">
            <p className=" font-Afacad text-xl font-normal text-center text-white">Why Choose us</p>
            <p className=" font-Afacad font-semibold text-5xl text-center text-white leading-[62px] mt-3 px-[5%]">Transcribe any conversation, empower every voice, unlock endless possibilities.</p>
            <div className=" mt-12 grid grid-cols-3 gap-[32px]">
                {features.map((item, index) => (
                    <div key={index} className=' w-full bg-[#ECF6E7] border border-[#EAEBF0] shadow-sm px-8 py-6 rounded-[10px]'>
                        <span className=' bg-white w-12 h-12 rounded-[50%] flex items-center justify-center'>
                            <img src={ item.img } alt="" />
                        </span>
                        <p className=' mt-6 font-Afacad font-semibold text-xl text-[#272D37]'>{ item.title }</p>
                        <p className=' font-Afacad text-base font-normal text-[#5F6D7E] mt-2'>{ item.detail }</p>
                    </div>
                ))}
            </div>

        </div>
        </>
     );
}
 
export default Choose;