import Header from "../components/header";
import bin from './assets/trash.svg';
import plus from './assets/plus.svg';
import crown from './assets/crown.svg';
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from 'react';
import {loadStripe} from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import { AuthContext } from '../contexts/contextprovider';
import Payform from "../components/payform";
import load from './assets/load.gif';
import close from './assets/close.svg';

const Dashboard = () => {


    
    const Navigate = useNavigate();
    const { fetchUserProfile, user, getCookie, getUserDevices } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [stripepromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [devices, setDevices] = useState(null);
    const accessToken = getCookie('accessToken');
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState('NO');
    const [payment, setPayment] = useState(false)


    // const plans = [
    //     {name:'Free', price:'$0 Per Month'},
    //     {name:'Pro', price:'$395 Per Month'},
    //     {name:'Enterprise', price:'Custom pricing'}
    // ]


    useEffect(() => {
        const fetchData = async () => {
            await fetchUserProfile();
            setName(user.data.name); // Set the name after fetching user profile
            setPlan(user.data.plan); // You can set other data if needed
        };

        if (!accessToken) {
            // Access token not found, redirect to login page
            Navigate('/signin');
        } else {
            // Access token found, fetch user profile
            fetchData();
        }
    }, [fetchUserProfile, accessToken]);
  


    //Plans
    useEffect(() => {
      const fetchPlans = async () => {
          try {
              const response = await fetch('https://dev-api.zoemed.ai/api/v1/plans');
              if (!response.ok) {
                  throw new Error('Failed to fetch FAQs');
              }
              const data = await response.json();
              setPlans(data.data); // Extract only the 'data' array from the response
              // setLoading(false);

          } catch (error) {
              console.error('Error fetching PLANS:', error);
              // setLoading(false);
          }
      };
  
      fetchPlans();
      // Cleanup function if needed
      return () => {
          // Perform any cleanup, if necessary
      };
    }, []); // Empty dependency array to ensure the effect runs only once


    const makePayment = async () => {
        try {
            const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
            setStripePromise(stripe);

        } catch (error) {
            console.error('Error initializing Stripe:', error);
            // Handle initialization error
        }
    };

    useEffect(() => {
        makePayment();
    }, [])
    

    // console.log(planIds)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userDevices = await getUserDevices();
                if (userDevices && userDevices.data && Array.isArray(userDevices.data)) {
                    if (userDevices.data.length === 0) {
                        setDevices('There are no devices now, click the button below to create one');
                    } else {
                        setDevices(userDevices.data);
                    }
                } else {
                    // Handle case where userDevices is not in the expected format
                    console.error('Invalid userDevices response:', userDevices);
                    // setDevices('Error: Invalid userDevices response');
                }
            } catch (error) {
                // Handle fetch errors
                console.error('Error fetching user devices:', error);
                // setDevices('Error: Failed to fetch user devices');
            }
        };
    
        if (!accessToken) {
            // Handle case where access token is not available
        } else {
            // Access token found, fetch user devices
            setDevices(null); // Reset devices state to null to show loading indicator
            fetchData();
        }
    }, [accessToken]);
    

    // console.log(plans)
    // console.log(accessToken)


    const handlePlanSelection = (event, plan) => {
        if (event.target.checked) {
            setSelectedPlan(plan);
        } else {
            setSelectedPlan(null); // Deselect the plan if unchecked
        }
    };
   
    // console.log(process.env.REACT_APP_ENVIRONMENT);

    const handleSubmitTransaction = async () => {
        setLoading('YES')
        // console.log(selectedPlan);
        try {
            // Get the environment from environment variables
            const environment = process.env.REACT_APP_ENVIRONMENT;
    
            // Choose the appropriate stripe_price_id based on the environment
            let stripePriceId;
            if (environment === 'development') {
                stripePriceId = selectedPlan.test_stripe_price_id;
            } else if (environment === 'production') {
                stripePriceId = selectedPlan.live_stripe_price_id;
            } else {
                throw new Error('Unknown environment');
            }
    
            // Submit the transaction with the selected stripe_price_id
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}`
                },
                body: JSON.stringify({
                    stripe_price_id: stripePriceId
                })
            });
    
            if (!response.ok) {
                throw new Error('Failed to submit transaction');
            }

            // Parse the response
            const responseData = await response.json();

            // Log the clientSecret if the transaction is successful
            console.log('Transaction submitted successfully');
            setLoading('NO');
            console.log('Client Secret:', responseData.clientSecret);
            setClientSecret(responseData.clientSecret);
            setPayment(true);
    
            // Handle success
            console.log('Transaction submitted successfully');
        } catch (error) {
            console.error('Error submitting transaction:', error);
            setLoading('NO');
            // Handle error
        }
    };

    const appearance = {
        theme: 'stripe',
    };
    
    const options = {
        clientSecret,
        appearance,
    };


    return ( 
        <>

        {/* payment Element */}

        { payment && <div className=" fixed w-full h-[100vh] bg-[#00000071] z-[9999] flex justify-center items-center ">
            <div className="w-[450px] p-6 rounded-[15px] overflow-auto z-[9999] bg-[#fff] relative">
                <img src={ close } onClick={()=>{setPayment(false)}} className=" absolute top-3 right-3" alt="" />
                <Elements stripe={stripepromise} options={options} >
                    <Payform clientSecret={clientSecret}/>
                </Elements>
            </div>
        </div>}

        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Transactions</button></Link>
            <Link to='/settings'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Settings</button></Link>
        </div>

        <div className=" w-full px-4 md:px-20 py-8 rounded-[20px]">
            <div className=" w-full p-6 bg-[#ECF6E7] flex flex-col lg:flex-row md:items-center rounded-[20px]">
                {/* <span className=" hidden lg:block h-[50px] w-[50px] bg-[#70706b] rounded-[50%]"></span> */}
                <p className=" text-left w-full lg:ml-6 font-Afacad font-semibold text-3xl lg:text-[32px]">Welcome Back, { name }</p>
               

                <div className=" flex w-full space-x-6 mt-6 md:mt-8 lg:mt-0 md:space-x-12 lg:ml-auto">
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-base">Numbers of Transcriptions</p>
                        <p className=" font-Afacad font-medium text-2xl lg:text-5xl text-[#0000004D] mt-2">10</p>
                    </span>
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-base">Numbers of Devices</p>
                        <p className=" font-Afacad font-medium text-2xl lg:text-5xl text-[#0000004D] mt-2">2</p>
                    </span>
                </div>
                
            </div>

            <div className=" w-full p-6 bg-[#ECF6E7] rounded-[20px] -z-10 mt-8">
                <p className=" font-semibold text-[32px] font-Afacad">Analysis</p> 
                <p className=" font-Afacad font-normal text-base text-[#000000B2]">Showing accurate data from the app</p>

                <div className=" mt-6 flex flex-col lg:flex-row justify-between w-full -z-10 space-y-8 lg:space-y-0 ">
                    <div className=" w-full lg:w-[32%] p-6 rounded-[20px] bg-white relative">
                        <p className=" font-Afacad text-xl mb-3 font-semibold">Authorized Devices</p> 

                        {devices === null ? (
                            // If devices state is null, render a loading indicator or other UI
                            <p className=" font-Afacad text-sm text-[#344054] font-medium">Loading...</p>
                        ) : typeof devices === 'string' ? (
                            // If devices state is a string, render the message
                            <p className=" font-Afacad text-sm text-[#344054] font-medium">{devices}</p>
                        ) : Array.isArray(devices) ? (
                            // If devices state is an array, map through the devices
                            <div>
                                {devices.map((device, index) => (
                                    <div key={index} className="w-full h-[45px] rounded-[5px] border border-[#EAEBF080] mb-3 flex flex-row justify-between items-center p-[18px]">
                                        <p className="text-base font-Afacad text-[#000000B2] font-normal">{device.device}</p>
                                        <img src={bin} alt="" />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            // If devices state is not null, string, or array, render an error message
                            <p>Error: Invalid devices state</p>
                        )}

                        <button className=" absolute bottom-6 right-6 flex ml-auto px-5 py-3 flex-row items-center justify-center space-x-3 bg-[#78C257] rounded-[50px]">
                            <img src={ plus } alt="" />
                            <p className=" font-Afacad font-medium text-lg text-white">Authorize New Device</p>
                        </button>
                    </div>
                    <div className=" w-full lg:w-[32%] p-6 rounded-[20px] bg-white">
                        <div className=" flex flex-row items-center justify-between mb-6">
                            <p className=" font-Afacad text-xl mb-3 font-semibold">Subscription</p> 
                            <button className=' flex flex-row bg-[#78C257] px-3 h-[36px] space-x-2 rounded-[50px] items-center'>
                                <img src={ crown } alt="" />
                                <p className=' font-medium font-Afacad text-lg text-white'>{plan}</p>
                            </button>
                        </div>
                        
                        {plans.map((item, index) => (
                            <div key={index} className=" p-4 border border-[#EAECF0] mb-3 rounded-lg flex flex-row justify-between">
                                <span className="">
                                    <p className=" font-Afacad text-xs text-[#344054] font-medium">{item.name}</p>
                                    <p className=" font-Afacad font-normal text-xs text-[#667085]">${item.price} Per Month</p>
                                </span>
                                <div className="round">
                                    <input
                                        type="checkbox"
                                        id={item.name}
                                        onChange={(event) => handlePlanSelection(event, item)}
                                    />
                                    <label htmlFor={item.name}></label>
                                </div>
                            </div>
                        ))}


                        <button onClick={handleSubmitTransaction} className=" mt-[20px] flex ml-auto px-5 py-3 flex-row items-center justify-center bg-[#78C257] rounded-[50px]">
                           { loading === 'NO' && <p className=" font-Afacad font-medium text-lg text-white">Change Plan</p>}
                           {  loading === 'YES' && <img src={ load } className=" w-6"/> }
                        </button>
                    </div>

                    <div className=" w-full lg:w-[32%] p-6 rounded-[20px] bg-white">
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