import React, { useState, useEffect } from "react";
import Datepicker from "react-tailwindcss-datepicker";
import axios from 'axios';
import { Radio, Typography } from "@material-tailwind/react";
import TradeDetails from "./TradeDetails"; // Import TradeDetails component
import DailyPlreport from "./DailyPlreport";
import moment from 'moment'; // Import moment for date formatting
import Chart from 'chart.js/auto';
const RightDiv = () => {
  
  const [fetchedData, setFetchedData] = useState(null); // State to store fetched data
  const [displayDefault,setDisplaydefault]=useState(false);
  const [value, setValue] = useState({
    startDate: "Enter start date",
    endDate: "Enter End date"
  });
  const [selectedReport, setSelectedReport] = useState('fixmargin');
  const [selectedType,setSelectedType] = useState('');
  const [showDailyPL, setShowDailyPL] = useState(true); // Set to true initially
  const [totalTrades,setTotalTrades]=useState('-');
  const [positive,setPositive]=useState('-');
  const [negative,setNegative]=useState('-');
  const [winRate,setWinRate]=useState(0);
  const [sumofProfits,setSumOfProfits]=useState(0);
  const [sumOfLosses,setSumOfLosses]=useState(0);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);
  const [totalPoints,setTotalPoints]=useState(0);
  const [roi,SetRoi]=useState('-');
  const [percentPoints,setPercentPoints]=useState('-');
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/trendreport");
        const data = await response.json();
        setFetchedData(data[0]);
        console.log(data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle error if needed
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (fetchedData) {
      calculateAndDisplayResults(fetchedData);
    }
  }, [fetchedData]);

  useEffect(() => {
    // Check conditions for showing DailyPL component
    const shouldShowDailyPL = !(selectedType && selectedReport && fetchedData);
    setShowDailyPL(shouldShowDailyPL);
  }, [selectedType, selectedReport, fetchedData]);




// FUNCTION FOR CALCULATING NO OF TRADES,+TRADES,-TRADES,WIN RATE,ROI,POINTS GAIN,TOTAL PL AND TOTAL POINTS GAIN
// THIS FUNCTION IS CALLED FURTHER IN sendDatesToBackend FUNCTION IN BOTH IF AND ELSE CONDITION
  const calculateAndDisplayResults = (trades) => {
    const numberOfTrades = trades ? trades.length : 0;
    setTotalTrades(numberOfTrades);
    let total = 0;
  let positivePoints = 0;
  let negativePoints = 0;
  let totalPoints = 0;

  if (Array.isArray(trades)) {
    trades.forEach((item) => {
      if (item && typeof item["PROFIT/LOSS"] === "number") {
        total += item["PROFIT/LOSS"];
      }
    });

    trades.forEach((item) => {
      if (item && typeof item["POINTS GAIN"] === "number") {
        totalPoints += item["POINTS GAIN"];
      }
      if (item["POINTS GAIN"] >= 0) {
        positivePoints += item["PROFIT/LOSS"];
      }
      if (item["POINTS GAIN"] < 0) {
        negativePoints += item["PROFIT/LOSS"];
      }
    });

    let result =
      ((positivePoints - Math.abs(negativePoints)) /
        (positivePoints + Math.abs(negativePoints))) *
      100;
    setPercentPoints(result);
    setTotalPoints(totalPoints);
    // Set the total Profit/Loss
    setTotalProfitLoss(total);
  }





    let positiveTrades = 0;
    let negativeTrades = 0;
    trades.forEach(trade => {
      if (trade['PROFIT/LOSS'] >= 0) {
        positiveTrades++;
      } else if (trade['PROFIT/LOSS'] < 0) {
        negativeTrades++;
      }
    });
  
    let sumOfProfits = 0;
    let sumOfLosses = 0;
    trades.forEach(trade => {
      const profitLoss = trade['PROFIT/LOSS'];
      if (profitLoss >= 0) {
        sumOfProfits += profitLoss;
      } else {
        sumOfLosses += profitLoss;
      }
    });
  
    setSumOfProfits(sumOfProfits);
    setSumOfLosses(sumOfLosses);
  
    const ROI = (total / 100000) * 100;
    SetRoi(ROI);
  
    const winRateVal = (positiveTrades / numberOfTrades) * 100;
    setWinRate(winRateVal);
  
    setPositive(positiveTrades);
    setNegative(negativeTrades);
  
    console.log("Number of trades:", numberOfTrades);
    console.log('Positive trades:', positiveTrades);
    console.log('Negative trades:', negativeTrades);
    console.log('Total Points: ',totalPoints);
    console.log('Total Profit/Loss:', sumOfProfits + sumOfLosses);
    console.log('ROI:', ROI);
    console.log('Win Rate:', winRateVal);
  };

// FUNCTION FOR FETCHING PL REPORT AND PL TREND
// IF CONDITION IS FOR REPORT AND ELSE IS FOR TREND
  const sendDatesToBackend = async () => {
    if(selectedType==='PL_REPORT')
    {
      try {
        let endpoint = '';
  
        // Set the endpoint based on the selected report type
        if (selectedReport === 'fixmargin') {
          endpoint = 'http://localhost:5000/fixmargin';
        } else if (selectedReport === 'fixlot') {
          endpoint = 'http://localhost:5000/fixlot';
        } else if (selectedReport === 'cumilative') {
          endpoint = 'http://localhost:5000/cumilative';
        }
  
        const response = await axios.get(endpoint, {
          params: {
            fromDt: value.startDate,
            toDt: value.endDate
          }
        });
  
        // Store the fetched data in state
        setFetchedData(response.data[0]);
        calculateAndDisplayResults(response.data[0]);

  
      
      } catch (error) {
        console.error('Error fetching data from backend:', error);
      }
    }
  else if(selectedType==='TREND')
  {
  //  alert("trend is selected")
  // setFetchedData(data);
   try {
    let endpoint = '';

    // Set the endpoint based on the selected report type
    if (selectedReport === 'fixmargin') {
      endpoint = 'http://localhost:5000/fixmargin_chart';
    } else if (selectedReport === 'fixlot') {
      endpoint = 'http://localhost:5000/fixlot_chart';
    } else if (selectedReport === 'cumilative') {
      endpoint = 'http://localhost:5000/cumilative_chart';
    }

    const response = await axios.get(endpoint, {
      params: {
        fromDt: value.startDate,
        toDt: value.endDate
      }
    });
    const data = response.data; // Axios automatically parses JSON
    setFetchedData(data); // Set the actual data

    console.log(data);
    // console.log(response.data);
    calculateAndDisplayResults(data);
    const pointsGainData = data.map(item => item['POINTS GAIN']);
    const profitLossData = data.map(item => item['PROFIT/LOSS']);

    createChart(profitLossData, pointsGainData);

   

    console.log("points Gain Data: ", pointsGainData);
    console.log("Profit Loss: ", profitLossData);

  } catch (error) {
    console.error('Error fetching data:', error);
  }

  }
  };

 

  
  const createChart = (profitLossData, pointsGainData) => {
    const ctx = document.getElementById('profitLossChart').getContext('2d');
  
    // Get the existing chart instance
    const existingChart = Chart.getChart(ctx);
  
    // If an existing chart instance is found, destroy it
    if (existingChart) {
      existingChart.destroy();
    }
  
    // Create the new chart instance
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: profitLossData.map((_, index) => `Trade ${index + 1}`),
        datasets: [
          {
            data: profitLossData,
            backgroundColor: profitLossData.map(value => value > 0 ? '#00B000' : '#FF0000'), // Use hex color codes
            borderColor: 'rgba(255, 255, 255, 1)',
            borderWidth: 1,
            label: 'Profit/Loss'
          },
        ]
      },
      options: {
        scales: {
          x: {
            beginAtZero: false,
            grid: {
              color: 'white', // Set x-axis grid color to white
            },
            ticks: {
              color: 'white', // Set x-axis ticks color to white
            },
          },
          y: {
            beginAtZero: false,
            grid: {
              color: 'gray', // Set y-axis grid color to white
            },
            ticks: {
              color: 'white',
              stepSize: 1000,
              suggestedMin: Math.floor(Math.min(...profitLossData, ...pointsGainData) / 1000) * 1000 - 1000,
              suggestedMax: Math.ceil(Math.max(...profitLossData, ...pointsGainData) / 1000) * 1000 + 1000,
            }
          }
        },
        plugins: {
          tooltip: {
            backgroundColor: 'white', // Set tooltip background color to white
            titleColor: 'black', // Set tooltip title text color to black
            bodyColor: 'black', // Set tooltip body text color to black
          }
        },
        legend: null
          
        
  
      }
    });
  };
  








  return (
    <div className="w-full h-full flex flex-col  ">
      {/* ... (Datepicker and Radio buttons code remains unchanged) ... */}
      <div className='  w-full px-1 flex lg:flex-row flex-col  justify-between '>
        <div className="flex flex-row ">
        <Radio 
        name="group1" 
      value="PL_REPORT"
      checked={selectedType === 'PL_REPORT'}
      onChange={() => setSelectedType('PL_REPORT')}
      label={
        <Typography color='white' className='font-medium'>
          P&L REPORT
        </Typography>
      }
className="text-orange-600 border-orange-400 focus:ring-orange-500 "
    /> 
    <Radio 
      name="group1" 
      value="TREND" 
      checked={selectedType === 'TREND'}
      onChange={() => setSelectedType('TREND')}
      label={
        <Typography color='white' className='font-medium'>
         TREND
        </Typography>
      }
      className="text-orange-600 border-orange-400 focus:ring-orange-500  "

     
    /> 




        </div>
     

<div className="flex md:gap-4">
<Radio 
    name="reportType" 
    value="fixmargin" 
    checked={selectedReport === 'fixmargin'}
    onChange={() => setSelectedReport('fixmargin')}
    label={<Typography className="font-medium text-white">FIXEDMARGIN</Typography>}
    className=" text-orange-600 border-orange-400 focus:ring-orange-500 "
  />
  <Radio 
    name="reportType" 
    value="fixlot" 
    checked={selectedReport === 'fixlot'}
    onChange={() => setSelectedReport('fixlot')}
    label={<Typography className="font-medium text-white">FIXEDLOT</Typography>}
    className="text-orange-600 border-orange-400 focus:ring-orange-500 "
  />
  <Radio 
    name="reportType" 
    value="cummulative"
    checked={selectedReport === 'cumilative'}
    onChange={() => setSelectedReport('cumilative')}
    label={<Typography className="font-medium text-white">CUMILATIVE</Typography>}
    className="text-orange-600 border-orange-400 focus:ring-orange-500"
  />
</div>


  </div>
     
      <div className="flex gap-4 px-1 items-center ">
      <Datepicker
        primaryColor={"indigo"}
        value={value}
        onChange={handleValueChange}
        showShortcuts={true}
        placeholder={"Enter the start and End Date"}
        showFooter={true}
      />
      <button 
        onClick={sendDatesToBackend} 
        className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded ">
        Fetch
      </button>
      <button
      onClick={()=>setFetchedData(false)}          
      className="bg-transparent hover:bg-orange-500 text-orange-700 font-semibold hover:text-white py-2 px-4 border border-orange-500 hover:border-transparent rounded ">
                Close
                </button>
      </div>
      
<div>
     {/* Display TradeDetails component with fetched data */}


     {showDailyPL && <DailyPlreport />}



     {selectedType === 'PL_REPORT' && selectedReport &&  fetchedData ? (
        <div className="mt-4 p-4 max-h-[62vh] overflow-y-auto ">
       
          <TradeDetails tradeData={fetchedData} /> 
        </div>
      ) : (
null
      )}

{selectedType === 'TREND' && selectedReport &&  fetchedData ? 
(
  <div className={`relative h-40vw w-80vw`}>
  <canvas id="profitLossChart"></canvas>
</div>
) : (

null


) }

</div>
<div className="w-full h-44 bg-[#1d1e22] rounded-xl mt-1">
<div className=" h-4/5	text-white grid grid-rows-3 grid-flow-col gap-2 p-7">

<div className="md:text-xl">
<h2>No. of Trades : {totalTrades}</h2>

 </div>
 <div className="md:text-xl">
 <h2>+ Trades : {positive}</h2>

 </div>
 <div className="md:text-xl">
 <h2>- Trades : {negative}</h2>

 </div>
 <div className="md:text-xl">
 <h2>Win Rate% : {(winRate).toFixed(2)} %</h2>

 </div>

<div className="md:text-xl">
  <h2>% Points Gain : {typeof percentPoints === 'number' ? percentPoints.toFixed(2)  : 'N/A'} %</h2>
</div>


    
    <div className="md:text-xl">
  <h2>ROI : {(Math.floor(roi * 100) / 100).toFixed(2)} %</h2>
</div>

</div>
<div className="h-1/5 w-full flex md:px-7">
    <div className="flex w-full">
    <div className="flex w-1/2">
    <div className='md:text-xl text-white mr-1'>TOTAL P&L: </div>
<div>
 <p className={`md:text-xl font-bold ${totalProfitLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>
  {/* {tradeHistory !== null ? tradeHistory : 'Loading...'} */}
  {totalProfitLoss.toFixed(2) } ₹
  </p> 

</div>
    </div>

    <div className="flex w-1/2">
<div className='md:text-xl text-white  mr-1'>TOTAL Points :  </div>
<div>
 <p className={`md:text-xl font-bold ${totalProfitLoss < 0 ? 'text-red-500' : 'text-green-500'}`}>
  {/* {tradeHistory !== null ? tradeHistory : 'Loading...'} */}
  {totalPoints.toFixed(2) }
  </p> 

</div>
</div>
    </div>
    
  

 
 </div>

 
</div>



 


    </div>
  );
};

export default RightDiv;
