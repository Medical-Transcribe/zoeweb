import Header from "../components/header";
import { Link } from "react-router-dom";
import visa from './assets/visa.svg';
import bin from './assets/trash.svg';
import plus from './assets/plus.svg';
import close from './assets/close.svg';
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../contexts/contextprovider";
import { Elements } from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CardForm from "../components/cardForm";


const Transaction = () => {

    const { getCookie } = useContext(AuthContext);
    const [cards, setCards] = useState(null);
    const data = [
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        { time: '2024-02-21 12:39', type: 'Subscription', amount: '$5', status: 'Completed' },
        // Add more data as needed
    ];

    useEffect(() => {
        const fetchPaymentMethods = async () => {
            try {
                const accessToken = getCookie('accessToken'); // Assuming you have a function to get the access token
                const url = "https://dev-api.zoemed.ai/api/v1/set-payment-methods";
                const headers = {
                    "Authorization": `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                };
    
                const response = await fetch(url, {
                    method: "GET",
                    headers,
                });
    
                if (!response.ok) {
                    throw new Error('Failed to fetch payment methods');
                }
    
                const responseData = await response.json();

    
                if (responseData.length === 0) {
                    setCards('There are no cards now, click the button below to add one');
                } else {
                    setCards(responseData); // Update the state with the received cards
                }
                console.log(responseData);
            } catch (error) {
                console.error('Error fetching payment methods:', error);
                // Handle error if needed
            }
        };
    
        fetchPaymentMethods();
    }, []);
    

    const [collectCard, setCollectCard] = useState(false);
    const [stripepromise, setStripePromise] = useState(null);

    useEffect(()=> {
        const stripe = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
        setStripePromise(stripe);
    }, [])


    return ( 
        <>
        {/* stripe card element */}
        { collectCard && <div className="fixed w-full h-[100vh] bg-[#00000071] z-[9999] flex justify-center items-center ">
            <div className="w-[450px] py-3 p-6 rounded-[15px] overflow-auto z-[9999] bg-[#fff] relative">
                <img src={ close } onClick={()=>{setCollectCard(false)}} className=" absolute top-3 right-3" alt="" />
                <Elements stripe={stripepromise}>
                    <CardForm/>
                </Elements>
            </div>
        </div>}

        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D] ">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Transactions</button></Link>
            <Link to='/settings'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Settings</button></Link>
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
                            {cards === null ? (
                                // If cards state is null, render a loading indicator or other UI
                                <p className="font-Afacad text-sm text-[#344054] font-medium">Loading...</p>
                            ) : typeof cards === 'string' ? (
                                // If cards state is a string, render the message
                                <p className="font-Afacad text-sm text-[#344054] font-medium">{cards}</p>
                            ) : Array.isArray(cards) ? (
                                // If cards state is an array, map through the cards
                                <div>
                                    {cards.map((item, index) => (
                                        <div className="w-full mb-2" key={index}>
                                            <p className="font-Afacad font-medium text-sm text-[#272D37]">{item.tag}</p>
                                            <div className="w-full border mt-2 border-[#DAE0E6] rounded-[6px] p-3">
                                                <span className="w-full flex flex-row justify-between items-center">
                                                    <img src={item.icon} alt="" />
                                                    <img src={bin} alt="" />
                                                </span>
                                                <span className="w-full flex mt-4 flex-row justify-between items-center">
                                                    <p className="font-Afacad font-normal text-sm">{item.digit}</p>
                                                    <p className="font-Afacad font-normal text-sm">{item.date}</p>
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                // If cards state is not null, string, or array, render an error message
                                <p>Error: Invalid cards state</p>
                            )}
                        </div>

                        <button onClick={()=>{setCollectCard(true)}} className=" mt-[12px] flex px-5 py-3 flex-row items-center justify-center space-x-3 bg-[#78C257] rounded-[50px]">
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