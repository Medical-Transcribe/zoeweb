import logo from "./assets//logo.svg";
import load from "./assets/load.gif";
import { useState } from "react";

const FgPass = () => {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({
    email: "",
  });

  const [loading, setLoading] = useState("NO");
  const [resendLoading, setResendLoading] = useState(false);
  const [resendMessage, setResendMessage] = useState("");
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clearing errors when input changes
  };

  const handleSubmit = async () => {
    setLoading("YES");

    // Validation
    let isValid = true;
    const errorsCopy = { ...errors };

    if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errorsCopy.email = "Invalid email format";
      isValid = false;
    } else {
      errorsCopy.email = ""; // Clear the error if email format is valid
    }

    setErrors(errorsCopy); // Update the errors state

    if (isValid) {
      try {
        const response = await fetch(
          `${API_BASE_URL}api/v1/auth/forgot-password-email`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify({
              email: formData.email,
            }),
          }
        );

        if (!response.ok) {
          throw new Error("Failed to submit email");
        }

        const responseData = await response.json();
        setResendMessage(responseData.data.message);

        if (responseData.data.success) {
          console.log("Email resent successfully");
        } else {
          setResendMessage("Failed to resend email");
        }

        // Handle success, maybe show a success message or update state
        console.log("Email submitted successfully");
        setLoading("NO");
      } catch (error) {
        setLoading("NO");
        setResendMessage("Failed to submit email");
        // Handle error, maybe show an error message to the user
      }
    } else {
      setLoading("NO");
    }
  };

  return (
    <>
      <div className=" w-full flex justify-center p-6 md:p-16 h-full items-center flex-col">
        <img src={logo} alt="Zoe Medicals" />

        <div className="">
          <p className=" font-Afacad text-[40px] mt-2 text-center font-medium text-[#78C257]">
            Forgot Password
          </p>
          <p className=" mt-3 font-Afacad font-normal text-center w-full md:w-[587px] md:px-[5%] text-xl">
            Enter the email associated with your account and we'll send a code
            with instructions to reset your password.
          </p>

          <div className="flex flex-col justify-between items-center w-full md:w-[587px] md:mt-16">
            <label
              htmlFor=""
              className="w-full font-Afacad font-medium text-xl"
            >
              Email Address
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
              <div className=" w-full flex justify-between items-center">
                <div>
                  {resendMessage && (
                    <p className="text-[#717171] mt-2 font-Afacad font-normal text-sm">
                      {resendMessage}
                    </p>
                  )}
                </div>

                <button
                  className="text-[#78C257] mt-2 ml-auto text-base font-medium font-Afacad"
                  // onClick={handleResend}
                  disabled={resendLoading} // Disable the button when resending
                >
                  Resend
                </button>
              </div>
            </label>

            <button
              className="w-full bg-[#78C257] rounded-[36px] flex items-center justify-center h-[48px] mt-[60px] text-black text-center font-Afacad text-base"
              onClick={handleSubmit}
              disabled={loading === "YES"} // Disable the button when loading
            >
              {loading === "NO" ? (
                "Continue"
              ) : (
                <img src={load} className="w-6" alt="" />
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FgPass;
