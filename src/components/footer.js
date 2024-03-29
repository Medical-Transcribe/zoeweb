import logo from './assets/whiteLogo.svg';
import fb from './assets/fb.svg';
import google from './assets/google.svg';
import apple from './assets/appl.svg';
import ig from './assets/ig.svg';


const Footer = () => {
    return ( 
        <>
        <div className=" px-4 md:px-20 py-8 md:py-16 bg-[#192C10]">
            <div className=" flex w-full flex-col lg:flex-row items-center justify-between pb-12 border-b border-[#ECF6E780]">
                <p className=" w-full lg:w-[70%] font-Afacad text-3xl md:text-5xl md:leading-[64px] font-semibold text-[#F9F9F9]">Hear it. See it. Know it instantly. Transcribe your first meeting, free.</p>
                <span className=" w-full lg:w-[30%] flex lg:ml-auto flex-row items-center lg:justify-end space-x-8 mt-8 lg:mt-0">
                    <button className=" px-6 py-3 rounded-[30px] text-center font-Afacad text-base font-semibold text-[#F5F8FE] bg-[#78C257]">Sign up</button>
                    <button className=" px-6 py-3 rounded-[30px] text-center font-Afacad text-base font-semibold text-[#192C10] bg-[#ECF6E7]">Log in</button>
                </span>
            </div>

            <div className=" w-full flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:justify-between items-center pt-12 pb-16 border-b border-[#ECF6E780]">

                <img src={ logo } alt="" />

                <span className='flex md:hidden lg:flex flex-row items-center space-x-12 font-Afacad text-[#fff] font-normal text-base'>
                    <p className=''>Home</p>
                    <p className=''>Pricing</p>
                    <p className=''>FAQ</p>
                    <p className=''>Contact Us</p>
                </span>

                <span className='flex flex-row items-center space-x-6'>
                    <img src={ fb } alt="" />
                    <img src={ google } alt="" />
                    <img src={ apple } alt="" />
                    <img src={ ig } alt="" />
                </span>

            </div>
            <div className=' mt-8 w-full flex flex-col-reverse md:flex-row justify-between items-center'>
                <p className=' font-Afacad font-normal text-base mt-8 md:mt-0 text-white'>© 2024 Dorascribe. All Rights Reserved.</p>

                <span className=' flex flex-row items-center space-x-12 font-Afacad text-[#fff] font-medium text-base'>
                <p className=''>Privacy Policy</p>
                <p className=''>Terms & Conditions</p>
            </span>
            </div>
        </div>
        </>
     );
}
 
export default Footer;