import React, { useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import back from "../images/back.png";
const Price = () => {
  const [amount, setAmount] = useState();
const [showWarning,setShowwarning]=useState(false);
  const [selectedPercentage, setSelectedPercentage] = useState(10);
  const [investment, setInvestment] = useState(''); // Initialize investment with 0
  const [tableData, setTableData] = useState([
    { segment: "BANK NIFTY", allocation: '', marginAmt: 0, qtyPerLot: 15, maxLot: 60 },
    { segment: "NIFTY", allocation: '', marginAmt: 0, qtyPerLot: 50, maxLot: 36 },
    { segment: "NIFTY FIN", allocation: '', marginAmt: 0, qtyPerLot: 40, maxLot: 45 },
    { segment: "MID CAP", allocation: '', marginAmt: 0, qtyPerLot: 75, maxLot: 56 },
    {
      segment: "Individual Securities",
      allocation: '',
      qtyPerLot: 1000,
      maxLot: 50,
    },
  ]);
  const [allocationPercentages, setAllocationPercentages] = useState({
    "BANK NIFTY": '',
    "NIFTY": '',
    "NIFTY FIN": '',
    "MID CAP": '',
    "Individual Securities": '',
  });
  // Function to handle changes in selected percentage
  const handlePercentageChange = (e) => {
    const percentage = parseInt(e.target.value, 10);
    setSelectedPercentage(percentage);

    // Update the table data based on the selected percentage and investment
    const updatedData = tableData.map((item) => ({
      ...item,
      allocation: item.segment === "BANK NIFTY" ? percentage : 0,
      marginAmt:
        item.segment === "BANK NIFTY" ? (percentage / 100) * investment : 0,
    }));
    setTableData(updatedData);
  };

  const handleInvestmentChange = (e) => {
    const value = parseInt(e.target.value, 10);

    if (value > 5000000) {
      // Show alert for out-of-range investment
      alert("Investment amount should be between ₹25,000 and ₹5,000,000");
      return;
    }

    if (!value || value === 0) {
      setInvestment('');
      
      const updatedData = tableData.map((item) => ({
        ...item,
        allocation: 0,
        marginAmt: 0,
      }));
      
      setTableData(updatedData);
      return; // Exit the function early
    }
    setInvestment(value);

    // Update the margin amounts based on the set allocation percentages
    const updatedData = Object.keys(allocationPercentages).map((segment) => ({
      segment,
      allocation: allocationPercentages[segment],
      marginAmt: (allocationPercentages[segment] / 100) * value,
      qtyPerLot: getQtyPerLotForSegment(segment),
      maxLot: getMaxLotForSegment(segment),
    }));

    setTableData(updatedData);
  };



  // const handleAllocationChange = (e, index) => {
  //   const { value } = e.target;
  //   const updatedData = [...tableData];
  //   updatedData[index].allocation = parseInt(value, 10); // Convert value to integer
  //   // updatedData[index].marginAmt = updatedData[index].segment === 'BANK NIFTY' ? (parseInt(value, 10) / 100) * investment : 0; // Update marginAmt if segment is 'BANK NIFTY'
  //   const allocationPercentage = parseInt(value, 10);

  //   switch (updatedData[index].segment) {
  //     case "BANK NIFTY":
  //       updatedData[index].marginAmt =
  //         (allocationPercentage / 100) * investment;
  //       break;
  //     case "NIFTY":
  //       updatedData[index].marginAmt =
  //         (allocationPercentage / 100) * investment; // Update the formula based on your requirement
  //       break;
  //     case "NIFTY FIN":
  //       updatedData[index].marginAmt =
  //         (allocationPercentage / 100) * investment; // Update the formula based on your requirement
  //       break;
  //     case "MID CAP":
  //       updatedData[index].marginAmt =
  //         (allocationPercentage / 100) * investment; // Update the formula based on your requirement
  //       break;
  //     case "Individual Securities":
  //       updatedData[index].marginAmt =
  //         (allocationPercentage / 100) * investment; // Update the formula based on your requirement
  //       break;
  //     default:
  //       updatedData[index].marginAmt = 0;
  //       break;
  //   }

  //   const totalAllocation = updatedData.reduce(
  //     (sum, row) => sum + row.allocation,
  //     0
  //   );
  //   if (totalAllocation > 100) {
  //     alert("Total allocation percentage exceeds 100%. Please adjust.");
  //   } else {
  //     setTableData(updatedData);
  //   }
  // };

  // const handleAllocationChange = (e, segment) => {
  //   const value = parseInt(e.target.value, 10);
  //   if(isNaN(value) || value==='')
  //   {
  //     setAllocationPercentages({
  //       ...allocationPercentages,
  //       [segment]: 0,
  //     });

  //     const updatedData = tableData.map((item) => {
  //       if (item.segment === segment) {
  //         return {
  //           ...item,
  //           allocation: 0,
  //           marginAmt: 0,
  //         };
  //       }
  //       return item;
  //     });
  //     setTableData(updatedData);
  //     return;
  //   }
  //   setAllocationPercentages({
  //     ...allocationPercentages,
  //     [segment]: value,
  //   });

  //   const totalAllocation = Object.values(allocationPercentages).reduce(
  //     (sum, percentage) => sum + parseInt(percentage, 10),
  //     0
  //   );
  

  //   if (totalAllocation > 100) {
  //     alert("Total allocation percentage exceeds 100%. Please adjust.");
  
  //   }


    
  //   const updatedData = tableData.map((item) => {
  //     if (item.segment === segment) {
  //       return {
  //         ...item,
  //         allocation: value,
  //         marginAmt: (value / 100) * investment,
  //       };
  //     }
  //     return item;
  //   });
  //   setTableData(updatedData);
  // };

  const handleAllocationChange = (e, segment) => {
    const value = parseInt(e.target.value, 10);
    if (isNaN(value) || value === '') {
      setAllocationPercentages({
        ...allocationPercentages,
        [segment]: 0,
      });
  
      const updatedData = tableData.map((item) => {
        if (item.segment === segment) {
          return {
            ...item,
            allocation: 0,
            marginAmt: 0,
          };
        }
        return item;
      });
      setTableData(updatedData);
      return;
    }
  
    const totalAllocationForSegment = tableData
      .filter((item) => item.segment !== segment)
      .reduce((sum, item) => sum + (allocationPercentages[item.segment] || 0), 0);
  
    if (totalAllocationForSegment + value > 100) {
      // alert(`${segment} allocation percentage exceeds 100%. Please adjust.`);
      // You may want to reset the allocation percentage for this segment or handle it accordingly
 setShowwarning(true);
      return;
    }
    if (totalAllocationForSegment + value <= 100 && showWarning) {
      setShowwarning(false);
    }
  
    setAllocationPercentages({
      ...allocationPercentages,
      [segment]: value,
    });
  
    // Update the margin amount for the changed segment
    const updatedData = tableData.map((item) => {
      if (item.segment === segment) {
        return {
          ...item,
          allocation: value,
          marginAmt: (value / 100) * investment,
        };
      }
      return item;
    });
    setTableData(updatedData);
  };


  

  
  const getQtyPerLotForSegment = (segment) => {
    // Implement logic to get qtyPerLot for each segment
    // For demonstration, returning default values; you can modify accordingly
    switch (segment) {
      case "BANK NIFTY":
        return 15;
      case "NIFTY":
        return 50;
      case "NIFTY FIN":
        return 40;
        case "MID CAP":
        return  75;
        case "Individual Securities":
        return  1000;  
      // Add cases for other segments as needed
      default:
        return 0;
    }
  };

  const getMaxLotForSegment = (segment) => {
    // Implement logic to get maxLot for each segment
    // For demonstration, returning default values; you can modify accordingly
    switch (segment) {
      case "BANK NIFTY":
        return 60;
      case "NIFTY":
        return 36;
      // Add cases for other segments as needed
      case "NIFTY FIN":
        return 45;
        case "MID CAP":
        return  56;
        case "Individual Securities":
        return  50; 
      default:
        return 0;
    }
  };


  const calculateValue = (marginAmt, qtyPerLot, divisor, segment) => {
  
    if (!investment || investment === 0) {
      return 0;
    }
  
    const result = marginAmt / (qtyPerLot * divisor);
    if (segment == "BANK NIFTY") {
      return Math.min(result, 60);
    } else if (segment == "NIFTY") {
      return Math.min(result, 36);
    } else if (segment == "NIFTY FIN") {
      return Math.min(result, 45);
    } else if (segment == "MID CAP") {
      return Math.min(result, 56);
    } else if (segment == "Individual Securities") {
      return Math.min(result, 50);
    }
    else
    return 0;
    // Using 1 as the max value, which corresponds to "lot max" in your formula
  };
const monthlyCharges=(0.05*investment).toFixed(0);
const yearlyCharges=(monthlyCharges*11).toFixed(0);


  return (
    <div className="p-4 h-screen overflow-x-hidden bg-gradient-to-r from-indigo-500 relative">

      {showWarning && (
             <div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 absolute right-0" role="alert">
             <p class="font-bold">Be Warned</p>
             <p>Allocation percentage exceeds 100%, Please adjust.</p>
           </div>
      )}
 <button 
  onClick={() => window.history.back()} 
  className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center space-x-2"
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
        {/* <div className="mb-4 w-screen flex flex-col items-center bg-slate-300"> */}
        <div className="flex flex-col items-center  ">
        <h2 className="mb-4 text-6xl font-extrabold text-center italic text-black-600 leading-tight tracking-wide shadow-lg">
  Enter Investment Amount 
  <span className="block text-2xl font-bold text-gray-700 mt-4">
    (₹25,000 - ₹50,00,000)
  </span>
</h2>

 

<div className="flex flex-col md:flex-row items-center  space-y-6 md:space-y-0  w-full gap-10 justify-around">
  {/* Input Section */}
  <input
    type="number"
    id="investmentInput"
    value={investment}
    onChange={handleInvestmentChange}
    placeholder="Enter Investment amount"
    min="25000"
    max="5000000"
    className="appearance-none text-2xl h-12 md:h-16 w-full md:w-1/4 px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    style={{ fontSize: '1.5rem' }}
  />

  {/* Investment Charges Breakdown */}
  <div className="my-8 p-6 bg-white rounded-lg shadow-xl border-t-4 border-indigo-500 md:ml-6 w-full md:w-auto">
    <div className="text-xl font-semibold mb-4 text-indigo-600">
      <span className="mr-2">💼</span> Investment Charges Breakdown
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-indigo-100 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold mb-2">Monthly Charges</h3>
        <div className="text-2xl font-bold text-indigo-600">₹{monthlyCharges}</div>
        <p className="mt-2 text-sm text-gray-600">Charged at a rate of 0.5% monthly.</p>
      </div>

      <div className="bg-indigo-100 p-4 rounded-md shadow-md">
        <h3 className="text-lg font-semibold mb-2">Yearly Charges</h3>
        <div className="text-2xl font-bold text-indigo-600">₹{yearlyCharges}</div>
        <p className="mt-2 text-sm text-gray-600">Equivalent to 11x the monthly charge.</p>
      </div>
    </div>
  </div>
</div>


        </div>
         
        {/* </div> */}

        <div className="w-full mt-10 overflow-y-auto">
          <table className="w-full mx-auto ">
            <thead className="border">
              <tr className=" font-bold text-xl">
                <th className="py-4 px-4  text-2xl">
                  Derivative Segment
                </th>
                <th className="py-4 px-4 border">% Allocation</th>
                <th className="py-4 px-4 border">MARGIN Amt</th>
                <th className="py-4 px-4 border">QTY/LOT</th>
                <th className="py-4 px-4 border">MAX LOT</th>
                <th className="py-4 px-4 border">500</th>
                <th className="py-4 px-4 border">400</th>
                <th className="py-4 px-4 border">300</th>
                <th className="py-4 px-4 border">200</th>
                <th className="py-4 px-4 border">100</th>
                <th className="py-4 px-4 border">50</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((rowData, index) => (
                <tr key={index} className="border">
                  <td className="py-2 px-4 border text-2xl font-extrabold">
                    {rowData.segment}
                  </td>
                  <td className="py-2 px-4 border">
                  <input
          type="number"
          value={rowData.allocation}
          onChange={(e) => handleAllocationChange(e, rowData.segment)}
          min="0"
          max="100"
          style={{ fontSize: '1.5rem' }}

        />
                  </td>
                  {/* <td className="py-4 px-4 border text-2xl">{rowData.marginAmt}</td> */}
                  <td className="py-4 px-4 border text-2xl">{rowData.marginAmt?.toFixed(2)}</td>
                  <td className="py-4 px-4 border text-2xl">{rowData.qtyPerLot}</td>
                  <td className="py-4 px-4 border text-2xl">{rowData.maxLot}</td>
                  {/* For simplicity, you can use a fixed rate of 500 in the calculateMinValue function */}
                  {/* Calculate and display the values for each column */}

                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        500,
                        rowData.segment
                      )
                    )}
                  </td>
                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        400,
                        rowData.segment
                      )
                    )}
                  </td>
                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        300,
                        rowData.segment
                      )
                    )}
                  </td>
                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        200,
                        rowData.segment
                      )
                    )}
                  </td>
                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        100,
                        rowData.segment
                      )
                    )}
                  </td>
                  <td className="py-4 px-4 border text-2xl">
                    {Math.floor(
                      calculateValue(
                        rowData.marginAmt,
                        rowData.qtyPerLot,
                        50,
                        rowData.segment
                      )
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
    </div>
  );
};

export default Price;
