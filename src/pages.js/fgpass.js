import logo from './assets//logo.svg';
import load from './assets/load.gif';
import { useState } from 'react';

const FgPass = () => {

    const [formData, setFormData] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({
        email: '',
    });

    const [loading, setLoading] = useState('NO');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clearing errors when input changes
    };


    const handleSubmit = async () => {
        setLoading('YES');

        // Validation
        let isValid = true;
        const errorsCopy = { ...errors };

        if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
            errorsCopy.email = 'Invalid email format';
            isValid = false;
        } else {
            errorsCopy.email = ''; // Clear the error if email format is valid
        }

        setErrors(errorsCopy); // Update the errors state

        if (isValid) {
            try {
                const response = await fetch('https://dev-api.zoemed.ai/api/v1/auth/forgot-password-email', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: formData.email,
                    }),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit email');
                }

                // Handle success, maybe show a success message or update state
                console.log('Email submitted successfully');
                setLoading('NO');
            } catch (error) {
                setLoading('NO');
                console.error('Error submitting email:', error);
                // Handle error, maybe show an error message to the user
            }
        } else {
            setLoading('NO');
        }
    };


    return ( 
        <>
        <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
            <img src={ logo } alt="Zoe Medicals" />
            

           <div className=''>
                <p className=' font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]'>Forgot Password</p>
                <p className=' mt-3 font-Afacad font-normal text-center w-full md:w-[587px] md:px-[5%] text-xl'>Enter the email associated with your account and we'll send a code with instructions to reset your password.</p>

                <div className='flex flex-col justify-between items-center w-full md:w-[587px] md:mt-16'>
                    <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
                        Email Address
                        <input type="email" name="email" value={formData.email} onChange={handleChange} className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]" placeholder="" />
                        {errors.email && <p className="text-red-500 font-Afacad font-normal text-sm">{errors.email}</p>}
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
 
export default FgPass;