import React,{useState,useEffect,useRef } from 'react'
import axios from 'axios';
import god from "../images/WhatsApp Image 2024-01-20 at 10.39.45.jpeg"
import { Radio, Typography } from "@material-tailwind/react";
import smallLogo from '../images/Screenshot 2023-12-14 114040.png';
import dropdown from '../images/caret-down-solid.svg';
import  io   from 'socket.io-client';
import Date from './Date';
import TradeDetails from './TradeDetails';
import RightDiv from './RightDiv';
import LogoutModal from './LogoutModal';
const TradingDashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tradeData, setTradeData] = useState(null);
  const [error, setError] = useState(null);
  const [showData,setShowData]=useState(false);
  const [tradeHistory, setTradeHistory] = useState(null);
  const [selectedReport, setSelectedReport] = useState('fixmargin'); // Default selected report
  const [results, setResults] = useState(null);
  const [liveData,setLiveData]=useState(null);
  const [liveTrade,setLiveTrade]=useState(null);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);
  const [totalPoints,setTotalPoints]=useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
//   // TODAY'S TRADE HISTORY REPORT (FIXMARGIN)
//   useEffect(() => {
//     // Function to fetch data from the Node.js endpoint
//     const fetchTradeData = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/trendreport');
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }
        
//         const data = await response.json();
//         setTradeData(data[0]);
// console.log(data[0]);
//         let total = 0;
//         let totalPoints=0;
//         if (Array.isArray(data[0])) {
//           data[0].forEach(item => {
//             // Ensure that the item contains PROFIT/LOSS and it's a number
//             if (item && typeof item["PROFIT/LOSS"] === 'number') {
//               total += item["PROFIT/LOSS"];
//             }
//           });
//         }
//         if (Array.isArray(data[0])) {
//           data[0].forEach(item => {
//             // Ensure that the item contains PROFIT/LOSS and it's a number
//             if (item && typeof item["POINTS GAIN"] === 'number') {
//               totalPoints += item["POINTS GAIN"];
//             }
//           });
//         }
//         setTotalPoints(totalPoints)
//         // Set the total Profit/Loss
//         setTotalProfitLoss(total);
//         console.log("Total Profit/Loss:", total);


//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     // Call the fetch function
//     fetchTradeData();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts

 
useEffect(() => {
  // Function to fetch data from the Node.js endpoint
  const fetchTradeData = async () => {
    try {
      const response = await fetch('http://localhost:5000/trendreport');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const data = await response.json();
      console.log(data);
      setTradeData(data[0]);

      let total = 0;
      let totalPoints = 0;
      if (Array.isArray(data[0])) {
        data[0].forEach(item => {
          if (item && typeof item["PROFIT/LOSS"] === 'number') {
            total += item["PROFIT/LOSS"];
          }
          if (item && typeof item["POINTS GAIN"] === 'number') {
            totalPoints += item["POINTS GAIN"];
          }
        });
      }
      
      setTotalPoints(totalPoints);
      setTotalProfitLoss(total);
      
    } catch (err) {
      setError(err.message);
    }
  };

  // Call the fetch function
  fetchTradeData();
}, []);







// LIVE BANK NIFTY ,DIFF AND PERCENTAGE DATA AND LIVE TRADE
useEffect(() => {
  // Connect to the proxy server running on localhost:5000
  const socket = io('http://localhost:5000');

  socket.on('connect', () => {
    console.log('Connected to proxy server');
  });

  // Listen for 'dataReceived' event from the proxy server
  socket.on('dataReceived', (message) => {
    if (message.Symbol === 'NIFTY BANK') {
      console.log(message);
      console.log(message.Price); // Log the price value
      setLiveData(message);
    }
  });

  socket.on('traded_optionsV2',(message) =>{
    // console.log(message);
    setLiveTrade(message);
  })

  // Clean up the socket connection when the component unmounts
  return () => {
    socket.disconnect();
  };
}, []);

if (error) {
  return <div>Error: {error}</div>;
}

const toggleHistory=()=>{
  setShowData(prevState=>!prevState);
  console.log(tradeData);
  setIsOpen(!isOpen);
}
  return (
    <div className='w-full h-screen	  sm:w-full sm:px-[4rem]  mt-4 sm:mt-0 bg-black  overflow-x-hidden '>
<LogoutModal isOpen={isModalOpen} onClose={toggleModal} />

      <div className='w-full h-16   flex flex-col md:flex-row   ' >
        
      <div className=' lg:w-16 lg:h-16 flex justify-between'>
          <img src={smallLogo} className='w-16 h-16 ' alt="" />
          <img src={god} className='w-16 h-16 lg:hidden' alt="" />

        </div>
        <div className='flex flex-col justify-between  w-5/6 h-16 lg:text-2xl '>
  {liveData ? (

<div className='w-full md:h-full  flex p-1  md:space-x-4 space-x-2  md:ml-3 '>


<div className='flex-1  flex flex-row '>

<p className='text-sm md:text-2xl text-white font-bold'>BANK NIFTY: </p>
<p  className={`text-center font-bold md:ml-7 ml-4 ${liveData.Price - liveData.ohlc.open < 0 ? 'text-red-600' : 'text-green-600'}`}> 
{liveData.Price}
 </p>
</div>


<div className='flex-1  flex flex-row ' >

  <p className='md:text-2xl text-white font-bold'>DIFF: </p>
  <p className={`text-center font-bold md:ml-7 ml-4 ${liveData.Price - liveData.ohlc.open < 0 ? 'text-red-600' : 'text-green-600'}`}>   {(liveData.Price - liveData.ohlc.open).toFixed(1)}
  </p>
</div>


<div className='flex-1  flex flex-row'>

  <p className='md:text-2xl text-white font-bold'>PERCENT%: </p>
    <p className={`text-center font-bold  md:ml-7  ml-4 ${liveData.Price - liveData.ohlc.open < 0 ? 'text-red-600' : 'text-green-600'}`}>
        
     {(((liveData.Price - liveData.ohlc.open) / liveData.ohlc.open) * 100).toFixed(1)}
    </p>
</div>

</div>
  ) : 
  (

<div className='w-full h-full  flex p-1  space-x-4  ml-3'>


<div className='flex-1  flex flex-row '>

<p className='text-2xl text-white font-bold'>BANK NIFTY: </p>

</div>


<div className='flex-1  '>

  <p className='text-2xl text-white font-bold'>DIFF: </p>
</div>


<div className='flex-1  '>
 
  <p className='text-2xl text-white font-bold'>PERCENT%: </p>
</div>

</div>

  )
  }
   
        </div>
          
        <div className='w-16 h-16 ml-auto hidden md:block '>
          {/* <img src={smallLogo} className='w-full h-full ' alt="" /> */}
          <img src={god} className='w-16 h-16 ' alt="" />

        </div>
    <div className='hidden lg:flex ml-auto flex items-center  justify-end'>
      
    <button 
  onClick={toggleModal}
  className="bg-black h-10 hover:bg-gray-700 text-white  font-bold py-2 px-4 rounded flex items-center space-x-2 border-white hover:border-gray-700"
>
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className="h-6 w-6" 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M10 19l-7-7m0 0l7-7m-7 7h18" 
    />
  </svg>
  Back
</button>




    </div>
  



      </div>


{/* TODAY'S TRADE HISTORY AND P&L REPORT */}
<div className='w-full h-full  flex flex-col lg:flex-row lg:mt-4 mt-14  '>
  {/* LEFT DIV */}  
  <div
  className='lg:w-2/6 h-full	 flex flex-col gap-2 mr-2 '>
  <div className='w-full h-56 p-2 rounded-xl shadow-lg border border-gray-200 overflow-y-hidden bg-white'>
  {!liveTrade ? (
    <div className="flex items-center justify-center h-full text-4xl font-bold text-gray-400">
      No Live Trade Available
    </div>
  ) : (
<>
<div className="mb-4 lg:h-fit text-3xl  font-bold text-center text-gray-800">📈 Trade Details 📉</div>
<p className="mb-2 font-bold text-xl ml-2"><span className="font-semibold text-xl text-blue-600">Symbol:</span> {liveTrade.Symbol}</p>

      <div className="grid grid-cols-2 md:gap-2 text-lg text-gray-700 md:p-2">
        <div>
        <p className="mb-2"><span className="font-semibold md:text-xl text-blue-600">Order Number:</span> {liveTrade.count}</p>
        <p className="mb-2"><span className="font-semibold md:text-xl text-blue-600">Entry Price:</span> {liveTrade.EntryPrice}</p>
          <p className="mb-2"><span className="font-semibold md:text-xl text-blue-600">Profit Gain:</span> {(liveTrade.Price - liveTrade.EntryPrice).toFixed(2)}</p>
        </div>
        <div>
        <p className="mb-2"><span className="font-semibold md:text-xl text-blue-600">Quantity:</span> {Math.floor(100000 / 15 / liveTrade.EntryPrice)}</p>
          <p className="mb-2 "><span className="font-semibold md:text-xl text-blue-600">Current Price:</span> {liveTrade.Price}</p>
          <p className="mb-2"><span className="font-semibold md:text-xl text-blue-600">Profit Loss:</span> {((liveTrade.Price - liveTrade.EntryPrice) * 45).toFixed(2)}</p>
        </div>
      </div>
</>
  )}
</div>


 

 <div className='md:h-3/5 h-1/2 w-full overflow-scroll'>
 {tradeData ?(
  <TradeDetails tradeData={tradeData}/>

 ) :
 (
  <p>Loading...</p>
 )
 }
 </div>




<div className='w-full h-12 rounded-lg bg-[#1d1e22]	justify-between flex p-3'>
  <div className='flex  items-center'>
  <div className='text-sm md:text-lg font-bold  text-white mr-1'>TOTAL P&L : </div>
<div>
 <p className={`md:text-xl font-bold ${totalProfitLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>
  {/* {tradeHistory !== null ? tradeHistory : 'Loading...'} */}
  {totalProfitLoss.toFixed(2) } ₹
  </p> 

</div>
  </div>
<div className='flex items-center'>
<div className='text-sm md:text-lg font-bold mr-1 text-white'>TOTAL Points : </div>
<div>
 <p className={`md:text-xl font-bold ${totalProfitLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>
  {/* {tradeHistory !== null ? tradeHistory : 'Loading...'} */}
  {totalPoints.toFixed(2) }
  </p> 

</div>
</div>



</div>



  </div>
{/* RIGHT DIV */}
    <div className='lg:w-3/4 h-full flex flex-col  gap-10	  '>  
   <RightDiv/>
  </div>

</div>






    </div>
  )
}

export default TradingDashboard;
