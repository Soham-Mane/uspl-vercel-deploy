import React from 'react'
import logo from '../images/logo.png';
import download from '../images/download.png';
import { Link, Element, scroller } from 'react-scroll';
import Microsoft from '../images/microsoft.png';

const Footer = () => {
    const scrollToSection = (section) => {
        scroller.scrollTo(section, {
          duration: 800,
          delay: 0,
          smooth: 'easeInOutQuart',
        });
      };
  return (
    <div className='w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] mb-12'>
      <footer className="px-3 pt-8 lg:px-9 border-t-2 bg-gray-50">
    <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">

        <div className="sm:col-span-2">
            <a href="#" className="inline-flex items-center">
                <img src={logo} alt="logo" className="h-12 w-15"/>
                <span className="ml-2 text-xl font-bold tracking-wide text-[#7E22CE]">ULTIMATE SCALER PRIVATE LIMITED</span>
            </a>
            <div className="mt-6 lg:max-w-xl">
                <p className="text-base text-gray-800">
                Revolutionize your trading with our MOTA Trading software – on mobile and desktop. Our advanced algorithms analyze market data for automated intra-day decisions, helping you make informed choices and maximize profits. Welcome to a new era of efficient and profitable options trading.
                  </p>
            </div>
        </div>

        <div className="flex flex-col gap-2 text-sm">
            <p className="text-lg font-bold tracking-wide text-gray-900">Useful Links</p>
            <a className='text-lg hover:text-purple-700'  href="#">Home</a>
            <a className='text-lg hover:text-purple-700'  href="#">About us</a>
            <a className='text-lg hover:text-purple-700'  href="#">Services</a>
            <a className='text-lg hover:text-purple-700'  href="#">Contact us</a>

        </div>

        <div>
            <p className="text-base font-bold tracking-wide text-gray-900">USPL MOTA APP IS  AVAILABLE ON</p>
            {/* <div className="flex items-center gap-1 px-2">
                <a href="https://play.google.com/store/apps/details?id=com.uspl.uspl&hl=en-IN" className="w-full min-w-xl">
                    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
                        className="h-10"/>
                </a>
                <a className="w-full min-w-xl" href="https://www.youtube.com/channel/UCo8tEi6SrGFP8XG9O0ljFgA">
                    <img src={download} alt="Youtube Button"
                        className="h-10"/>
                </a>
                <a href="">
                    <img src={Microsoft} alt="Microsoft Store" />
                </a>
            </div> */}

<div className="flex items-center gap-1 px-2 w-full">
  <a href="https://play.google.com/store/apps/details?id=com.uspl.uspl&hl=en-IN" className="w-full min-w-xl flex items-center justify-center">
    <img src="https://mcqmate.com/public/images/icons/playstore.svg" alt="Playstore Button"
      className="h-10 w-auto" />
  </a>
  
  <a className="w-full min-w-xl flex items-center justify-center" href="">
    <img src={download} alt=""
      className="h-10 w-auto" />
  </a>
  
  <a href="https://apps.microsoft.com/home?hl=en-gb&gl=US" className="flex items-center justify-center w-full">
    <img src={Microsoft} alt="Microsoft Store"
      className="h-10 w-auto" />
  </a>
</div>



            <p className="text-base font-bold tracking-wide text-gray-900">Contacts</p>
            <div className="flex">
                <p className="mr-1 text-gray-800">Email:</p>
                <a href="#" title="send email">info@usplbot.com</a>
            </div>
        </div>

    </div>

    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-600">© Copyright 2023 Company. All rights reserved.</p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">Privacy
                    &amp; Cookies Policy
                </a>
            </li>
            <li>
                <a href="#"
                    className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-">Design by USPL Team
                </a>
            </li>
        </ul>
    </div>

</footer>
    </div>
  )
}

export default Footer;
