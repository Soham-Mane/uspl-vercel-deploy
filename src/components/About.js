import React from 'react'

const About = () => {
  return (
    <div className="w-[92vw]  mx-auto py-[4rem] sm:w-[85vw] sm:px-[4rem]  mt-4 sm:mt-0 rounded-3xl bg-[#E1DDF6] 	">
      <div className=' min-h-fit p-5 '>
           <h6 className="text-[1.28rem] leading-[2.2rem] text-center text-tabspara mb-[1.8rem] max-xl:pb-4 text-slate-600 ">USPL Overview</h6>
           <div className="xl:text-center text-left aos-init aos-animate w-60% mx-auto bg-pink sm:w-full  flex flex-col gap-5"  >
            <h3 className='text-4xl font-bold	decoration-solid	'>We Buy Greed & Fear and Sell Gain & Profits</h3>
            <p className='text-lg text-slate-600'>MOTA's advanced technology analyzes real-time data and executes orders automatically, helping traders stay ahead of the market
            <span><br /></span>
            With our smart algorithms and user-friendly app, you can make automated decisions for entering and exiting trades, ensuring quick and effortless trading. Stay stress-free with USPL's MOTA App.
            </p>
           </div>
      </div>
    </div>
    
  )
}

export default About
