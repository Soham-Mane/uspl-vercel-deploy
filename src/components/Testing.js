// import React, { useEffect, useState } from 'react';
// import Datepicker from "react-tailwindcss-datepicker";
// import axios from 'axios';
// import Chart from 'chart.js/auto';
// import moment from 'moment';
// import { Radio, Typography } from "@material-tailwind/react";
// import 'chartjs-plugin-zoom';


// const Testing = () => {
//   const [chartData, setChartData] = useState(null);
//   const [selectedRadio, setSelectedRadio] = useState("fixmargin");
//   const [value, setValue] = useState({
//     startDate: "Enter start date",
//     endDate: "Enter End date"
//   });
//   const handleValueChange = (newValue) => {
//     setValue(newValue);
//     console.log(newValue);
//   };
//     const fetchData = async () => {
//       try {
//         let endpoint = '';
  
//         // Set the endpoint based on the selected report type
//         if (selectedRadio === 'fixmargin') {
//           endpoint = 'http://localhost:5000/fixmargin_chart';
//         } else if (selectedRadio === 'fixlot') {
//           endpoint = 'http://localhost:5000/fixlot_chart';
//         } else if (selectedRadio === 'cumilative') {
//           endpoint = 'http://localhost:5000/cumilative_chart';
//         }
  
//         const response = await axios.get(endpoint, {
//           params: {
//             fromDt: value.startDate,
//             toDt: value.endDate
//           }
//         });
//         const data = response.data; // Axios automatically parses JSON

//         console.log(data);
//         // console.log(response.data);

//         const pointsGainData = data.map(item => item['POINTS GAIN']);
//         const profitLossData = data.map(item => item['PROFIT/LOSS']);

//         createChart(profitLossData, pointsGainData);

       

//         console.log("points Gain Data: ", pointsGainData);
//         console.log("Profit Loss: ", profitLossData);

//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

   
//     const createChart = (profitLossData, pointsGainData) => {
//       const ctx = document.getElementById('profitLossChart').getContext('2d');
    
//       // Get the existing chart instance
//       const existingChart = Chart.getChart(ctx);
    
//       // If an existing chart instance is found, destroy it
//       if (existingChart) {
//         existingChart.destroy();
//       }
    
//       // Create the new chart instance with zoom options
//       new Chart(ctx, {
//         type: 'bar',
//         data: {
//           labels: profitLossData.map((_, index) => `Trade ${index + 1}`),
//           datasets: [
//             {
//               label: 'Profit/Loss',
//               data: profitLossData,
//               backgroundColor: profitLossData.map(value => value > 0 ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 99, 132, 0.2)'),
//               // borderColor: 'rgba(75, 192, 192, 1)',
//               borderWidth: 1
//             },
//           ]
//         },
//         options: {
//           scales: {
//             y: {
//               beginAtZero: false,
//               ticks: {
//                 color: 'white',
//                 stepSize: 1000,
//                 suggestedMin: Math.floor(Math.min(...profitLossData, ...pointsGainData) / 1000) * 1000 - 1000,
//                 suggestedMax: Math.ceil(Math.max(...profitLossData, ...pointsGainData) / 1000) * 1000 + 1000,
//               }
//             }
//           },
//    plugins: {
//     zoom: {
//       zoom: {
//         wheel: {
//           enabled: true
//         }
//       }
//     }
//    }
//         },
//       });
//     };
    

//   return (
//     <div>
//       <h1>This is soham,</h1>
//       <Radio 
//   name="reportType" 
//   value="fixmargin" 
//   checked={selectedRadio === 'fixmargin'}
//   onChange={() => setSelectedRadio('fixmargin')}
//   label={<Typography className="font-medium text-black">fixmargin</Typography>}
//   className="focus:ring-8 focus:ring-orange "
// />
// {/* Similar radio buttons for fixlot and cumilative */}
// <Radio 
//   name="reportType" 
//   value="fixlot" 
//   checked={selectedRadio === 'fixlot'}
//   onChange={() => setSelectedRadio('fixlot')}
//   label={<Typography className="font-medium text-black">fixlot</Typography>}
//   className="focus:ring-8 focus:ring-orange "
// />
// {/* Similar radio buttons for fixlot and cumilative */}
// <Radio 
//   name="reportType" 
//   value="cumilative" 
//   checked={selectedRadio === 'cumilative'}
//   onChange={() => setSelectedRadio('cumilative')}
//   label={<Typography className="font-medium text-black">cumilative</Typography>}
//   className="focus:ring-8 focus:ring-orange "
// />
// {/* Similar radio buttons for fixlot and cumilative */}
// <Datepicker
//         primaryColor={"indigo"}
//         value={value}
//         onChange={handleValueChange}
//         showShortcuts={true}
//         placeholder={"Enter the start and End Date"}
//         showFooter={true}
//       />
// <button onClick={fetchData}>Fetch Chart</button>


     
//         <canvas id="profitLossChart" width="800" height="400"></canvas>
    
//     </div>
//   );
// };

// export default Testing;


// import React, { useState, useEffect } from "react";
// import TradeDetails from "./TradeDetails"; // Replace with the correct path to your TradeDetails component
// import { Radio } from "@material-tailwind/react";

// const YourComponent = () => {
//   const [tradeData, setTradeData] = useState(null);
//   const [totalProfitLoss, setTotalProfitLoss] = useState(0);
//   const [totalPoints, setTotalPoints] = useState(0);
//   const [error, setError] = useState(null);
//   const [showData, setShowData] = useState(true); // Set showData to true by default

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

//         let total = 0;
//         let totalPoints = 0;
//         if (Array.isArray(data[0])) {
//           data[0].forEach(item => {
//             if (item && typeof item["PROFIT/LOSS"] === 'number') {
//               total += item["PROFIT/LOSS"];
//             }
//             if (item && typeof item["POINTS GAIN"] === 'number') {
//               totalPoints += item["POINTS GAIN"];
//             }
//           });
//         }
        
//         setTotalPoints(totalPoints);
//         setTotalProfitLoss(total);
        
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     // Call the fetch function
//     fetchTradeData();
//   }, []); // Empty dependency array ensures the effect runs once when the component mounts

//   return (
//     <div>

// <div className="flex w-max gap-4">
//       <Radio name="color" />
//       <Radio name="color" color="gray" defaultChecked />
//       <Radio name="color" color="blue" />
//       <Radio name="color" color="green" />
//       <Radio name="color" color="red" />
//       <Radio name="color" color="amber" />
//       <Radio name="color" disabled color="purple" />
//     </div>

      
//       {/* {showData && tradeData ? (
//         <TradeDetails tradeData={tradeData} />
//       ) : (
//         <p>Loading...</p>
//       )} */}
//     </div>
//   );
// };

// export default YourComponent;
