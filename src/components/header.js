import close from './assets/close.svg';
import logo from './assets/logo.svg';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/contextprovider';
import profileTick from './assets/profile-tick.svg';
import greenTick from './assets/greentick.svg';
import greenx from './assets/greenx.svg';
import { Link } from 'react-router-dom';

const Header = () => {

    const { fetchUserProfile, getCookie, logoutUser } = useContext(AuthContext);
    const accessToken = getCookie('accessToken');
    const [plan, setPlan] = useState('');
    const [verified, setVerified] = useState(false);
    const [unverified, setUnverified] = useState(false);
    const [verificationStatus, setVerificationStatus] = useState('');

    useEffect(() => {

        const accessToken = getCookie('accessToken');

        if (!accessToken) {
        } else {
            // Fetch user profile data if access token is available
            const fetchData = async () => {
                try {
                    const userData = await fetchUserProfile(accessToken);

                    if (userData.data.email_verified_at) {
                        setVerificationStatus('Verified');
                    } else {
                        setVerificationStatus('Unverified');
                    };
                } catch (error) {
                    // Handle error
                    console.error('Error fetching user profile:', error);
                }
            };
            fetchData(); // Fetch user profile data
        }
    }, [fetchUserProfile, accessToken]);   

    return ( 
        <>
        <div className=" px-4 md:px-20 py-5 flex justify-between items-center border-b border-[#EAEBF0]">
            <img src={ logo } className='' alt="" />
            <span className=' flex flex-row space-x-4'>

                    {verificationStatus === 'Verified' && (
                        <button onClick={()=>{ setVerified(true)}} className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                            <img src={profileTick} alt="" />
                            <p className=' font-medium font-Afacad text-lg text-white'>Verified</p>
                        </button>
                    )}
                    {verificationStatus === 'Unverified' && (
                        <button onClick={()=>{ setUnverified(true)}} className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                            <p className=' font-medium font-Afacad text-lg text-white'>Unverified</p>
                        </button>
                    )}

{/* 
                <button  className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                    <img src={ profileTick } alt="" />
                    <p className=' font-medium font-Afacad text-lg text-white'>Verified</p>
                </button> */}

                <button onClick={ logoutUser } className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                    <p className=' font-medium font-Afacad text-lg text-white'>Logout</p>
                </button>
            </span>
        </div>

        { verified && <div className=' w-full h-[100vh] bg-[#00000046] fixed z-[9999] top-0 left-0 flex justify-center items-center'>
            <div className=' bg-white p-6 flex flex-col w-[400px] items-center justify-center rounded-[20px]'>
                <span className=' w-[106px] h-[106px] rounded-[50%] bg-[#ECF6E7] flex items-center justify-center'>
                    <img src={ greenTick } alt="" />
                </span>
                <p className=' text-center font-Afacad text-2xl font-semibold mt-1'>Verified</p>
                <button onClick={()=>{ setVerified(false)}} className=' w-full bg-[#78C257] rounded-[30px] text-center font-Afacad text-base font-medium h-[45px] mt-2 text-white'>Back</button>
            </div>
        </div>}

        { unverified && <div className=' w-full h-[100vh] bg-[#00000046] fixed z-[9999] top-0 left-0 flex justify-center items-center'>
            <div className=' bg-white p-6 flex flex-col w-[400px] items-center justify-center rounded-[20px] relative'>
                <img src={ close } className=' absolute top-3 right-3' onClick={()=>{ setUnverified(false)}} alt="" />
                <span className=' w-[106px] h-[106px] rounded-[50%] bg-[#ECF6E7] flex items-center justify-center'>
                    <img src={ greenx } alt="" />
                </span>
                <p className=' text-center font-Afacad text-2xl font-semibold mt-1'>Unverified</p>
                <Link className=' w-full' to='/settings'><button className=' w-full bg-[#78C257] rounded-[30px] text-center font-Afacad text-base font-medium h-[45px] mt-2 text-white'>Get Verified</button></Link>
            </div>
        </div>}
        </>
     );
}
 
export default Header;