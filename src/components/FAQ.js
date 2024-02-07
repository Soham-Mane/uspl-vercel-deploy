import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openSections, setOpenSections] = useState([]);

  const toggleSection = (val) => {
    setOpenSections((prevSections) => {
      if (prevSections.includes(val)) {
        return prevSections.filter((section) => section !== val);
      } else {
        return [...prevSections, val];
      }
    });
  };

  return (
    <>
       <div className='w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] mb-12'>
<div className="2xl:container 2xl:mx-auto md:py-12  md:px-6 py-9 px-4">
      <h2 className="text-3xl font-bold dark:text-white lg:text-5xl lg:leading-9 md:leading-7 leading-9 text-gray-800">Frequently Asked Questions</h2>
      <div className="mt-4 flex md:justify-between md:items-start md:flex-row flex-col justify-start items-start">
        <div>
          <p className=" mt-4 font-normal dark:text-gray-400 text-lg leading-6 text-gray-600 lg:w-8/12 md:w-9/12">Here are few of the most frequently asked questions by our valuable traders</p>
        </div>

      </div>
      <div className="flex md:flex-row flex-col md:space-x-8 md:mt-16 mt-8">
        <div className="md:w-5/12 lg:w-4/12 w-full">
        <Link to="/contact">
        <button className='bg-black flex  rounded-full w-fit text-xl text-white px-6 py-3 font-medium hover:bg-purple-700	'>Contact
         </button>
        </Link>
     
        </div>       
        <div className="md:w-7/12 lg:w-8/12 w-full md:mt-0 sm:mt-14 mt-10">
          {/* Shipping Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">How to use MOTA APP</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(1)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path1" className={openSections.includes(1) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para1" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(1) ? "block" : "hidden"}`}>
            Open a demat account with brokers like Zerodha, Edelweiss, Kotak Securities, Alice Blue, or Shoonya.
Trading limitations range from 1 lakh to 10 lakhs, and 100% of your amount will be utilized for trading.
On the trading day, log in to the MOTA App between 7:30 am and 9:15 am, providing OTP for authentication.
Once your demat account is open, share API details with our support team for setting up the USPL MOTA Application on your mobile or desktop.
The MOTA App will autonomously execute buying and selling orders based on your algorithm.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Returns Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">How to check your Profit and Loss</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(2)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path2" className={openSections.includes(2) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para2" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(2) ? "block" : "hidden"}`}>
            To review your profit and loss details, log in to your demat account using your login credentials.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Exchange Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">How to withdraw profit and deposit from your Demat Account</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(3)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path3" className={openSections.includes(3) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para3" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(3) ? "block" : "hidden"}`}>
            Your bank account details are already connected to your demat account, enabling you to effortlessly withdraw profits or deposit funds. We recommend utilizing UPI payments for these transactions.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />

          {/* Tracking Section */}
          <div>
            <div className="flex justify-between items-center cursor-pointer">
              <h3 className="font-semibold text-xl dark:text-white leading-5 text-gray-800">How to get Notification of App</h3>
              <button
                aria-label="toggle"
                className="text-gray-800 dark:text-white cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                onClick={() => toggleSection(4)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path id="path4" className={openSections.includes(4) ? "hidden" : ""} d="M10 4.1665V15.8332" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M4.16602 10H15.8327" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </button>
            </div>
            <p id="para4" className={`font-normal dark:text-gray-400 text-base leading-6 text-gray-600 mt-4 w-11/12 ${openSections.includes(4) ? "block" : "hidden"}`}>
            Ensure you use the same email ID and mobile number used during the registration for the MOTA App. Consequently, notifications will be sent for daily trading activities.
            </p>
          </div>

          <hr className="my-7 bg-gray-200" />
        </div>
      </div>
    </div>
    </div>


    
    </>
 


    
  );
};

export default FAQ;
