import React from 'react';
import moment from 'moment'; // Ensure you've installed and imported moment if not done already

const TradeDetails = ({ tradeData }) => {
  
  return (
    <div className='bg-black'>
      {tradeData.map((trade, index) => (
        <div key={index} className="trade_container mb-1 border rounded bg-white p-2">
          <table className="w-full h-full ">
            {/* <tbody>
              <tr>
                <td colSpan="3" className="text-lg font-bold">{trade.Instrument}</td>
                <td colSpan="1" className="flex items-center justify-center text-xl">
                  <div className="custom-radio bg-green-800 w-4 h-4 rounded-full"></div>
                  <div className='text-base ml-1'>{trade.QTY}</div>
                </td>
              </tr>
              <tr>
             
<td className="text-sm font-medium">{trade["BUY TIME"] ? moment(trade["BUY TIME"]).format('DD MMM YYYY HH:mm') : 'N/A'}</td>
<td className="text-sm font-medium">&#8377; {trade["BUY PRICE"] ? trade["BUY PRICE"].toFixed(2) : 'N/A'}</td>
<td className="text-sm font-medium">{trade["BUY VALUE"] ? trade["BUY VALUE"].toFixed(2) : 'N/A'}</td>
<td className="flex justify-center text-green-800 font-medium">BUY</td>



              </tr> 
              <tr>
                <td className="text-sm font-medium">{moment(trade["SELL TIME"]).format('DD MMM YYYY HH:mm')}</td>
                <td className="text-sm font-medium">&#8377; {trade["SELL PRICE"] ? trade["SELL PRICE"].toFixed(2) : 'N/A'}</td>
                <td className="text-sm font-medium">{trade["SELL VALUE"] ? trade["SELL VALUE"].toFixed(2) : 'N/A'}</td>
                <td className="flex justify-center text-red-500 font-medium">SELL</td>
              </tr>
              <tr>
                <td colSpan="3" className="text-xl font-bold">Points Gain</td>
             
                <td className={`text-xl font-bold ${trade["POINTS GAIN"] && trade["POINTS GAIN"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
  {trade["POINTS GAIN"] ? trade["POINTS GAIN"].toFixed(2) : 'N/A'}
</td>
              </tr> 
              <tr>
                <td colSpan="3" className="text-xl font-bold">Gross P&L</td>
              
                <td className={`text-xl font-bold ${trade["PROFIT/LOSS"] && trade["PROFIT/LOSS"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
  {trade["PROFIT/LOSS"] ? trade["PROFIT/LOSS"].toFixed(2) : 'N/A'}
</td>
              </tr>
              
            </tbody> */}
<table className="w-full h-full">
  <tbody>
    <tr>
      <td colSpan="3" className="text-lg font-bold">{trade.Instrument}</td>
      <td colSpan="1" className="flex items-center justify-center text-xl">
        <div className="custom-radio bg-green-800 w-4 h-4 rounded-full"></div>
        <div className='text-base ml-1'>{trade.QTY}</div>
      </td>
    </tr>
    <tr>
      <td className="text-sm font-medium">{trade["BUY TIME"] ? moment(trade["BUY TIME"]).format('DD MMM YYYY HH:mm') : 'N/A'}</td>
      <td className="text-sm font-medium">&#8377; {trade["BUY PRICE"] ? trade["BUY PRICE"].toFixed(2) : 'N/A'}</td>
      <td className="text-sm font-medium">{trade["BUY VALUE"] ? trade["BUY VALUE"].toFixed(2) : 'N/A'}</td>
      <td className="flex justify-center text-green-800 font-medium">BUY</td>
    </tr> 
    <tr>
      <td className="text-sm font-medium">{moment(trade["SELL TIME"]).format('DD MMM YYYY HH:mm')}</td>
      <td className="text-sm font-medium">&#8377; {trade["SELL PRICE"] ? trade["SELL PRICE"].toFixed(2) : 'N/A'}</td>
      <td className="text-sm font-medium">{trade["SELL VALUE"] ? trade["SELL VALUE"].toFixed(2) : 'N/A'}</td>
      <td className="flex justify-center text-red-500 font-medium">SELL</td>
    </tr>
    <tr>
      <td colSpan="1" className="text-xl font-bold">Profit/Loss</td>
      <td className={`md:text-xl text-lg font-bold ${trade["PROFIT/LOSS"] && trade["PROFIT/LOSS"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
        {trade["PROFIT/LOSS"] ? trade["PROFIT/LOSS"].toFixed(2) : 'N/A'}
      </td>
      <td colSpan="1" className="text-xl font-bold">Points Gain</td>
      <td className={`md:text-xl text-lg font-bold ${trade["POINTS GAIN"] && trade["POINTS GAIN"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
        {trade["POINTS GAIN"] ? trade["POINTS GAIN"].toFixed(2) : 'N/A'}
      </td>
    </tr> 
  </tbody>
</table>



          </table>
        </div>
      ))}
    </div>
  );
};

export default TradeDetails;

// import React from 'react';
// import moment from 'moment';

// const TradeDetails = ({ tradeData }) => {
//   return (
//     <div className='bg-black p-4'>
//       {tradeData.map((trade, index) => (
//         <div key={index} className="trade-container mb-4 border rounded bg-white p-4">
//           <table className="w-full">
//             <tbody>
//               <tr className="text-lg font-bold">
//                 <td colSpan="3">{trade.Instrument}</td>
//                 <td className="flex items-center justify-center text-xl">
//                   <div className="custom-radio bg-green-800 w-4 h-4 rounded-full"></div>
//                   <div className='ml-2'>{trade.QTY}</div>
//                 </td>
//               </tr>
//               <tr>
//                 <td className="font-medium">{trade["BUY TIME"] ? moment(trade["BUY TIME"]).format('DD MMM YYYY HH:mm') : 'N/A'}</td>
//                 <td className="font-medium">&#8377; {trade["BUY PRICE"] ? trade["BUY PRICE"].toFixed(2) : 'N/A'}</td>
//                 <td className="font-medium">&#8377; {trade["BUY VALUE"] ? trade["BUY VALUE"].toFixed(2) : 'N/A'}</td>
//                 <td className="flex justify-center font-medium text-green-800">BUY</td>
//               </tr>
//               <tr>
//                 <td className="font-medium">{moment(trade["SELL TIME"]).format('DD MMM YYYY HH:mm')}</td>
//                 <td className="font-medium">&#8377; {trade["SELL PRICE"] ? trade["SELL PRICE"].toFixed(2) : 'N/A'}</td>
//                 <td className="font-medium">&#8377; {trade["SELL VALUE"] ? trade["SELL VALUE"].toFixed(2) : 'N/A'}</td>
//                 <td className="flex justify-center font-medium text-red-500">SELL</td>
//               </tr>
//               <tr>
//                 <td colSpan="3" className="text-xl font-bold">Points Gain</td>
//                 <td className={`text-xl font-bold ${trade["POINTS GAIN"] && trade["POINTS GAIN"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
//                   {trade["POINTS GAIN"] ? trade["POINTS GAIN"].toFixed(2) : 'N/A'}
//                 </td>
//               </tr>
//               <tr>
//                 <td colSpan="3" className="text-xl font-bold">Gross P&L</td>
//                 <td className={`text-xl font-bold ${trade["PROFIT/LOSS"] && trade["PROFIT/LOSS"] < 0 ? 'text-red-500' : 'text-green-600'}`}>
//                   {trade["PROFIT/LOSS"] ? trade["PROFIT/LOSS"].toFixed(2) : 'N/A'}
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TradeDetails;
