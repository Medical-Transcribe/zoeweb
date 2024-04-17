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
    const { fetchUserProfile, getCookie, getUserDevices } = useContext(AuthContext);
    const [name, setName] = useState('');
    const [stripepromise, setStripePromise] = useState(null);
    const [clientSecret, setClientSecret] = useState("");
    const [devices, setDevices] = useState(null);
    const accessToken = getCookie('accessToken');
    const [plans, setPlans] = useState([]);
    const [plan, setPlan] = useState('');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [loading, setLoading] = useState('NO');
    const [payment, setPayment] = useState(false);
    const[ deviceCount, setDeviceCount] =useState('');
    const[ transactionCount, setTransactionCount] =useState('');
    const[ transcriptLeft, setTranscriptLeft] =useState(null);
    const [email, setEmail] = useState('');
    const [formData, setFormData] = useState({
        reason: '',
        subject: email,
        message: '',
    });
    const [responseMessage, setResponseMessage] = useState('');
    const [loading1, setLoading1] = useState(false);
    const [loadingDeviceId, setLoadingDeviceId] = useState(null);

    const [deleteWarning, setDeleteWarning] = useState(false);
    const [deleteMessage, setDeleteMessage] = useState("");
    const [deleting, setDeleting] = useState(false);
    const [deletingDeviceId, setDeletingDeviceId] = useState(null)

    useEffect(() => {
        const accessToken = getCookie('accessToken');
        if (!accessToken) {
            Navigate('/signin'); // Access token not found, redirect to login page
        } else {
            // Fetch user profile data if access token is available
            const fetchData = async () => {
                try {
                    const userData = await fetchUserProfile(accessToken);
                    setName(userData.data.name); // Set user profile data in state
                    setPlan(userData.data.plan);
                    setEmail(userData.data.email);
                    setDeviceCount(userData.statistics.devices_count);
                    setTransactionCount(userData.statistics.transactions_count);
                    setTranscriptLeft(userData.statistics.transcription_remaining);
                    // console.log(userData)

                    // Set the initial state of formData after fetching the user's email
                    setFormData({
                        reason: '',
                        subject: userData.data.email, // Use the email value directly here
                        message: '',
                    });
                } catch (error) {
                    // Handle error
                    console.error('Error fetching user profile:', error);
                }
            };

            fetchData(); // Fetch user profile data
        }
    }, [Navigate]);
  

    //fetch Plans
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


    
    //stripe form handler
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
    }, []);
    

    //Fetch Devices
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
    }, []);
    

    //Support form functions 
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        // Check if any of the fields are empty
        if (!formData.reason || !formData.message) {
            setResponseMessage('Please fill in all fields');
            return;
        }

        setLoading1(true);

        try {
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/support-email', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Failed to submit support email');
            }

            const responseData = await response.json();
            setResponseMessage(responseData.message);
        } catch (error) {
            console.error('Error submitting support email:', error);
            setResponseMessage('Failed to submit support email');
        }

        setLoading1(false);
    };

    //function for plan selection
    const handlePlanSelection = (event, selectedPlanName) => {
        const selected = event.target.checked;
        setPlan(selected ? selectedPlanName : ''); // Update the selected plan
        if (selected) {
            const selectedPlan = plans.find(plan => plan.name === selectedPlanName);
            setSelectedPlan(selectedPlan); // Update the selected plan object
        } else {
            setSelectedPlan(null); // Deselect the plan if unchecked
        }
    };
    
   
    // console.log(process.env.REACT_APP_ENVIRONMENT);

    const handleSubmitTransaction = async () => {
        setLoading('YES');
        try {
            // Get the environment from environment variables
            const environment = process.env.REACT_APP_ENVIRONMENT;
    
            // Choose the appropriate stripe_price_id based on the environment
            let stripePriceId;
            if (selectedPlan) {
                if (environment === 'development') {
                    stripePriceId = selectedPlan.test_stripe_price_id;
                } else if (environment === 'production') {
                    stripePriceId = selectedPlan.live_stripe_price_id;
                } else {
                    throw new Error('Unknown environment');
                }
            } else {
                throw new Error('No plan selected');
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
            // console.log('Client Secret:', responseData.clientSecret);
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
    
    // Event handler for deleting a device

    const handleDeleteDevice = async (deviceId) => {
        // Open the delete warning modal
        setDeleteWarning(true);
        // Set the ID of the device to be deleted
        setDeletingDeviceId(deviceId);
    };


    const confirmDelete = async () => {
        // Update state to indicate deletion in progress
        setDeleting(true);
        try {
            // Construct the URL for deleting the device
            const url = `https://dev-api.zoemed.ai/api/v1/devices/${deletingDeviceId}`;
    
            // Construct the request headers
            const headers = {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            };
    
            // Send a DELETE request to delete the device
            const response = await fetch(url, {
                method: "DELETE",
                headers,
            });
    
            // If the deletion is successful, update the UI and show success message
            if (response.ok) {
                // Remove the deleted device from the devices state
                setDevices(devices.filter(device => device.id !== deletingDeviceId));
                // Set the success message
                setDeleteMessage("Device deleted successfully.");
            } else {
                // If deletion fails, display error message from server
                const errorMessage = await response.json();
                setDeleteMessage(errorMessage.message || "Failed to delete device.");
            }
        } catch (error) {
            console.error('Error deleting device:', error);
            // Set error message if there's an error during deletion process
            setDeleteMessage("Error deleting device.");
        } finally {
            // Reset the delete warning state and deletion state
            setDeleting(false);
            setDeleteWarning(false);
            // Reset the delete message after 10 seconds
            setTimeout(() => {
                setDeleteMessage(null);
            }, 10000);
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
        {/* Delete Warning */}
        {deleteWarning && (
            <div className="fixed w-full h-[100vh] px-6 bg-[#00000071] z-[9999] flex justify-center items-center">
                <div className="w-full md:w-[450px] p-6 rounded-[15px] overflow-auto z-[9999] bg-[#f8f8f8] relative">
                    {deleting ? (
                        // Display loading icon and message if deletion is in progress
                        <div className=" w-full flex justify-center items-center">
                            <p className="font-Afacad font-semibold text-center text-base">Deleting device...</p>
                            <img src={load} alt="Loading" className=" w-6 mt-4" />
                        </div>
                    ) : (
                        // Display confirmation message if deletion is not in progress
                        <>
                            <p className="font-Afacad font-semibold text-center text-base">
                                Are you sure you want to delete this device?
                            </p>
                            <div className="flex justify-center mt-4">
                                <button
                                    onClick={() => setDeleteWarning(false)}
                                    className="mr-4 px-4 py-2 rounded-[50px] bg-[#E1F4D9] font-Afacad text-center text-sm font-semibold"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => confirmDelete()}
                                    className="px-4 py-2 rounded-[50px] bg-[#c13434] text-white font-Afacad text-center text-sm font-semibold"
                                >
                                    Delete
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>
        )}


        {/* payment Element */}

        { payment && <div className=" fixed w-full h-[100vh] px-6 bg-[#00000071] z-[9999] flex justify-center items-center ">
            <div className=" w-full md:w-[450px] p-6 rounded-[15px] overflow-auto z-[9999] bg-[#fff] relative">
                <img src={ close } onClick={()=>{setPayment(false)}} className=" absolute top-3 right-3" alt="" />
                <Elements stripe={stripepromise} options={options} >
                    <Payform clientSecret={clientSecret}/>
                </Elements>
            </div>
        </div>}

        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-4 md:px-6 py-2 md:py-4 rounded-[50px] font-Afacad font-medium text-sm md:text-lg text-[#78C257] bg-[#E1F4D9]">Overview</button></Link>
            <Link to='/transaction'><button className=" px-4 md:px-6 py-2 md:py-4 rounded-[50px] font-Afacad font-medium text-sm md:text-lg text-[#0000004D]">Transactions</button></Link>
            <Link to='/settings'><button className=" px-4 md:px-6 py-2 md:py-4 rounded-[50px] font-Afacad font-medium text-sm md:text-lg text-[#0000004D]">Settings</button></Link>
        </div>

        <div className=" w-full px-4 md:px-20 py-8 rounded-[20px]">
            <div className=" w-full p-6 bg-[#ECF6E7] flex flex-col lg:flex-row md:items-center rounded-[20px]">
                {/* <span className=" hidden lg:block h-[50px] w-[50px] bg-[#70706b] rounded-[50%]"></span> */}
                <p className=" text-left w-full lg:ml-6 font-Afacad font-semibold text-3xl lg:text-[32px]">Welcome Back, { name }</p>
               

                <div className=" flex w-full space-x-6 mt-6 md:mt-8 lg:mt-0 md:space-x-12 lg:ml-auto">
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-sm">Numbers of Transactions</p>
                        <p className=" font-Afacad font-medium text-xl lg:text-xl text-[#0000004D] mt-2">{ transactionCount }</p>
                    </span>
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-sm">Numbers of Devices</p>
                        <p className=" font-Afacad font-medium text-xl lg:text-xl text-[#0000004D] mt-2">{ deviceCount }</p>
                    </span>
                    <span className="">
                        <p className=" text-[#0000004D] font-medium font-Afacad text-sm">Transcriptions Left</p>
                        <p className=" font-Afacad font-medium text-xl lg:text-xl text-[#0000004D] mt-2">{ transcriptLeft }</p>
                    </span>
                </div>
                
            </div>

            <div className=" w-full p-6 bg-[#ECF6E7] rounded-[20px] -z-10 mt-8">
                <p className=" font-semibold text-[32px] font-Afacad">Analysis</p> 
                <p className=" font-Afacad font-normal text-base text-[#000000B2]">Showing accurate data from the app</p>

                <div className=" mt-6 flex flex-col lg:flex-row justify-between w-full -z-10 space-y-8 lg:space-y-0 ">
                    <div className=" w-full lg:w-[32%] p-6 rounded-[20px] bg-white relative">
                        <p className=" font-Afacad text-xl mb-3 font-semibold">Authorized Devices</p> 
                        <div className=" h-[250px] overflow-y-auto lg:h-[210px]">
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
                                            <p className="text-base font-Afacad text-[#000000B2] font-normal">{device.name}</p>
                                            {loadingDeviceId === device.id ? (
                                                // Display loading icon while the deletion is in progress
                                                <img src={load} alt="Loading" />
                                            ) : (
                                                // Display bin icon with onClick event handler to delete the device
                                                <img src={bin} alt="Delete" onClick={() => handleDeleteDevice(device.id)} />
                                            )}
                                        </div>

                                    ))}
                                </div>
                            ) : (
                                // If devices state is not null, string, or array, render an error message
                                <p>Error: Invalid devices state</p>
                            )}
                        </div>
                        { deleteMessage && <p className=" font-medium text-sm font-Afacad text-[#636363]">{deleteMessage}</p>}
                    </div>
                    <div className=" w-full relative lg:w-[32%] p-6 rounded-[20px] bg-white">
                        <div className=" flex flex-row items-center justify-between mb-6">
                            <p className=" font-Afacad text-xl mb-3 font-semibold">Subscription</p> 
                            <button className=' flex flex-row bg-[#78C257] px-3 h-[36px] space-x-2 rounded-[50px] items-center'>
                                <img src={ crown } alt="" />
                                <p className=' font-medium font-Afacad text-lg text-white'>{plan}</p>
                            </button>
                        </div>
                        <div className=" h-[300px] lg:h-auto">
                            {plans.map((item, index) => (
                                <div
                                    key={index}
                                    className={`p-4 border mb-3 rounded-lg flex flex-row justify-between ${
                                    plan === item.name ? 'border-[#78C257]' : 'border-[#EAECF0]'
                                    }`}
                                >
                                    <span>
                                    <p className="font-Afacad text-xs text-[#344054] font-medium">{item.name}</p>
                                    <p className="font-Afacad font-normal text-xs text-[#667085]">${item.price} Per Month</p>
                                    </span>
                                    <div className="round">
                                        <input
                                            type="checkbox"
                                            id={item.name}
                                            onChange={(event) => handlePlanSelection(event, item.name)}
                                            checked={plan === item.name}
                                        />
                                        <label htmlFor={item.name}></label>
                                    </div>
                                </div>
                            ))}
                        </div>


                        <button onClick={handleSubmitTransaction} className=" absolute bottom-6 right-6 mt-[20px] flex ml-auto px-5 py-3 flex-row items-center justify-center bg-[#78C257] rounded-[50px]">
                           { loading === 'NO' && <p className=" font-Afacad font-medium text-lg text-white">Change Plan</p>}
                           {  loading === 'YES' && <img src={ load } className=" w-6"/> }
                        </button>
                    </div>

                    <div className=" w-full lg:w-[32%] p-6 rounded-[20px] bg-white">
                        <p className=" font-Afacad text-xl mb-[34px] font-semibold">Support</p> 
                        <label htmlFor="" className=" w-full font-Afacad font-medium text-sm text-[#272D37]">
                            Reason For Contact
                            <select name="reason"value={formData.reason} onChange={handleChange} className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md">
                                <option value="">Select...</option>
                                <option value="Techincal Support">Techincal Support</option>
                                <option value="Collaboration">Collaboration</option>
                            </select>
                        </label>
                        <div className=" mt-6">
                            <label htmlFor="" className=" w-full font-Afacad font-medium text-sm">
                                Message
                                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Hi! We are an AI transcription company..." className="w-full font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" id="" cols="30" rows="3"></textarea>
                            </label>
                            {responseMessage && <p className=" mt-2 font-medium font-Afacad text-sm text-[#626262]">{responseMessage}</p>}
                            <button
                                className="w-full bg-[#78C257] rounded-[36px] flex items-center justify-center h-[48px] mt-[60px] text-black text-center font-Afacad text-base"
                                onClick={handleSubmit}
                                disabled={loading1}
                            >
                                {loading1 ? <img src={load} className="w-6" alt="" /> : 'Send'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
     );
}
 
export default Dashboard;