import { Link, useLocation } from "react-router-dom";
import check from "./assets/chec.svg";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/contextprovider";
import load from "./assets/load.gif";

const Verified = () => {
  const location = useLocation();
  const { getCookie } = useContext(AuthContext);
  const accessToken = getCookie("accessToken");
  const [verifyResponse, setVerifyResponse] = useState(null);
  const [verificationStatus, setVerificationStatus] = useState("loading");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const email = params.get("email");
    const accessCode = params.get("access_code");

    if (email && accessCode) {
      verifyEmail(email, accessCode);
    } else {
      // Handle missing parameters
    }
  }, [location.search]);

  const verifyEmail = async (email, accessCode) => {
    try {
      const response = await fetch(`${API_BASE_URL}api/v1/auth/email-verify`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ email, access_code: accessCode }),
      });

      if (response.ok) {
        // Verification successful
        console.log("Email verification successful");
        console.log(response);
        setVerificationStatus("success");
        // Redirect to a success page or display a success message
      } else {
        // Verification failed
        console.error("Email verification failed");
        setVerificationStatus("failed");
        // Handle error and display appropriate message to the user
      }
    } catch (error) {
      console.error("Error verifying email:", error);
      setVerificationStatus("failed");
      // Handle fetch error
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center md:items-start p-6 md:p-12 h-full">
        <div className="w-full md:w-[500px] h-[150px] bg-[#ECF6E7] shadow p-6">
          {verificationStatus === "loading" && (
            <div className="flex items-center justify-center">
              <img src={load} className="w-8" alt="Loading..." />
              <p className="font-Afacad text-base mt-1 font-normal text-[#4d4d4d] ml-2">
                Verifying email...
              </p>
            </div>
          )}
          {verificationStatus === "success" && (
            <>
              <span className="flex items-center space-x-2">
                <img src={check} className="w-8" alt="" />
                <p className="font-Afacad text-2xl font-semibold text-[#78C257]">
                  Email Verification
                </p>
              </span>
              <p className="text-[#4d4d4d] text-base mt-1 font-normal font-Afacad">
                Your Email has been verified successfully
              </p>
              <Link to="/dashboard" className="w-full">
                <button className="bg-[#78C257] block ml-auto mt-4 px-4 py-2 rounded-[10px] text-white text-sm font-medium font-Afacad">
                  Return to Dashboard
                </button>
              </Link>
            </>
          )}
          {verificationStatus === "failed" && (
            <>
              <span className="flex items-center space-x-2">
                <img src={check} className="w-8" alt="" />
                <p className="font-Afacad text-2xl font-semibold text-[#78C257]">
                  Email Verification
                </p>
              </span>
              <p className="text-[#4d4d4d] text-base mt-1 font-normal font-Afacad">
                Email Verification Failed, Please try again.
              </p>
              <Link to="/dashboard" className="w-full">
                <button className="bg-[#78C257] block ml-auto mt-4 px-4 py-2 rounded-[10px] text-white text-sm font-medium font-Afacad">
                  Return to Dashboard
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Verified;
