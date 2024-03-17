import logo from './assets/logo.svg';
import google from './assets/google.svg';
import apple from './assets/apple.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return ( 
        <>
        <div className=" w-full flex justify-center p-16 h-full items-center flex-col">
            <img src={ logo } alt="Zoe Medicals" />
            <p className=' font-Afacad text-[40px] mt-2 font-medium text-[#78C257]'>Login</p>
            <p className=' mt-3 font-Afacad font-normal text-2xl'>Elevate your communication</p>
            <div className=' mt-6 flex space-x-6'>
                <button className=' w-[282px] h-[50px] space-x-3 bg-[#ECF6E7] rounded-[10px] flex flex-row items-center justify-center'>
                    <img src={ google } alt="" />
                    <p className=' font-Afacad font-normal text-xl'>Google</p>
                </button>
                <button className=' w-[282px] h-[50px] space-x-3 bg-[#ECF6E7] rounded-[10px] flex flex-row items-center justify-center'>
                    <img src={ apple } alt="" />
                    <p className=' font-Afacad font-normal text-xl'>Apple</p>
                </button>
            </div>

            <div className=' flex flex-row justify-center mt-[72px] items-center space-x-4'>
                <span className=' w-[230px] border-t-[0.5px] border-[#00000099]'></span>
                <p className=' font-Afacad text-base font-normal'>Or log in with</p>
                <span className=' w-[230px] border-t-[0.5px] border-[#00000099]'></span>
            </div>

            <div className="flex flex-col justify-between items-center w-[587px] mt-16">
                <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
                    Email Address
                    <input type="text" className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                </label>
                <label htmlFor="" className="w-full mt-6 font-Afacad font-medium text-xl">
                    Password
                    <input type="text" className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                </label>

                <div className=" w-full flex justify-between mt-3">
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        className={`form-checkbox h-4 w-4 text-blue-600`}
                        />
                        <span className="ml-2 text-basee text-[#000] font-Afacad font-medium">
                        Remember me
                        </span>
                    </label>
                    <p className=" text-[#78C257] text-base font-medium font-Afacad">Forgot Password</p>
                </div>

                <Link to='/dashboard' className='w-full'><button  className=' w-full bg-[#78C257] rounded-[36px] h-[48px] mt-[60px] text-black text-center font-Afacad text-base'>Continue</button></Link>
                <Link to='/signup'><p className=' mt-[19px] font-Afacad font-medium text-base text-center'>Dont have an Account? <span className=' text-[#78C257]'>Register</span></p></Link>

            </div>

        </div>
        </>
     );
}
 
export default Login;