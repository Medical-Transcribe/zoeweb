import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import icon from './assets/Icon.svg';

const Navbar = () => {
    return ( 
        <>
        <div className=" py-5 px-4 md:px-20 flex flex-row items-center justify-between bg-[#ECF6E7]">

            <img src={ logo } alt="" />

            <span className=' hidden lg:flex flex-row items-center space-x-12 font-Afacad text-[#121212] font-normal text-base'>
                <Link to='/'><p className=''>Home</p></Link>
                <Link to='/pricing'><p className=''>Pricing</p></Link>
                <Link to='/faq'><p className=''>FAQ</p></Link>
                <Link to='/contact'><p className=''>Contact Us</p></Link>
            </span>

            <span className=' hidden md:flex flex-row items-center space-x-6'>
                <Link to='/signin'><p className=' font-Afacad text-[#78C257] font-semibold text-base'>Login</p></Link>
                <Link to='/signup'><button className=' px-6 py-4 bg-[#78C257] rounded-[50px] font-Afacad text-center font-semibold text-base text-white'>Start for free</button></Link>
                <img src={ icon } className=' block lg:hidden' alt="" />
            </span>

            <img src={ icon } className=' block md:hidden' alt="" />
        </div>
        </>
     );
}
 
export default Navbar;