import crown from './assets/crown.svg';
import logo from './assets/logo.svg';
import { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../contexts/contextprovider';

const Header = () => {

    const { fetchUserProfile, user, getCookie } = useContext(AuthContext);
    const accessToken = getCookie('accessToken');
    const [plan, setPlan] = useState('');


    useEffect(() => {
        const fetchData = async () => {
            await fetchUserProfile();
            setPlan(user.data.plan);
        };

        if (!accessToken) {
        } else {
            // Access token found, fetch user profile
            fetchData();
        }
    }, [fetchUserProfile, accessToken]);

    return ( 
        <>
        <div className=" px-4 md:px-20 py-5 flex justify-between items-center border-b border-[#EAEBF0]">
            <img src={ logo } className='' alt="" />
            <span className=' flex flex-row space-x-4'>
                <button className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                    <img src={ crown } alt="" />
                    <p className=' font-medium font-Afacad text-lg text-white'>{ plan }</p>
                </button>

                <span className=' w-[45px] h-[45px] rounded-[50%] bg-[#70706b]'></span>
            </span>
        </div>
        </>
     );
}
 
export default Header;