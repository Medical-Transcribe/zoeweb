import Header from "../components/header";
import { Link } from "react-router-dom";

const UpdatePassword = () => {
    return ( 
        <>
        <Header/>
        <div className=" w-full py-3 border-b border-[#EAEBF0] flex flex-row items-center justify-center">
            <Link to='/dashboard'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D] ">Overview</button></Link>
            <Link to='/transaction'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#0000004D]">Transactions</button></Link>
            <Link to='/settings'><button className=" px-6 py-4 rounded-[50px] font-Afacad font-medium text-lg text-[#78C257] bg-[#E1F4D9]">Settings</button></Link>
        </div>
        <div className="  w-full px-4 md:px-20 py-8">
            <div className=" w-full p-8 bg-[#ECF6E7] rounded-[20px]">
                <div className=" w-full flex flex-row justify-between items-center">
                    <span className=" flex flex-col">
                        <p className=" font-Afacad font-medium text-3xl text-[#101828]">Update password</p>
                        <p className=" font-Afacad font-normal text-base text-[#667085]">Update password here.</p>
                    </span>
                    <span className=" flex flex-row space-x-3">
                        <Link to='/settings'><button className=" px-6 py-3 rounded-[30px] shadow-sm bg-[#fff] text-[#344054] text-center font-Afacad font-semibold text-base">Back</button></Link>
                    </span>
                </div>

                <div className=" mt-5 w-full flex flex-col">
                    <label className=" w-full flex justify-between font-Afacad text-sm font-medium text-[#344054] items-center">
                        Enter Current password
                        <input type="text" className=" w-[60%] font-Afacad rounded-[8px] text-[#667085] font-normal text-base h-[45px] p-2.5" />
                    </label>
                    <label className=" w-full flex justify-between font-Afacad text-sm font-medium mt-10 text-[#344054] items-center">
                        Enter New password
                        <input type="text"  className=" w-[60%] font-Afacad rounded-[8px] text-[#667085] font-normal text-base h-[45px] p-2.5" />
                    </label>
                    <label className=" w-full flex justify-between font-Afacad text-sm font-medium mt-10 text-[#344054] items-center">
                        Confirm New password
                        <input type="text"  className=" w-[60%] font-Afacad rounded-[8px] text-[#667085] font-normal text-base h-[45px] p-2.5" />
                    </label>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default UpdatePassword;