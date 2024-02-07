import React from 'react';
import { Link } from 'react-router-dom';
import "./Hero.css";
import CountUp from 'react-countup';
import mainImg from '../images/headingImg.jpeg';
import ReactPlayer from 'react-player/lazy';
import VideoPlayer from '../components/VideoPlayer';
import { useState, useRef, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import thumb from '../images/logo.png'
import random from '../images/randomimage.jpeg';
const Hero = ({ thumb, thumbWidth, thumbHeight, video, videoWidth, videoHeight }) => { 
  const [modalOpen, setModalOpen] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current?.play();
  }, [videoRef]);

  return (
  <>
  <div className=' w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] mb-12 '>
    <div className='flex flex-col  justify-around min-h-screen '>
      <div className="flex 	 place-content-between bg-grey items-center xl:flex-row flex-col-reverse  mt-[2.5rem] xl:mt-[6rem] ">
         {/* text left side */}
          <div className=" w-full aos-init aos-animate">
            {/* <h1 className="font-extrabold font-serif text-center leading-[3.9rem] text-[3rem] sm:text-[4rem] sm:leading-[5rem] xl:leading-[6rem] xl:text-[4rem] xl:text-left mt-[5rem] xl:mt-0">Trader Smarter
          <br />
             with MOTA</h1> */}
         <div className='text-center xl:text-left'> 
          <span className='strokeTxt text-5xl font-bold pt-12  '>Empower </span>
          <span className='text-5xl font-bold pt-12 '>Your</span>
         </div>
         <div className='text-center xl:text-left'>
         <span className='text-5xl font-bold pt-12 '>Trading Journey</span>

         </div>
            <h2 className="font-inter mt-3 xl:text-[1.4rem] text-[1.4rem] leading-[2.4rem] text-darksilver  xl:text-left text-center text-slate-500">           
           <span className='text-black font-medium	'>USPL </span> 
          focuses on creating a customized Algo Trading App called MOTA, specifically designed for your options trading needs, especially in the F&O segment. We customize the logic based on your trading preferences to develop a unique intraday options buying strategy using your account.
              </h2>
      
<div className='flex xl:flex-row flex-col mt-5 gap-5'>
     <Link to="/user_demo">
     <button className='xl:w-60  h-12 bg-[#51087E] hover:bg-purple-700	 my-3 w-full rounded-full font-bold text-white'>
          Get Started
        </button>
     </Link>
     
     
   
         <button 
          onClick={() => setModalOpen(true)}
          className="xl:w-60  h-12 bg-[#51087E] hover:bg-purple-700	 my-3 w-full rounded-full font-bold text-white">
          Watch Demo
        </button> 
      
 
      {/* End: Video thumbnail */}
       <div className='relative'>
       <Transition.Root show={modalOpen} className=''>
        <Dialog initialFocus={videoRef} onClose={() => setModalOpen(false)}>
          {/* Modal backdrop */}
          <Transition.Child
            className="fixed inset-0 z-[99999] bg-black bg-opacity-50 transition-opacity"
            enter="transition ease-out duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            aria-hidden="true"
          />
          {/* End: Modal backdrop */}

          {/* Modal dialog */}
          <Transition.Child
            className="fixed inset-0 z-[99999] flex p-6    "
            enter="transition ease-out duration-300"
            enterFrom="opacity-0 scale-75"
            enterTo="opacity-100 scale-100"
            leave="transition ease-out duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-75"
          >
      
          <div className="max-w-5xl mx-auto h-full flex items-center  lg:flex lg:justify-center absolute xl:fixed xl:left-0 xl:right-0">
              <Dialog.Panel className="w-96 min-h-fit sm:w-full sm:max-h-full md:w-full md:max-h-full	 lg:w-full lg:max-h-full w-full max-h-full rounded-3xl shadow-2xl aspect-video  overflow-hidden">
                <video  width="1920" height="1080"  loop controls>
                  <source src={require('../images/demo-video.mp4')} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Dialog.Panel>
            </div>
        
     
            
           
          </Transition.Child>
          {/* End: Modal dialog */}
        </Dialog>
      </Transition.Root>
        </div>      
 







      </div>




          </div>
             {/* image right side */}
          <div className=" xl:w-auto aos-init aos-animate ">
            <img className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300 xl:w-[50rem] mt-[5rem] xl:mt-0" src={mainImg} width="1062" height="702" alt="" />
         
          </div>
      </div>

     {/* GHUMNE WALA COMPANIES DIV */}
{/*     
     <div className='container w-auto h-12 md:h-32 '>
        <div className='grid grid-cols-4 py-5 divide-x divide-slate-700 bg-gradient-to-r from-indigo-500  	 '>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
              <CountUp end={500} suffix='+' duration={2.75}/>
            </h1>
            <h1 className='sm:text-md text-xs md:text-lg'>Clients</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
              <CountUp end={200} suffix='K+' duration={2.75}/>
</h1>
            <h1 className='sm:text-md text-xs md:text-lg'>Subscribers</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
            <CountUp end={234} suffix='+' duration={2.75}/>
            </h1>
            <h1 className='sm:text-md text-xs md:text-lg'>Traders</h1>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl'>
            <CountUp end={56} suffix='+' duration={2.75}/>
            </h1>
            <h1 className='sm:text-md text-xs md:text-lg'>Transactions</h1>
          </div>
        </div>

      </div>   */}
      <div className='h-72  flex justify-center '>
      <img src={random} 
      className='h-72	w-2/4		'
      />      
      </div>
      
    </div>

    

  </div>
  </>
    
  )
}

export default Hero
