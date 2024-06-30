import logo from './assets//logo.svg';
import load from './assets/load.gif';
import { useState } from 'react';


const EnterCode = () => {

    const [loading, setLoading] = useState('NO');

    
    return ( 
        <>
        <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
            <img src={ logo } alt="Zoe Medicals" />

            <div>
                <p className=' font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]'>Forgot Password</p>
                <p className=' mt-3 font-Afacad font-normal text-center md:px-[15%] lg:px-[25%] text-xl'>Enter the code sent to your email</p>
                <div className='flex flex-col justify-between items-center w-full md:w-[587px] md:mt-16 '>
                    <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
                        Enter Code
                        <input type="email" name="email"  className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                        {/* {errors.email && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.email}</p>} */}
                    </label>
                    <button className=' w-full bg-[#78C257] rounded-[36px] flex items-center justify-center  h-[48px] mt-[60px] text-black text-center font-Afacad text-base'>
                        { loading === 'NO' && 'Continue'}
                        { loading === 'YES' && <img src={ load } className=' w-6' alt="" />} 
                    </button>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default EnterCode;