
import React, { useState, useEffect } from "react";
import TradeDetails from "./TradeDetails"; // Replace with the correct path to your TradeDetails component
import { Radio } from "@material-tailwind/react";

const DailyPlreport = () => {
  const [tradeData, setTradeData] = useState(null);
  const [totalProfitLoss, setTotalProfitLoss] = useState(0);
  const [totalPoints, setTotalPoints] = useState(0);
  const [error, setError] = useState(null);
  const [showData, setShowData] = useState(true); // Set showData to true by default

  useEffect(() => {
    // Function to fetch data from the Node.js endpoint
    const fetchTradeData = async () => {
      try {
        const response = await fetch('http://localhost:5000/trendreport');
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
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
  }, []); // Empty dependency array ensures the effect runs once when the component mounts

  return (
    <div className="mt-4 p-4 max-h-[62vh] overflow-y-auto">

      {showData && tradeData ? (
        <TradeDetails tradeData={tradeData} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default DailyPlreport;
