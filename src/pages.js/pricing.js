import Footer from "../components/footer";
import Navbar from "../components/navbar";
import check from './assets/check.svg';

const Price = () => {

    const plans = [
        {name:'Free', price:'$0', duration:'Per month', detail:'Explore the product and transcribe personal audios', ideal:'Ideal for Individual or occasional users', feat:'10 Transcriptions per month'},
        {name:'Pro', price:'$395', duration:'Per month', detail:'Explore the product with full functionality', ideal:'Ideal for Professionals and small teams', feat:'10 Transcriptions per month'},
        {name:'Enterprise', price:'', duration:'Custom pricing', detail:'Explore the product with full functionality, onboarding and support.', ideal:'Ideal for Large organizations and high-volume users', feat:'10 Transcriptions per month'},
    ]

    return ( 
        <>
        <Navbar/>
        <div className=" px-20 py-16 w-full bg-[#ECF6E7]">
            <p className=" font-Afacad text-[64px] font-semibold text-center">Pricing</p>
            <p className=" font-Afacad font-normal text-xl text-center mt-3 px-[8%]">Unleash endless possibilities and choose your perfect plan, with real-time AI transcription for flawless recording of calls, meetings, interviews, and more.</p>
            
            <div className=" mt-12 grid  grid-cols-3 gap-[32px]">
                {plans.map((item, index) => (
                    <div key={index} className=" w-full bg-[#fff] p-8 rounded-[30px] border border-[#EAEBF0]">
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

        <div className=" px-20 py-16 w-full">
            <div class="overflow-x-auto">
                <table class="table-auto min-w-full ">
                    <thead class="">
                    <tr className="border-b-2 border-[#0000000D]">
                        <th class="  py-5 text-left text-xs font-medium  border-r-2 border-[#0000000D]">
                            <p className=" font-Afacad text-3xl leading-[48px] font-semibold">Compare plans</p>
                            <p className=" font-Afacad text-lg font-normal">Find one that's right for you</p>
                        </th>
                        <th class="py-5 px-6 text-left text-xs font-medium border-r-2 border-[#0000000D]">
                            <p className=" font-Afacad font-semibold text-2xl">Free</p>
                            <button className=' w-[200px] mt-1 h-[42px] bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]'>Get Started</button>
                        </th>
                        <th class="py-5 px-6 text-left text-xs font-medium border-r-2 border-[#0000000D]">
                            <p className=" font-Afacad font-semibold text-2xl">Pro</p>
                            <button className=' w-[200px] mt-1 h-[42px] bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]'>Get Started</button>
                        </th>
                        <th class="py-5 px-6 text-left text-xs font-medium">
                            <p className=" font-Afacad font-semibold text-2xl">Enterprise</p>
                            <button className=' w-[200px] mt-1 h-[42px] bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]'>Get Started</button>
                        </th>
                    </tr>
                    </thead>
                    <tbody class="bg-white ">
                    <tr className=" border-b-2 border-[#0000000D]">
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">Storage</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">5GB</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">50GB</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal">Unlimited</td>
                    </tr>
                    <tr className=" border-b-2 border-[#0000000D]">
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">Users</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">1</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">5</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal ">Unlimited</td>
                    </tr>
                    <tr className=" ">
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">Support</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">Basic</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal border-r-2 border-[#0000000D]">Priority</td>
                        <td class="px-6 py-4 font-Afacad text-xl font-normal">24/7 Dedicated</td>
                    </tr>
                    {/* <!-- Add more rows for other parameters --> */}
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Price;