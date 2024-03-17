import crown from './assets/crown.svg';
import logo from './assets/logo.svg';

const Header = () => {
    return ( 
        <>
        <div className=" px-20 py-5 flex justify-between items-center border-b border-[#EAEBF0]">
            <img src={ logo } className='' alt="" />
            <span className=' flex flex-row space-x-4'>
                <button className=' flex flex-row bg-[#78C257] px-5 py-2 space-x-2 rounded-[50px] items-center'>
                    <img src={ crown } alt="" />
                    <p className=' font-medium font-Afacad text-lg text-white'>Enterprise</p>
                </button>

                <span className=' w-[45px] h-[45px] rounded-[50%] bg-[#70706b]'></span>
            </span>
        </div>
        </>
     );
}
 
export default Header;