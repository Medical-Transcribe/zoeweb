import Footer from "../components/footer";
import Navbar from "../components/navbar";
import macDir from "./assets/macDir.svg";
import macIns from "./assets/macins1.svg";
import macIns1 from "./assets/macins2.svg";
import maclog from "./assets/maclog.svg";
import windowIns from "./assets/windowIns.svg";
import winIns1 from "./assets/winIns1.svg";
import loginwin from "./assets/loginwin.svg";

const HowToDownload = () => {
  return (
    <>
      <Navbar />
      <div className=" px-4 md:px-20 py-8 md:py-16 w-full bg-[#ECF6E7]">
        <p className=" font-Afacad text-3xl md:text-[64px] font-semibold text-center">
          How to download
        </p>
        <p className=" font-Afacad font-normal text-xl text-center mt-3 md:px-[8%]">
          Step by step process on how to download our app on Window and Mac OS
        </p>
      </div>
      <div className="px-4 md:px-20 py-8 md:py-16">
        <p className=" text-center font-Afacad text-[#000000] font-semibold text-5xl">
          For Mac OS
        </p>

        {/* step 1 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex bg-[#395C29] px-10 h-[500px] rounded-[10px] justify-center items-center">
            <img src={macDir} alt="" />
          </div>
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-black">
              Step 1
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-black">
              Download the Application
            </p>
            <p className=" mt-2 text-[#000000B2] font-Afacad text-base font-normal">
              Navigate to the official website or the App Store link provided
              for the application.
              <br /> Click on the "Download" button to start the download
              process.
              <br /> Save the .dmg file to your preferred location on your Mac.
            </p>
            <button className=" py-4 px-6 bg-[#78C257] shadow-sm rounded-[50px] text-center font-Afacad mt-6 text-white text-base font-semibold">
              Download Now
            </button>
          </div>
        </div>

        {/* step 2 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-black">
              Step 2
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-black">
              Install the Application
            </p>
            <p className=" mt-2 text-[#000000B2] font-Afacad text-base font-normal">
              Open the .dmg file by double-clicking on it.
              <br /> A new window will open showing the application and a link
              to your Applications folder.
              <br />
              Drag the application icon to the Applications folder.
              <br /> Wait for the copy process to complete, then eject the disk
              image by right-clicking and selecting "Eject."
            </p>
          </div>
          <div className=" w-[48%] flex bg-[#395C29] px-10 h-[500px] rounded-[10px] justify-center items-center">
            <img src={macIns} alt="" macIns />
          </div>
        </div>

        {/* step 3 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex bg-[#395C29] px-10 h-[500px] rounded-[10px] justify-center items-center">
            <img src={macIns1} alt="" />
          </div>
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-black">
              Step 3
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-black">
              Activate Accessibility Settings
            </p>
            <p className=" mt-2 text-[#000000B2] font-Afacad text-base font-normal">
              Open System Preferences (you can find this in the Applications
              folder or search for it using Spotlight).
              <br /> Click on "Security & Privacy." <br />
              Go to the "Privacy" tab. Scroll down and select "Accessibility"
              from the list on the left-hand side.
              <br /> Click the lock icon at the bottom left to make changes (you
              may need to enter your administrator password).
              <br /> Check the box next to your application to allow it to
              control your computer. Close System Preferences.
            </p>
          </div>
        </div>

        {/* step 4 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-black">
              Step 4
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-black">
              Launch and Use the Application
            </p>
            <p className=" mt-2 text-[#000000B2] font-Afacad text-base font-normal">
              Open the Applications folder and double-click on the application
              to start it.
              <br /> Follow the on-screen instructions to set up or register the
              application as required.
            </p>
          </div>
          <div className=" w-[48%] flex bg-[#395C29] px-10 h-[500px] rounded-[10px] py-4 justify-center items-center">
            <img src={maclog} alt="" />
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 py-8 md:py-16 bg-[#192C10]">
        <p className=" text-center font-Afacad text-[#FFFFFF] font-semibold text-5xl">
          For Mac OS
        </p>

        {/* step 1 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex h-[500px] rounded-[10px] justify-center items-center">
            <img src={windowIns} className="" alt="" />
          </div>
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-white">
              Step 1
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-white">
              Download the Application
            </p>
            <p className=" mt-2 text-[#fff] font-Afacad text-base font-normal">
              Visit the official website or the direct download link provided.
              <br />
              Click on the "Download" button to download the .exe file.
              <br /> Choose a location to save the file and confirm by clicking
              "Save."
            </p>
            <button className=" py-4 px-6 bg-[#78C257] shadow-sm rounded-[50px] text-center font-Afacad mt-6 text-white text-base font-semibold">
              Download Now
            </button>
          </div>
        </div>

        {/* step 2*/}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-white">
              Step 2
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-white">
              Install the Application
            </p>
            <p className=" mt-2 text-[#fff] font-Afacad text-base font-normal">
              Navigate to the folder where you downloaded the .exe file.
              <br />
              Double-click on the file to start the installation process.
              <br /> Follow the on-screen prompts to install the application.
              <br /> You may need to agree to a license agreement or choose
              installation settings.
              <br />
              Complete the installation and click "Finish."
            </p>
          </div>
          <div className=" w-[48%] flex h-[500px] rounded-[10px] justify-center items-center">
            <img src={winIns1} className="" alt="" />
          </div>
        </div>

        {/* step 3 */}
        <div className=" w-full flex flex-row items-center justify-between mt-12">
          <div className=" w-[48%] flex h-[500px] rounded-[10px] justify-center items-center">
            <img src={loginwin} className="" alt="" />
          </div>
          <div className=" w-[48%] flex flex-col items-start">
            <p className=" font-Afacad text-xl font-medium text-white">
              Step 3
            </p>
            <p className=" font-Afacad text-2xl font-semibold text-white">
              Launch and Use the Application
            </p>
            <p className=" mt-2 text-[#fff] font-Afacad text-base font-normal">
              You can find the application by searching for it in the Start menu
              or navigating to the folder where it was installed.
              <br /> Double-click the application icon to open it.
              <br /> Complete any setup or registration steps as directed by the
              application.
            </p>
          </div>
        </div>
      </div>

      <div className="px-4 md:px-20 py-8 md:py-16">
        <p className=" font-Afacad text-black font-semibold text-3xl">
          Additional Tips
        </p>
        <div className=" mt-3">
          <span className=" flex flex-row items-start space-x-1 font-Afacad text-base font-normal text-black">
            <p>1.</p>
            <p className=" ">
              Ensure that your system meets the minimum requirements for the
              application.
            </p>
          </span>
          <span className=" flex flex-row items-start space-x-1 font-Afacad text-base font-normal text-black">
            <p>2.</p>
            <p className=" ">
              Always download software from official or trusted sources to avoid
              malware.
            </p>
          </span>
          <span className=" flex flex-row items-start space-x-1 font-Afacad text-base font-normal text-black">
            <p>3.</p>
            <p className=" ">
              Keep your application updated to the latest version to ensure
              compatibility and security.
            </p>
          </span>
          <span className=" flex flex-row items-start space-x-1 font-Afacad text-base font-normal text-black">
            <p>4.</p>
            <p className=" ">
              This guide provides a general outline for downloading and
              installing an application on both macOS and Windows. Adjust the
              instructions based on your specific application's requirements,
              especially for steps involving software registration or
              additional configuration.
            </p>
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HowToDownload;
