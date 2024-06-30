import logo from './assets//logo.svg';
import load from './assets/load.gif';
import { useState } from 'react';


const Newpass = () => {

    const [loading, setLoading] = useState('NO');

    return ( 
        <>
         <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
            <img src={ logo } alt="Zoe Medicals" />

            <div className=''>
                <p className=' font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]'>Create New Password</p>
                <p className=' mt-3 font-Afacad font-normal text-center w-full md:w-[587px] md:px-[5%] text-xl'>Your new password must be different from previous used passwords.</p>

                <div className='flex flex-col justify-between items-center w-full md:w-[587px] md:mt-16'>
                    <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
                        Enter New Password
                        <input type="email" name="email"  className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                        {/* {errors.email && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.email}</p>} */}
                    </label>

                    <label htmlFor="" className="w-full font-Afacad font-medium mt-6 text-xl">
                        Confirm New Password
                        <input type="email" name="email"  className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                        {/* {errors.email && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.email}</p>} */}
                    </label>

                    <button  className=' w-full bg-[#78C257] rounded-[36px] flex items-center justify-center  h-[48px] mt-[60px] text-black text-center font-Afacad text-base'>
                        { loading === 'NO' && 'Reset Password'}
                        { loading === 'YES' && <img src={ load } className=' w-6' alt="" />} 
                    </button>
                </div>
            </div>

        </div>
        </>
     );
}
 
export default Newpass;