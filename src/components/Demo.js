import React from 'react'
import { Link } from 'react-router-dom';

const Next = () => {
  return (
    <div className="w-[92vw]  mx-auto py-[4rem] sm:w-[85vw] sm:px-[3rem] my-20 rounded-3xl bg-[#E1DDF6]">
    <div className=' min-h-fit '>
         <div className="xl:text-center text-left aos-init aos-animate w-60% mx-auto bg-pink sm:w-full  flex flex-col items-center gap-8 p-5 "  >
        <h3 className='text-3xl font-medium text-center	'>We offer cloud server services for hosting your <span className='text-[#7E22CE]'>algorithmic logic </span>
        <span>
          <br />
        </span>
        and automating trading   directly from your demat account.
         </h3>
         <Link to='/pricing'>
         {/* <button className='bg-black flex  rounded-full w-fit text-2xl text-white px-6 py-3 font-medium hover:bg-purple-700	'>USPL CHARGES
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
</svg>

         </button> */}

<button className='bg-[#51087E] flex items-center rounded-full text-2xl text-white px-6 py-3 font-medium hover:bg-purple-700'>
  <span>USPL CHARGES</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 ml-2">
    <path fillRule="evenodd" d="M3.75 12a.75.75 0 01.75-.75h13.19l-5.47-5.47a.75.75 0 011.06-1.06l6.75 6.75a.75.75 0 010 1.06l-6.75 6.75a.75.75 0 11-1.06-1.06l5.47-5.47H4.5a.75.75 0 01-.75-.75z" clipRule="evenodd" />
  </svg>
</button>

         </Link>
    
         </div>
    </div>
  </div>
  )
}

export default Next
