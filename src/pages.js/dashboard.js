import Header from "../components/header";
import bin from './assets/trash.svg';
import plus from './assets/plus.svg';
import crown from './assets/crown.svg';
import { Link } from "react-router-dom";

const Dashboard = () => {

    const devices =[
        {device:"MacBook Pro"},
        {device:"MacBook Air"},
        {device:"Hp EliteBook"},
        {device:"Hp ZBook  "}
    ]

    const plans = [
        {name:'Free', price:'$0 Per Month'},
        {name:'Pro', price:'$395 Per Month'},
        {name:'Enterprise', price:'Custom pricing'}
    ]

    return ( 
        <>
        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Transactions</button></Link>
        </div>

        <div className=" w-full px-20 py-8 rounded-[20px]">
            <div className=" w-full p-6 bg-[#ECF6E7] flex flex-row items-center rounded-[20px]">
                <span className=" h-[98px] w-[98px] bg-[#70706b] rounded-[50px]"></span>
                <p className=" ml-6 font-Afacad font-medium text-[40px]">Welcome Back, Veek</p>
               

                <div className=" flex space-x-12 ml-auto">
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-base">Numbers of Transcriptions</p>
                        <p className=" font-Afacad font-medium text-5xl text-[#0000004D] mt-2">10</p>
                    </span>
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-base">Numbers of Devices</p>
                        <p className=" font-Afacad font-medium text-5xl text-[#0000004D] mt-2">2</p>
                    </span>
                </div>
                
            </div>

            <div className=" w-full p-6 bg-[#ECF6E7] rounded-[20px] mt-8">
                <p className=" font-semibold text-[32px] font-Afacad">Analysis</p> 
                <p className=" font-Afacad font-normal text-base text-[#000000B2]">Showing accurate data from the app</p>

                <div className=" mt-6 flex flex-row justify-between w-full">
                    <div className=" w-[32%] p-6 rounded-[20px] bg-white">
                        <p className=" font-Afacad text-xl mb-3 font-semibold">Authorized Devices</p> 
                        {devices.map((device, index) => (
                            <div key={index} className=" w-full h-[45px] rounded-[5px] border border-[#EAEBF080] mb-3 flex flex-row justify-between items-center p-[18px]">
                                <p className=" text-base font-Afacad text-[#000000B2] font-normal">{device.device}</p>
                                <img src={ bin } alt="" />
                            </div>
                        ))}

                        <button className=" mt-[43px] flex ml-auto px-5 py-3 flex-row items-center justify-center space-x-3 bg-[#78C257] rounded-[50px]">
                            <img src={ plus } alt="" />
                            <p className=" font-Afacad font-medium text-lg text-white">Authorize New Device</p>
                        </button>
                    </div>
                    <div className=" w-[32%] p-6 rounded-[20px] bg-white">
                        <div className=" flex flex-row items-center justify-between mb-6">
                            <p className=" font-Afacad text-xl mb-3 font-semibold">Subscription</p> 
                            <button className=' flex flex-row bg-[#78C257] px-3 h-[36px] space-x-2 rounded-[50px] items-center'>
                                <img src={ crown } alt="" />
                                <p className=' font-medium font-Afacad text-lg text-white'>Enterprise</p>
                            </button>
                        </div>
                        
                        {plans.map((item, index) => (
                            <div key={index} className=" p-4 border border-[#EAECF0] mb-3 rounded-lg flex flex-row justify-between">
                                <span className="">
                                    <p className=" font-Afacad text-xs text-[#344054] font-medium">{ item.name }</p>
                                    <p className=" font-Afacad font-normal text-xs text-[#667085]">{ item.price }</p>
                                </span>
                                <div class="round">
                                    <input type="checkbox" id={ item.name } />
                                    <label for={ item.name }></label>
                                </div>
                            </div>
                        ))}

                        <button className=" mt-[20px] flex ml-auto px-5 py-3 flex-row items-center justify-center bg-[#78C257] rounded-[50px]">
                            <p className=" font-Afacad font-medium text-lg text-white">Change Plan</p>
                        </button>
                    </div>

                    <div className=" w-[32%] p-6 rounded-[20px] bg-white">
                        <p className=" font-Afacad text-xl mb-[34px] font-semibold">Authorized Devices</p> 
                        <label htmlFor="" className=" w-full font-Afacad font-medium text-sm text-[#272D37]">
                            Reason For Contact
                            <select className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md">
                                <option value="">Select...</option>
                            </select>
                        </label>
                        <div className=" mt-6">
                            <label htmlFor="" className=" w-full font-Afacad font-medium text-sm">
                                Message
                                <textarea name="" placeholder="Hi! We are an AI transcription company..." className="w-full font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" id="" cols="30" rows="3"></textarea>
                            </label>
                            <button className=' w-full mt-6 px-6 py-3 bg-[#78C257] text-white text-center font-Afacad font-medium text-lg rounded-[50px]'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Dashboard;