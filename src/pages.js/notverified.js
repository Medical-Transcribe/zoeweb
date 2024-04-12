import { Link } from 'react-router-dom';
import fail from './assets/fail.svg';

const NotVerified = () => {
    return ( 
        <>
        <div className=" w-full flex justify-center items-center md:items-start p-6 md:p-12 h-full">
            <div className=" w-full md:w-[500px] h-[150px] bg-[#ECF6E7] shadow p-6">
                <span className=' flex itrms-center space-x-2'>
                    <img src={ fail } className=' w-6' alt="" />
                    <p className=" font-Afacad text-2xl font-semibold text-[#78C257]">Email Verification</p>
                </span>
                <p className=" text-[#4d4d4d] text-base mt-1 font-normal font-Afacad">Your Email Verification Failed</p>
                <Link to='/dashboard' className=' w-full'>
                <button className=' bg-[#78C257] block ml-aut mt-4 px-4 py-2 rounded-[10px] text-white text-sm font-medium font-Afacad'>Return to Dashboard</button></Link>
            </div>
        </div>
        </>
     );
}
 
export default NotVerified;