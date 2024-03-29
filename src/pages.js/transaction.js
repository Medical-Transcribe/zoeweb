import Header from "../components/header";
import { Link } from "react-router-dom";
import visa from './assets/visa.svg';
import bin from './assets/trash.svg';
import plus from './assets/plus.svg';

const Transaction = () => {

    const data = [
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        // Add more data as needed
    ];

    const cards = [
        {img:visa, digit:'**** **** **** 1234 5989', date:'04/24', tag:'Primary Card'},
        {img:visa, digit:'**** **** **** 1234 5989', date:'04/24', tag:'Secondary Card'},
    ]

    return ( 
        <>
        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Transactions</button></Link>
        </div>

        <div className="  w-full px-4 md:px-20 py-8">
            <div className=" w-full p-6 bg-[#ECF6E7] rounded-[20px]">
                <p className=" font-semibold text-[32px] font-Afacad">Transactions</p> 
                <p className=" font-Afacad font-normal text-base text-[#000000B2]">Showing accurate data from the app</p>

                <div className=" flex flex-col lg:flex-row justify-between items- space-y-6 lg:space-y-0 mt-6 w-full">
                    <div className=" py-3 px-6 bg-[#fff] h-full rounded-[20px] w-full lg:w-[64%] overflow-auto">
                        <table className=" w-full">
                            <thead>
                            <tr className=" border-b">
                                <th className="px-3 text-center font-Afacad font-medium text-[13px] text-[#121212] py-3">Time</th>
                                <th className="px-3 text-center font-Afacad font-medium text-[13px] text-[#121212] py-3">Type</th>
                                <th className="px-3 text-center font-Afacad font-medium text-[13px] text-[#121212] py-3">Amount</th>
                                <th className="px-3 text-center font-Afacad font-medium text-[13px] text-[#121212] py-3">Status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {data.map((item, index) => (
                                <tr key={index} className=''>
                                <td className="px-3 text-center font-Afacad text-sm font-normal text-[#A1A1A1] py-4">{item.time}</td>
                                <td className="px-3 text-center font-Afacad text-sm font-normal text-[#A1A1A1] py-4">{item.type}</td>
                                <td className="px-3 text-center font-Afacad text-sm font-normal text-[#A1A1A1] py-4">{item.amount}</td>
                                <td className="px-3 text-center font-Afacad text-sm font-normal text-[#A1A1A1] py-4"> <button className=" px-[10px] py-2 bg-[#17BD8D1A] text-center font-Afacad text-[#17BD8D] text-sm font-normal rounded-[20px]">{item.status}</button></td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className=" py-3 px-6 bg-[#fff] rounded-[20px] w-full lg:w-[34%]">
                        <p className=" text-xl font-semibold font-Afacad">Card</p>
                        <div className=" w-full mt-[34px]">
                            {cards.map((item, index) => (
                                <div className=" w-full mb-2" key={index}>
                                    <p className=" font-Afacad font-medium text-sm text-[#272D37]">{item.tag}</p>
                                    <div className=" w-full border mt-2 border-[#DAE0E6] rounded-[6px] p-3">
                                        <span className=" w-full flex flex-row justify-between items-center">
                                            <img src={visa} alt="" />
                                            <img src={bin} alt="" />
                                        </span>
                                        <span className=" w-full flex mt-4 flex-row justify-between items-center">
                                            <p className="font-Afacad font-normal text-sm">{item.digit}</p>
                                            <p className="font-Afacad font-normal text-sm">{item.date}</p>
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <button className=" mt-[12px] flex px-5 py-3 flex-row items-center justify-center space-x-3 bg-[#78C257] rounded-[50px]">
                            <img src={ plus } alt="" />
                            <p className=" font-Afacad font-medium text-lg text-white">Add New Card</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Transaction;