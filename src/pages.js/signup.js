import logo from "./assets/logo.svg";
import google from "./assets/google.svg";
import apple from "./assets/apple.svg";
import load from "./assets/load.gif";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../contexts/contextprovider";

const Signup = () => {
  const { registerUser, getCookie, message } = useContext(AuthContext);

  const Navigate = useNavigate();
  const [loading, setLoading] = useState("NO");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const [specialties, setSpecialties] = useState([]);
  // const [message, setMessage] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty_id: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    specialty_id: "",
    password: "",
  });

  // Function to check if there's a valid access token in the cookie
  const checkAccessTokenInCookie = () => {
    const accessTokenCookie = getCookie("accessToken");
    if (accessTokenCookie) {
      // If access token found in cookie, navigate to dashboard
      Navigate("/dashboard");
    }
  };

  useEffect(() => {
    checkAccessTokenInCookie();
  }, []);

  useEffect(() => {
    const fetchSpecialties = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}api/v1/specialties`);
        if (!response.ok) {
          throw new Error("Failed to fetch specialties");
        }
        const data = await response.json();
        setSpecialties(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchSpecialties();
  }, []);

  // const handleChange = (e) => {
  //     setFormData({ ...formData, [e.target.name]: e.target.value });
  //     setErrors({ ...errors, [e.target.name]: '' }); // Clearing errors when input changes
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Parse specialty_id value to integer if it's not an empty string
    const parsedValue = name === "specialty_id" ? parseInt(value, 10) : value;
    setFormData({ ...formData, [name]: parsedValue });
    setErrors({ ...errors, [name]: "" }); // Clearing errors when input changes
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading("YES");

    // Validation
    let isValid = true;
    const errorsCopy = { ...errors };

    if (formData.name.trim() === "") {
      errorsCopy.name = "Name is required";
      isValid = false;
    } else {
      errorsCopy.name = ""; // Clear the error if name is not empty
    }

    if (formData.specialty_id === "") {
      errorsCopy.specialty_id = "Specialty is required";
      isValid = false;
    } else {
      errorsCopy.specialty_id = ""; // Clear the error if name is not empty
    }

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errorsCopy.email = "Invalid email format";
      isValid = false;
    } else {
      errorsCopy.email = ""; // Clear the error if email format is valid
    }

    if (formData.password.length < 6) {
      errorsCopy.password = "Password must be at least 6 characters long";
      isValid = false;
    } else {
      errorsCopy.password = ""; // Clear the error if password length is valid
    }

    setErrors(errorsCopy); // Update the errors state

    if (isValid) {
      try {
        await registerUser(formData); // Call registerUser function from context
        // If registration is successful, navigate to the dashboard
        // Navigate('/dashboard');
        console.log("Registration successful!");
        setLoading("NO");
      } catch (error) {
        setLoading("NO");
        // setMessage(error.response.data.message || 'Registration error'); // Set the error message from the response, or use a generic message
      }
    } else {
      setLoading("NO");
    }
  };

  // console.log(formData)

  return (
    <>
      <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
        <img src={logo} alt="Zoe Medicals" />
        <p className=" font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]">
          Sign up
        </p>
        <p className=" mt-3 font-Afacad font-normal text-center text-2xl">
          Get Started Now
        </p>
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

            <div className=' w-full flex flex-row justify-center mt-[72px] items-center space-x-4'>
                <span className=' w-[25%] md:w-[230px] border-t-[0.5px] border-[#00000099]'></span>
                <p className=' font-Afacad text-base font-normal'>Or Sign up with</p>
                <span className=' w-[25%] md:w-[230px] border-t-[0.5px] border-[#00000099]'></span>
            </div> */}

        <div className="flex flex-col justify-between items-center w-full md:w-[587px] mt-16">
          <label htmlFor="" className="w-full font-Afacad font-medium text-xl">
            Full Name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]"
              placeholder=""
            />
            {errors.name && (
              <p className="text-red-500 font-Afacad font-normal text-sm">
                {errors.name}
              </p>
            )}
          </label>

          <label
            htmlFor=""
            className="w-full mt-6 font-Afacad font-medium text-xl"
          >
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]"
              placeholder=""
            />
            {errors.email && (
              <p className="text-red-500 font-Afacad font-normal text-sm">
                {errors.email}
              </p>
            )}
          </label>

          <label
            htmlFor=""
            className="w-full mt-6 font-Afacad font-medium text-xl"
          >
            Specialty
            <select
              name="specialty_id"
              value={formData.specialty_id}
              onChange={handleChange}
              className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]"
              placeholder=""
            >
              <option value="">Select Specialty</option>
              {specialties.map((specialty) => (
                <option key={specialty.id} value={specialty.id}>
                  {specialty.name}
                </option>
              ))}
            </select>
            {errors.specialty_id && (
              <p className="text-red-500 font-Afacad font-normal text-sm">
                {errors.specialty_id}
              </p>
            )}
          </label>

          <label
            htmlFor=""
            className="w-full mt-6 font-Afacad font-medium text-xl"
          >
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-[15px]"
              placeholder=""
            />
            {errors.password && (
              <p className="text-red-500 font-Afacad font-normal text-sm">
                {errors.password}
              </p>
            )}
          </label>

          {message && (
            <p className="text-red-500 font-Afacad font-normal text-sm">
              {message}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className=" w-full bg-[#78C257] rounded-[36px] flex items-center justify-center  h-[48px] mt-[60px] text-black text-center font-Afacad text-base"
          >
            {loading === "NO" && "Continue"}
            {loading === "YES" && <img src={load} className=" w-6" alt="" />}
          </button>
          <Link to="/signin">
            <p className=" mt-[19px] font-Afacad font-medium text-base text-center">
              Already have an Account?
              <span className=" text-[#78C257]"> Login</span>
            </p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Signup;
