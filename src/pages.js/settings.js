import Header from "../components/header";
import { Link, useNavigate } from "react-router-dom";
import usere from './assets/user.svg';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/contextprovider';
import load from './assets/load.gif';
import close from './assets/close.svg';

const Settings = () => {

    const { fetchUserProfile, user, getCookie } = useContext(AuthContext);
    const Navigate = useNavigate();
    const [loading, setLoading] = useState('NO');
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const accessToken = getCookie('accessToken');
    const [verifyEmail, setVerifyEmail] = useState(false);


    // console.log(accessToken)

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
                    setEmail(userData.data.email);
                    console.log(userData.data)
                } catch (error) {
                    // Handle error
                    console.error('Error fetching user profile:', error);
                }
            };

            fetchData(); // Fetch user profile data
        }
    }, [Navigate]);


    const [formData, setFormData] = useState({
        newName: name,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setName(value);
    };

    const handleSubmit = async () => {

        setLoading('YES')
        try {
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/profile', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${accessToken}` // Assuming you have accessToken variable
                },
                body: JSON.stringify({
                    name: formData.newName,
                })
            });

            if (!response.ok) {
                throw new Error('Failed to update profile');
            }

            // Handle success, maybe show a success message or update state
            console.log('Profile updated successfully');
            setLoading('NO')
        } catch (error) {
            console.error('Error updating profile:', error);
            setLoading('NO')
            // Handle error, maybe show an error message to the user
        }
    };




    return ( 
        <>
        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D] ">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Transactions</button></Link>
            <Link to='/settings'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Settings</button></Link>
        </div>
        <div className=" w-full px-4 md:px-20 py-8">
            <div className=" w-full p-8 bg-[#ECF6E7] rounded-[20px]">
                <div className=" w-full flex flex-row justify-between items-center">
                    <span className=" flex flex-col">
                        <p className=" font-Afacad font-medium text-3xl text-[#101828]">Settings</p>
                        <p className=" font-Afacad font-normal text-base text-[#667085]">Update your photo and personal details here.</p>
                    </span>
                    <span className=" flex flex-row">
                        <button onClick={ handleSubmit } className=" flex justify-center items-center px-6 py-3 rounded-[30px] shadow-sm bg-[#78C257] text-[#fff] text-center font-Afacad font-semibold text-base">
                            { loading === 'NO' && 'Save'}
                            { loading === 'YES' && <img src={ load } className=" w-6" /> }
                        </button>
                    </span>
                </div>
                <div className=" flex  w-full flex-col items-center justify-center mt-6">
                    <span className=" w-[160px] h-[160px] rounded-[50%] bg-[#F9FFF6] border-4 border-white shadow-md flex items-center justify-center">
                        <img src={ usere } alt="" />
                    </span>
                    <p className=" font-Afacad text-2xl font-medium mt-3 text-[#101828]">{ name }</p>

                    <div className=" flex w-full flex-row justify-center items-center space-x-6">
                        <Link to='/updatePass' className=" flex justify-center items-center" ><button className=" mt-5 px-6 py-3 border border-[#667085] rounded-[20px] text-[#344054] font-Afacad text-sm font-medium">Update Password</button></Link>

                        <button onClick={()=>{setVerifyEmail(true)}} className=" mt-5 px-6 py-3 border border-[#667085] rounded-[20px] text-[#344054] font-Afacad text-sm font-medium">Verify Email</button>
                    </div>
                </div>

                <div className=" mt-5 w-full flex flex-col">
                    <label className=" w-full flex justify-between font-Afacad text-sm font-medium text-[#344054] items-center">
                        Name
                        <input type="text" name="newName" defaultValue={name} onChange={(handleChange)} className=" w-[75%] font-Afacad rounded-[8px] text-[#667085] font-normal text-base h-[45px] p-2.5" />
                    </label>

                    <label className=" w-full flex justify-between font-Afacad text-sm font-medium mt-10 text-[#344054] items-center">
                        Email
                        <input type="text" name="newEmail" value={email} className=" w-[75%] font-Afacad rounded-[8px] text-[#667085] font-normal text-base h-[45px] p-2.5" />
                    </label>
                </div>
            </div>
        </div>


        { verifyEmail && <div className=' w-full h-[100vh] bg-[#00000046] fixed z-[9999] top-0 left-0 flex justify-center items-center'>
            <div className=' bg-white p-6 flex flex-col w-[400px] items-center justify-center rounded-[20px] relative'>
                <img src={ close } onClick={()=>{setVerifyEmail(false)}} className=" absolute top-3 right-3" alt="" />
                <p className=' text-center font-Afacad text-2xl font-semibold mt-1'>Email Sent</p>
                <p className=" font-Afacad text-base text-[#00000099] font-normal mt-2 text-center">Please check your mail for a verification mail</p>
                <button onClick={()=>{setVerifyEmail(false)}} className=' w-full bg-[#78C257] rounded-[30px] text-center font-Afacad text-base font-medium h-[45px] mt-6 text-white'>Close</button>
            </div>
        </div>}
        </>
     );
}
 
export default Settings;