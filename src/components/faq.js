import arrowDown from './assets/arrow-down.svg';
import { useState, useEffect } from 'react';

const Faq = () => {

  const [faqs, setFAQs] = useState([]);
  // const [loading, setLoading] = useState(true);



  useEffect(() => {
    const fetchFAQs = async () => {
        try {
            const response = await fetch('https://dev-api.zoemed.ai/api/v1/faqs');
            if (!response.ok) {
                throw new Error('Failed to fetch FAQs');
            }
            const data = await response.json();
            setFAQs(data.data.data.slice(0, 5)); // Extract only the 'data' array from the response
            // setLoading(false);
        } catch (error) {
            console.error('Error fetching FAQs:', error);
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
    <div className=" px-4 md:px-20 py-8 md:py-16 w-full">
        <p className=" font-Afacad text-xl font-normal text-center">Our FAQ</p>
        <p className=" font-Afacad font-semibold text-5xl text-center leading-[62px] mt-3 mb-12 px-[5%]">Frequently asked questions?</p>
        {faqs.map((faq, index) => (
            <div
            key={faq.id}
            onClick={() => toggleDropDown(index)}
            className={`border-y py-6 w-full faq border-[#EAEBF0]${
                openIndex === index ? ' active' : ''
            }`}
            >
            <div className="flex flex-row w-full justify-between items-center">
                <p className="font-Afacad text-base md:text-xl font-medium">
                {faq.question}
                </p>
                <img
                src={arrowDown}
                className={`${
                    openIndex === index ? 'transform rotate-180' : ''
                } transition-transform duration-300`}
                alt=""
                />
            </div>
            <div className={`answer${openIndex === index ? ' open' : ''}`}>
                <p className="font-Afacad font-normal text-[#4d4d4d] text-sm md:text-base mt-5 transition-all duration-500">
                {faq.answer}
                </p>
            </div>
            </div>
        ))}
        
    </div>
    </>
    );
}
 
export default Faq;