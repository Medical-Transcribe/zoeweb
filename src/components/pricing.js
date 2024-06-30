import { Link } from "react-router-dom";
import check from "./assets/check.svg";
import { useState, useEffect } from "react";

const Pricing = () => {
  const [plan, setPlan] = useState([]);

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch("https://dev-api.zoemed.ai/api/v1/plans");
        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        setPlan(data.data); // Extract only the 'data' array from the response
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching PLANS:", error);
        // setLoading(false);
      }
    };

    fetchFAQs();
    // Cleanup function if needed
    return () => {
      // Perform any cleanup, if necessary
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  console.log(plan);

  const plans = [
    {
      name: "Free",
      price: "$0",
      duration: "Per month",
      detail: "Explore the product and transcribe personal audios",
      ideal: "Ideal for Individual or occasional users",
      feat: "10 Transcriptions per month",
    },
    {
      name: "Pro",
      price: "$395",
      duration: "Per month",
      detail: "Explore the product with full functionality",
      ideal: "Ideal for Professionals and small teams",
      feat: "10 Transcriptions per month",
    },
    {
      name: "Enterprise",
      price: "",
      duration: "Custom pricing",
      detail:
        "Explore the product with full functionality, onboarding and support.",
      ideal: "Ideal for Large organizations and high-volume users",
      feat: "10 Transcriptions per month",
    },
  ];
  return (
    <>
      <div className=" px-4 md:px-20 py-8 md:py-16 w-full">
        <p className=" font-Afacad text-lg md:text-xl font-normal text-center">
          Our Pricing
        </p>
        <p className=" font-Afacad font-semibold text-3xl md:text-5xl text-center md:leading-[62px] mt-3 md:px-[5%]">
          Unlock endless possibilities, choose your perfect plan.
        </p>

        <div className=" mt-12 grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
          {plan.map((item, index) => (
            <div
              key={index}
              className=" w-full bg-[#ECF6E7] p-8 rounded-[30px] border border-[#EAEBF0]"
            >
              <p className=" font-Afacad font-semibold text-4xl">{item.name}</p>
              <span className=" flex flex-row items-end h-[2em] mt-3 space-x-1">
                <p className=" font-Afacad font-semibold text-4xl">
                  ${item.price}
                </p>
                <p className=" font-Afacad font-medium text-2xl">Per Month</p>
              </span>
              <p className=" mt-6 font-Afacad font-normal h-[4em] text-xl">
                {item.description}
              </p>

              <p className=" mt-6 font-Afacad font-semibold text-xl">
                {item.excerpt}
              </p>

              <span className=" py-3 border-y border-[#78C2574D] flex flex-row items-center mt-3 space-x-3">
                <img src={check} alt="" />
                <p className=" font-Afacad font-normal text-base">
                  {item.benefits[0]}
                </p>
              </span>
              <span className=" py-3 flex flex-row items-center space-x-3">
                <img src={check} alt="" />
                <p className=" font-Afacad font-normal text-base">
                  {item.benefits[1]}
                </p>
              </span>
              <span className=" py-3 border-y border-[#78C2574D] flex flex-row items-center space-x-3">
                <img src={check} alt="" />
                <p className=" font-Afacad font-normal text-base">
                  {item.benefits[2]}
                </p>
              </span>

              <Link to="/signup">
                <button className=" mt-10 px-6 py-4 bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]">
                  Get Started
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;
