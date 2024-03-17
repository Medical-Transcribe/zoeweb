import check from './assets/check.svg';

const Pricing = () => {

    const plans = [
        {name:'Free', price:'$0', duration:'Per month', detail:'Explore the product and transcribe personal audios', ideal:'Ideal for Individual or occasional users', feat:'10 Transcriptions per month'},
        {name:'Pro', price:'$395', duration:'Per month', detail:'Explore the product with full functionality', ideal:'Ideal for Professionals and small teams', feat:'10 Transcriptions per month'},
        {name:'Enterprise', price:'', duration:'Custom pricing', detail:'Explore the product with full functionality, onboarding and support.', ideal:'Ideal for Large organizations and high-volume users', feat:'10 Transcriptions per month'},
    ]
    return ( 
        <>
        <div className=" px-20 py-16 w-full">
            <p className=" font-Afacad text-xl font-normal text-center">Our Pricing</p>
            <p className=" font-Afacad font-semibold text-5xl text-center leading-[62px] mt-3 px-[5%]">Unlock endless possibilities, choose your perfect plan.</p>
            
            <div className=" mt-12 grid  grid-cols-3 gap-[32px]">
                {plans.map((item, index) => (
                    <div key={index} className=" w-full bg-[#ECF6E7] p-8 rounded-[30px] border border-[#EAEBF0]">
                        <p className=' font-Afacad font-semibold text-4xl'>{ item.name }</p>
                        <span className=' flex flex-row items-end h-[2em] mt-3 space-x-1'>
                            <p className=' font-Afacad font-semibold text-4xl'>{ item.price }</p>
                            <p className=' font-normal text-2xl font-Afacad'>{ item.duration }</p>
                        </span>
                        <p className=' mt-6 font-Afacad font-normal h-[4em] text-xl'>{ item.detail }</p>

                        <p className=' mt-6 font-Afacad font-semibold text-xl'>{ item.ideal }</p>

                        <span className=' py-3 border-y border-[#78C2574D] flex flex-row items-center mt-3 space-x-3'>
                            <img src={ check } alt="" />
                            <p className=' font-Afacad font-normal text-base'>{item.feat }</p>
                        </span>
                        <span className=' py-3 flex flex-row items-center space-x-3'>
                            <img src={ check } alt="" />
                            <p className=' font-Afacad font-normal text-base'>{item.feat }</p>
                        </span>
                        <span className=' py-3 border-y border-[#78C2574D] flex flex-row items-center space-x-3'>
                            <img src={ check } alt="" />
                            <p className=' font-Afacad font-normal text-base'>{item.feat }</p>
                        </span>

                        <button className=' mt-10 px-6 py-4 bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]'>Get Started</button>
                    </div>
                ))}
            </div>
        </div>
        </>
     );
}
 
export default Pricing;