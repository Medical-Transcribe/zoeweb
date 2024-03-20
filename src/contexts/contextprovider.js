import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7); // Set expiration to 7 days from now


    // Function to get the value of a cookie by its name
    const getCookie = (name) => {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.startsWith(`${name}=`)) {
                return cookie.substring(name.length + 1);
            }
        }
        return null;
    };


    //register user
    const registerUser = async (formData) => {
        // Implement registration logic
        const response = await fetch('http://zoe-api.ca-central-1.elasticbeanstalk.com/api/v1/auth/register', {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const responseData = await response.json();
        if (response.ok) {
            // Save user data and access token
            document.cookie = `accessToken=${responseData.access_token}; expires=${expirationDate.toUTCString()}; path=/`; // Adjust the path as needed
        } else {
            // Handle registration errors if needed
            console.error('Registration failed:', responseData.message);
            setMessage(responseData);
            // console.log(responseData);
        }
    };

    //login user
    const loginUser = async (formData) => {
        try {
            const response = await fetch('http://zoe-api.ca-central-1.elasticbeanstalk.com/api/v1/auth/login', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });
            const responseData = await response.json();
            
            // Check if login was successful
            if (response.ok) {
                // Save user data and access token
                // setAccessToken(responseData.access_token);
                // Set the access token in a cookie
                document.cookie = `accessToken=${responseData.access_token}; expires=${expirationDate.toUTCString()}; path=/`; // Adjust the path as needed
            } else {
                // Handle login errors if needed
                console.error('Login failed:', responseData.message);
                setMessage('Login failed, check mail and password');
            }
        } catch (error) {
            // Handle fetch errors
            console.error('Fetch error:', error);
        }
    };



    // Function to fetch user profile using access token from cookie
    const fetchUserProfile = async () => {
        try {
            const accessToken = getCookie('accessToken');
            if (!accessToken) {
                // throw new Error('Access token not found in cookie');
                console.log('Access token not found in cookie')
            }

            const response = await fetch('http://zoe-api.ca-central-1.elasticbeanstalk.com/api/v1/profile', {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                    Accept: 'application/json',
                },
            });
            const data = await response.json();

            if (response.ok) {
                // Set user profile data
                setUser(data);
            } else {
                console.error('Failed to fetch user profile:', data);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    const authContextValue = {
        user,
        message,
        registerUser,
        loginUser,
        fetchUserProfile,
        getCookie,
        // logoutUser,
        // isAuthenticated,
    };


    return ( 
        <>
        <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>;
        </>
     );
}
 
export default AuthProvider;