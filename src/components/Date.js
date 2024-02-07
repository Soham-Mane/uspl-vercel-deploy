import React, {useState} from "react"; 
import Datepicker from "react-tailwindcss-datepicker"; 
import axios from 'axios';
const Date = () => { 

const [value, setValue] = useState({ 

startDate: "Enter start date" ,
endDate:  "Enter End date" 

}); 

const handleValueChange = (newValue) => {
console.log("newValue:", newValue); 
setValue(newValue); 

sendDatesToBackend(newValue.startDate, newValue.endDate);

} 

const sendDatesToBackend = async (startDate, endDate) => {
  try {
    // Make HTTP request to backend API
    const response = await axios.get('http://localhost:5000/fixlot', {
      params: {
        fromDt: startDate,
        toDt: endDate
      }
    });
    
    // Handle response from backend
    console.log(response.data); // You can set this data in your component state if needed
    
  } catch (error) {
    console.error('Error fetching data from backend:', error);
    // Handle error
  }
};

return (
  <div className="w-full h-full">
<Datepicker 
primaryColor={"indigo"} 
value={value} 
onChange={handleValueChange} 
showShortcuts={true} 
placeholder={"Enter the start and End Date"} 
showFooter={true} 

/> 

  </div>


);
}; 
export default Date;

