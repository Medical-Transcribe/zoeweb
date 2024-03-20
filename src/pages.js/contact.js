import Footer from "../components/footer";
import Navbar from "../components/navbar";
// import { useState } from "react";

const Contact = () => {
    return ( 
        <>
        <Navbar/>
        <div className=" w-full bg-[#ECF6E7] py-8 md:py-16 px-4 md:px-20">
            <p className=" font-Afacad text-3xl md:text-[64px] font-semibold text-center">Contact Us</p>
            <p className=" font-Afacad font-normal text-xl text-center mt-3 md:px-[8%]">Curious About AI Transcription? Dive into Our Comprehensive FAQs and Become a Transcription Pro!</p>
            <div className=" w-full bg-white rounded-[8px] mt-16 p-8">
                <div className="flex flex-col md:flex-row justify-between items-center w-full">
                    <label htmlFor="" className=" w-full md:w-[48%] font-Afacad font-medium text-base">
                        Full Name
                        <input type="text" className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" placeholder="John Doe" />
                    </label>

                    <label htmlFor="" className=" w-full md:w-[48%] mt-6 md:mt-0 font-Afacad font-medium text-base">
                        Email Address
                        <input type="text" className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" placeholder="JohnDoe@mail.com" />
                    </label>
                </div>

                <div className="flex flex-col md:flex-row mt-6 justify-between items-center w-full">
                    <label htmlFor="" className=" w-full md:w-[48%] font-Afacad font-medium text-base">
                        Phone Number
                        <input type="text" className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" placeholder="+234" />
                    </label>

                    <label htmlFor="" className=" w-full md:w-[48%] mt-6 md:mt-0 font-Afacad font-medium text-base">
                        Get In Touch With Us
                        <select className=" w-full h-[46px] font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" placeholder="JohnDoe@mail.com">
                            <option value="">Select...</option>
                        </select>
                    </label>
                </div>
                
                <div className=" mt-6">
                    <label htmlFor="" className=" w-full font-Afacad font-medium text-base">
                        Message
                        <textarea name="" placeholder="Hi! We are an AI transcription company..." className="w-full font-Afacad mt-2 border border-[#DAE0E6] p-2.5 rounded-md" id="" cols="30" rows="6"></textarea>
                    </label>
                </div>

                <div className=" mt-4">
                    <label className="flex items-center">
                        <input
                        type="checkbox"
                        className={`form-checkbox h-5 w-5 text-blue-600`}
                        />
                        <span className="ml-2 text-base text-[#000] font-Afacad font-medium">
                        You agree to our friendly privacy policy.
                        </span>
                    </label>
                </div>

                <button className=' mt-6 px-6 py-3 bg-[#78C257] text-white text-center font-Afacad font-semibold text-base rounded-[50px]'>Submit</button>
    
            </div>
        </div>
        <Footer/>
        </>
     );
}
 
export default Contact;