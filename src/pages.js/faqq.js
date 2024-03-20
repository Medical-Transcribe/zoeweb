import Footer from "../components/footer";
import Navbar from "../components/navbar";
import arrowDown from './assets/arrow-down.svg';
import { useState } from 'react';

const Faqq = () => {

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
            question: "Can I transcribe live meetings or calls?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Can I edit the transcript after it's generated?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Is there a free trial available?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "Do you integrate with other tools I use (e.g., project management software)?",
            answer:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
        {
            question: "How accurate is your AI transcription?",
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

        <Navbar/>
        <div className="px-4 md:px-20 py-8 md:py-16 bg-[#ECF6E7]">
            <p className=" font-Afacad text-3xl md:text-[64px] font-semibold text-center">FAQ</p>
            <p className=" font-Afacad font-normal text-xl text-center mt-3 md:px-[8%]">Curious About AI Transcription? Dive into Our Comprehensive FAQs and Become a Transcription Pro!</p>
        </div>

        <div className=" px-4 md:px-20 py-8 md:py-16">
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

        <Footer/>
        </>
     );
}
 
export default Faqq;