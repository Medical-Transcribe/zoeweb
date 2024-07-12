import Footer from "../components/footer";
import Navbar from "../components/navbar";
import arrowDown from "./assets/arrow-down.svg";
import { useState, useEffect } from "react";

const Faqq = () => {
  const [faqs, setFAQs] = useState([]);
  // const [loading, setLoading] = useState(true);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchFAQs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}api/v1/faqs`);

        if (!response.ok) {
          throw new Error("Failed to fetch FAQs");
        }
        const data = await response.json();
        setFAQs(data.data.data); // Extract only the 'data' array from the response
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
        // setLoading(false);
      }
    };

    fetchFAQs();
    // Cleanup function if needed
    return () => {
      // Perform any cleanup, if necessary
    };
  }, []); // Empty dependency array to ensure the effect runs only once

  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropDown = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <>
      <Navbar />
      <div className="px-4 md:px-20 py-8 md:py-16 bg-[#ECF6E7]">
        <p className=" font-Afacad text-3xl md:text-[64px] font-semibold text-center">
          FAQ
        </p>
        <p className=" font-Afacad font-normal text-xl text-center mt-3 md:px-[8%]">
          Curious About AI Transcription? Dive into Our Comprehensive FAQs and
          Become a Transcription Pro!
        </p>
      </div>{" "}
      <div className=" px-4 md:px-20 py-8 md:py-16">
        {faqs.map((faq, index) => (
          <div
            key={faq.id}
            onClick={() => toggleDropDown(index)}
            className={`border-y py-6 w-full faq border-[#EAEBF0]${
              openIndex === index ? " active" : ""
            }`}
          >
            <div className="flex flex-row w-full justify-between items-center">
              <p className="font-Afacad text-base md:text-xl font-medium">
                {faq.question}
              </p>
              <img
                src={arrowDown}
                className={`${
                  openIndex === index ? "transform rotate-180" : ""
                } transition-transform duration-300`}
                alt=""
              />
            </div>
            <div className={`answer${openIndex === index ? " open" : ""}`}>
              <p className="font-Afacad font-normal text-[#4d4d4d] text-sm md:text-base mt-5 transition-all duration-500">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>{" "}
      <Footer />
    </>
  );
};

export default Faqq;
