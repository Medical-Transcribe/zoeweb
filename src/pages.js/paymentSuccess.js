import { useState, useEffect, useContext } from "react";
import load from "./assets/load.gif";
import payment from "./assets/payment-check.png";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/contextprovider";

const PaymentSuccess = () => {
  const [verificationStatus, setVerificationStatus] = useState("loading");
  const { getCookie } = useContext(AuthContext);
  const accessToken = getCookie("accessToken");

  console.log(accessToken);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const paymentIntentId = params.get("payment_intent");
    const paymentIntentClientSecret = params.get(
      "payment_intent_client_secret"
    );
    if (paymentIntentId && paymentIntentClientSecret) {
      // If paymentIntentId and paymentIntentClientSecret are present in the URL parameters,
      // you can now make the PUT request to the endpoint with these values.
      submitPaymentDetails(paymentIntentId, paymentIntentClientSecret);
    } else {
      // Handle missing parameters
      setVerificationStatus("failed");
    }
  }, []);

  // submit payment details
  const submitPaymentDetails = async (
    paymentIntentId,
    paymentIntentClientSecret
  ) => {
    try {
      const url = `https://dev-api.zoemed.ai/api/v1/transactions/${paymentIntentId}`;
      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          paymentIntentId: paymentIntentId,
          paymentIntentClientSecret: paymentIntentClientSecret,
        }),
      });
      if (response.ok) {
        setVerificationStatus("success");
      } else {
        setVerificationStatus("failed");
      }
      console.log(response);
    } catch (error) {
      console.error("Error submitting payment details:", error);
      setVerificationStatus("failed");
    }
  };

  return (
    <>
      <div className="w-full flex justify-center items-center md:items-start p-6 md:p-12 h-full">
        <div className="w-full md:w-[500px]  flex flex-col justify-center items-center bg-[#ECF6E7] shadow p-6">
          {verificationStatus === "loading" && (
            <div className="flex items-center justify-center">
              <img src={load} className="w-8" alt="Loading..." />
              <p className="font-Afacad text-base mt-1 font-normal text-[#4d4d4d] ml-2">
                Checking Status...
              </p>
            </div>
          )}
          <img src={payment} className=" w-16" alt="" />
          <p className=" font-Afacad text-2xl font-semibold text-[#1a1c1a]">
            Your Payment was Successful
          </p>
          <Link to="/dashboard" className="">
            <button className="bg-[#78C257] mt-4 px-4 py-2 rounded-[10px] text-white text-sm font-medium font-Afacad">
              Return to Dashboard
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentSuccess;
