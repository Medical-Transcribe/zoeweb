import logo from './assets/logo.svg';
import google from './assets/google.svg';
import apple from './assets/apple.svg';
import load from './assets/load.gif';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/contextprovider';
import { useContext, useState, useEffect } from 'react';

const Login = () => {

    const [loading, setLoading] = useState('NO')
    // const [message, setMessage] = useState(null);
    const Navigate = useNavigate();
    const { loginUser, getCookie, message } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });


    // Function to check if there's a valid access token in the cookie
    const checkAccessTokenInCookie = () => {
        const accessTokenCookie = getCookie('accessToken');
        if (accessTokenCookie) {
            // If access token found in cookie, navigate to dashboard
            Navigate('/dashboard');
        }
    };

    useEffect(() => {
        checkAccessTokenInCookie();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clearing errors when input changes
    };

    const handleSubmit = async (e) => {
        setLoading('YES');
        e.preventDefault();


        // Validation
        let isValid = true;
        const errorsCopy = { ...errors };

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errorsCopy.email = 'Invalid email format';
            isValid = false;
        } else {
            errorsCopy.email = ''; // Clear the error if email format is valid
        }

        if (formData.password.length < 6) {
            errorsCopy.password = 'Password must be at least 6 characters long';
            isValid = false;
        } else {
            errorsCopy.password = ''; // Clear the error if password length is valid
        }

        setErrors(errorsCopy); // Update the errors state

        if (isValid) {
            try {
                await loginUser(formData); // Call the loginUser function from the AuthContext
                // console.log('Login successful!');
                setLoading('NO');
                Navigate('/dashboard');
            } catch (error) {
                console.error('Login error:', error);
                setLoading('NO');
                // setMessage('Login failed, check mail and password');
            }
        }
        else{
            setLoading('NO')
        }
    };

    // console.log(user);

    



    return ( 
        <>
        <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
            <img src={ logo } alt="Zoe Medicals" />
            <p className=' font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]'>Login</p>
            <p className=' mt-3 font-Afacad font-normal text-center text-2xl'>Elevate your communication</p>
            {/* <div className=' w-full mt-6 flex items-center justify-center space-x-6'>
                <button className=' w-[48%] md:w-[282px] h-[50px] space-x-3 bg-[#ECF6E7] rounded-[10px] flex flex-row items-center justify-center'>
                    <img src={ google } alt="" />
                    <p className=' font-Afacad font-normal text-xl'>Google</p>
                </button>
                <button className=' w-[48%] md:w-[282px] h-[50px] space-x-3 bg-[#ECF6E7] rounded-[10px] flex flex-row items-center justify-center'>
                    <img src={ apple } alt="" />
                    <p className=' font-Afacad font-normal text-xl'>Apple</p>
                </button>
            </div>

            <div className=' w-full flex flex-row justify-center mt-8 md:mt-[72px] items-center space-x-4'>
                <span className=' w-[25%] md:w-[230px] border-t-[0.5px] border-[#00000099]'></span>
                <p className=' font-Afacad text-base font-normal'>Or log in with</p>
                <span className=' w-[25%] md:w-[230px] border-t-[0.5px] border-[#00000099]'></span>
            </div> */}

            <div className="flex flex-col justify-between items-center w-full md:w-[587px] md:-16">
                <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
                    Email Address
                    <input type="email" name="email" value={formData.email} onChange={handleChange} className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                    {errors.email && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.email}</p>}
                </label>
                <label htmlFor="" className="w-full mt-6 font-Afacad font-medium text-xl">
                    Password
                    <input type="password" name="password" value={formData.password} onChange={handleChange} className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                    {errors.password && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.password}</p>}
                </label>

                <div className=" w-full flex justify-between mt-3">
                    <div></div>
                    {/* <label className="flex items-center">
                        <input
                        type="checkbox"
                        className={`form-checkbox h-4 w-4 text-blue-600`}
                        />
                        <span className="ml-2 text-basee text-[#000] font-Afacad font-medium">
                        Remember me
                        </span>
                    </label> */}
                    <Link to='/forgotPassword'><p className=" text-[#78C257] text-base font-medium font-Afacad">Forgot Password</p></Link>
                </div>

                {message && <p className="text-red-500 font-Afacad font-normal text-sm">{message}</p>}

                <button onClick={handleSubmit} className=' w-full bg-[#78C257] rounded-[36px] flex items-center justify-center  h-[48px] mt-[60px] text-black text-center font-Afacad text-base'>
                    { loading === 'NO' && 'Continue'}
                    { loading === 'YES' && <img src={ load } className=' w-6' alt="" />} 
                </button>
                <Link to='/signup'><p className=' mt-[19px] font-Afacad font-medium text-base text-center'>Dont have an Account? <span className=' text-[#78C257]'>Register</span></p></Link>

            </div>

        </div>
        </>
     );
}
 
export default Login;