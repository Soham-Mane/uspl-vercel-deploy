import React ,{useState, useEffect} from 'react';
import { Button, Modal } from 'flowbite-react';
import demoImage from "../images/Screenshot 2023-12-14 112726.png";
import shortLogo from "../images/Screenshot 2023-12-14 114040.png";
import { Link } from 'react-router-dom';
const User = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [isChecked,setIsChecked]=useState(false);

  useEffect(() => {
    // Set a timeout to open the modal after 5 seconds
    const timeoutId = setTimeout(() => {
      setShowModal(true);
    }, 4000);

    // Clear the timeout if the component unmounts before the 5 seconds
    return () => clearTimeout(timeoutId);
  }, []);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };


  return (
    <div >
   
      <div className="min-h-screen py-40 bg-gradient-to-r from-indigo-500 "    >
      {/* <div className="container mx-auto bg-white"> */}




        <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">


          <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" >
            {/* <h1 className="text-white text-3xl mb-3">Welcome</h1>
            <div>
              <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-purple-500 font-semibold">Learn more</a></p>
            </div> */}
            <img src={demoImage} alt="" />
          </div>




          <div className="w- lg:w-1/2 py-16   flex flex-col items-center">
            <img src={shortLogo} className="mb-4" alt="" />
            <h2  className="text-2xl mb-4 font-bold	text-center	">Welcome to MOTA-USER DEMO</h2>
            <p className="mb-4 text-1xl font-medium	">
              (My Option Trading App)
            </p>

            <div className="mt-5 mb-5  flex items-center justify-center">
                <input 
                type="checkbox" 
                className="border border-gray-400 mr-2"
                onChange={handleCheckboxChange}
                />
                <span>
                  I accept the 
                  <a   onClick={() => setShowModal(true)} href="#" className="text-purple-500 font-semibold">Terms of Use </a>
                   & 
                    <a onClick={() => setShowModal(true)} href="#" className="text-purple-500 font-semibold"> Conditions</a> 
                </span>
                {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none  "
          >
            <div className="relative w-auto my-6 mx-auto max-w-6xl ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Terms and Conditions
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                  It's important to emphasize the risks associated with investments in the equity Futures and Options (F&O) trading market. Your statement highlights the high level of risk involved, and it's crucial for individuals to fully understand these risks before entering the market. Here's the information in a concise form:
                  <br />
                  Investments in the equity Futures and Options (F&O) trading market carry very high market risks.
                 <br />
                 Statistics suggest that 9 out of 10 individual traders incur losses in this market.
                 <br />
                 Consider these risks carefully before deciding to invest in F&O trading. So please ensure that you fully understand the risks and costs involved.
                 <br />
                 This serves as a clear warning to potential investors to exercise caution and seek professional advice if they are considering entering the F&O market.
                 <br />
                 Trading Futures & Options may not be suitable for everyone and can result in losses that exceed deposits.
                 <br />
                 We collect, retain, and use your contact information for legitimate business purposes only, to contact you and to provide you with information & latest updates regarding our products & services.
                 <br />

                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  {/* <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Decline
                  </button> */}
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                   Accept
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
              </div>
            <Link to="/chart">
     
            <button className='xl:w-80  h-12 bg-[#51087E] hover:bg-purple-700	 m-3 w-full  font-bold text-white' disabled={!isChecked}>
                  Click to Proceed
        </button>
             </Link>


          </div>
        </div>





      </div>
    {/* </div> */}
    

{/* <button data-modal-target="default-modal" data-modal-toggle="default-modal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
  Toggle modal
</button> */}


    </div>
  )
}

export default User
