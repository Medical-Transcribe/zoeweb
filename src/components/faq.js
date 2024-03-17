import arrowDown from './assets/arrow-down.svg';
import { useState } from 'react';

const Faq = () => {

    const faqsData = [
        {
          question: "What is live transcribing?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          question: "Is there a website that can transcribe in real time?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
          question: "How do I transcribe audio to text real time?",
          answer:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "What languages does your AI engine support?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Is my data secure? How do you protect my privacy?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        
      ];
    
      const [openIndex, setOpenIndex] = useState(null);
    
      const toggleDropDown = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

    return ( 
        <>
        <div className=" px-20 py-16 w-full">
            <p className=" font-Afacad text-xl font-normal text-center">Our FAQ</p>
            <p className=" font-Afacad font-semibold text-5xl text-center leading-[62px] mt-3 mb-12 px-[5%]">Frequently asked questions?</p>

            {faqsData.map((faq, index) => (
                <div
                key={index}
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