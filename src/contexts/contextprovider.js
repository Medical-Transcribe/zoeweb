import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

const AuthProvider = (props) => {

    const [user, setUser] = useState(null);
    const [message, setMessage] = useState('');
    const Navigate = useNavigate();

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

    const registerUser = async (formData) => {
        try {
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/auth/register', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const responseData = await response.json();
            if (response.ok) {
                // Save user data and access token
                console.log('Registration successful:', responseData);
                Navigate('/dashboard')
                document.cookie = `accessToken=${responseData.access_token}; expires=${expirationDate.toUTCString()}; path=/`;
            } else {
                // Handle registration errors
                console.error('Registration failed:', responseData);
                setMessage(responseData.message || 'Registration failed'); // Use a generic message if specific message is not available
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setMessage('Registration failed due to a network error');
        }
    };


    //login user
    const loginUser = async (formData) => {
        try {
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/auth/login', {
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

            const response = await fetch('https://dev-api.zoemed.ai/api/v1/profile', {
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
                // console.log(data)
            } else {
                console.error('Failed to fetch user profile:', data);
            }
        } catch (error) {
            console.error('Error fetching user profile:', error);
        }
    };

    
    // Function to get all user devices
    const getUserDevices = async () => {
        try {
            const accessToken = getCookie('accessToken');
            if (!accessToken) {
                console.log('Access token not found in cookie');
                return null; // Exit function and return null if access token is not found
            }

            const url = new URL("https://dev-api.zoemed.ai/api/v1/devices");
            const headers = {
                "Authorization": `Bearer ${accessToken}`,
                "Content-Type": "application/json",
                "Accept": "application/json",
            };

            const response = await fetch(url, {
                method: "GET",
                headers,
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User devices:", data);
                return data; // Return the fetched data
            } else {
                const errorMessage = await response.text();
                console.error("Failed to get user devices:", errorMessage);
                return null; // Return null in case of error
            }
        } catch (error) {
            console.error('Error getting user devices:', error);
            return null; // Return null in case of error
        }
    };



    // Logout user
    const logoutUser = () => {
        // Remove the access token from the cookies
        document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'; // Setting the expiration date in the past deletes the cookiES
        setUser(null); // Reset the user state to null
        setMessage(''); // Clear any previous messages
        Navigate('/signin');
    };



    const authContextValue = {
        user,
        message,
        registerUser,
        loginUser,
        fetchUserProfile,
        getCookie,
        getUserDevices,
        logoutUser,
        // isAuthenticated,
    };


    return ( 
        <>
        <AuthContext.Provider value={authContextValue}>{props.children}</AuthContext.Provider>;
        </>
     );
}
 
export default AuthProvider;