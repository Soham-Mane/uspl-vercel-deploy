import { useLocation } from 'react-router-dom';

import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Select from 'react-select';
import "./RegistrationPage.css"
import logo2 from "../images/Screenshot 2023-12-14 114040.png";
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEye, faMoney, faEnvelope, faIdBadge, faUnlock } from '@fortawesome/fontawesome-free-solid';
import CountryRegionSelector from 'react-country-region-selector';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import CountryFlag from 'react-country-flag';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';

import '@fontsource/poppins'; // Import Poppins font
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
//import UpdateModal from './UpdateModal';


function EditUserDetails () {
//  const { userDetails } = location.state;
//const [updateMessage, setUpdateMessage] = useState('');
//const [isModalOpen, setIsModalOpen] = useState(false);
  // const userDetails = location.state?.userDetails || {};
  const [thoughtOfTheDay, setThoughtOfTheDay] = useState('');
  const location = useLocation()
  const navigate = useNavigate();
 // const { state } = location;
  const [formData, setFormData] = useState({
    UserType: '',
    FirstName: '',
    Limit: '',
    Email: '',
    MobileNo: '',
    UserName: '',
  });



  //   // Fetch user details based on UserName when component mounts
  //   alert('UserName:',formData.UserName);
  //   const fetchUserDetails = async () => {
  //     try {
  //       const response = await fetch('http://localhost:5000/getUserDetails', {
  //         UserName: formData.UserName,
  //         Password: formData.Password
          
  //       });
  //       alert('API Response:', response.data);
  //       if (response.data.success) {
  //         // Update the state with the fetched user details
  //         const userDetails = response.data.userDetails;
  //         setFormData((prevData) => ({
  //           ...prevData,
  //           UserType: userDetails.UserType,
  //           FirstName: userDetails.FirstName,
  //           Limit: userDetails.limit,
  //           MobileNo: userDetails.MobileNo,
  //           Email: userDetails.Email,
            
  //         }));
  //       } else {
  //         console.error('Error fetching user details:', response.data.message);
  //       }
  //     } catch (error) {
  //       console.error('Error during user details fetching:', error);
  //     }
  //   };

  //   fetchUserDetails();
  // }, [formData.UserName,formData.Password]);
 

  // useEffect(() => {
  //   // Check if user details are available in location state
  //   if (location.state && location.state.userDetails) {
  //     const { UserType, FirstName, Limit, MobileNo,Email,UserName } = location.state.userDetails;
  //     setFormData({
  //       UserType,
  //       FirstName,
  //       Limit,
  //       MobileNo,
  //       Email,
  //       UserName,
  //     });
  //   } else {
  //     // Handle the case when user details are not available
  //     // Redirect or show an error message
  //     console.error('User details not found');
  //     alert('User details not found')
  //     // navigate('/'); // Redirect to the home page or login page
  //   }
  // }, [location.state, navigate]);

  useEffect(() => {
    if (location.state && location.state.userDetails) {
      const { User_Type, FirstName, InvestLimit, MobileNo, Email, LoginId } = location.state.userDetails;
      setFormData({
        UserType: User_Type || '',
        FirstName: FirstName || '',
        Limit: InvestLimit || '',
        MobileNo: MobileNo || '',
        Email: Email || '',
        UserName: LoginId || '',
      });
    } else {
      console.error('User details not found');
      alert('User details not found');
      // Handle the case when user details are not available
      // Redirect or show an error message
      // navigate('/'); // Redirect to the home page or login page
    }
  }, [location.state, navigate]);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.post('http://localhost:5000/getUserDetails', {
          UserName: formData.UserName,
          Password: formData.Password,
        });

        if (response.data.success) {
          const userDetails = response.data.data;

          setFormData((prevData) => ({
            ...prevData,
            UserType: userDetails.UserType || '',
            FirstName: userDetails.FirstName || '',
            InvestLimit: userDetails.Limit || '',
            MobileNo: userDetails.MobileNo || '',
            Email: userDetails.Email || '',
            UserName: userDetails.UserName || '',
          }));
        } else {
          console.error('Error fetching user details:', response.data.message);
        }
      } catch (error) {
        console.error('Error during user details fetching:', error.message);
      }
    };

    fetchUserDetails();
  }, [formData.UserName, formData.Password]);
  



  

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
//first handlesubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     // Update only the specified fields
  //     const updatedUserDetails = {
  //       UserType: formData.UserType,
  //       FirstName: formData.FirstName,
  //       Limit: formData.Limit,
  //       Email: formData.Email,
  //       MobileNo: formData.MobileNo,
  //       UserName: formData.UserName,
  //     };

  //     // API call to update user details
  //     const updateUserResponse = await axios.post('http://localhost:5000/updateUserDetails', updatedUserDetails);

  //     // Check if the update was successful
  //     if (updateUserResponse.data.success) {
  //       console.log('User details updated successfully');
  //     } else {
  //       console.error('User details update failed:', updateUserResponse.data.message);
  //     }
  //   } catch (error) {
  //     console.error('Error during user details update:', error);
  //   }
  // };

  //2nd handlesubmit
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  // console.log("Successss")
  //     try {
  //     // Update only the specified fields
  //     const updatedUserDetails = {
  //       //UserType: formData.UserType,
  //       FirstName: formData.FirstName,
  //       InvestLimit: formData.Limit,  
  //       MobileNo: formData.MobileNo,
  //       Email: formData.Email,
  //       //UserName: formData.UserName,
  //     };

  //     // API call to update user details
  //     const updateUserResponse = await axios.post('http://localhost:5000/updateUserDetails', {
  //       // method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       // body: JSON.stringify(updatedUserDetails),
  //     });
      

  //     // Check if the update was successful
  //     if (updateUserResponse.data.success) {
  //       console.log('User details updated successfully');
  //     } else {
  //       console.error('User details update failed:', updateUserResponse.statusText);
  //     }
  //   } catch (error) {
  //     console.error('Error during user details update:', error.message);
  //   }
  // };
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Update only the specified fields
      const updatedUserDetails = {
        UserType: formData.UserType,
        FirstName: formData.FirstName,
        InvestLimit: formData.Limit,
        MobileNo: formData.MobileNo,
        Email: formData.Email,
        UserName: formData.UserName, // Make sure to include UserName
      };
  
      // API call to update user details
      const updateUserResponse = await axios.post('http://localhost:5000/updateUserDetails', updatedUserDetails, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      // Check if the update was successful
      if (updateUserResponse.data.success) {
        console.log('User details updated successfully');
        alert('User details updated successfully');
        //setIsModalOpen(true);
        navigate('/');
       
      } else {
        console.error('User details update failed:', updateUserResponse.data.message);
        alert('User details update failed: ' + updateUserResponse.data.message);
        //setIsModalOpen(true);
      }
    } catch (error) {
      console.error('Error during user details update:', error.message);
      alert('Error during user details update: ' + error.message);
     // setIsModalOpen(true);
    }
  };
  // const closeModal = () => {
  //   setIsModalOpen(false);
  // };

  
  


  
  const fetchThoughtOfTheDay = async () => {
    try {
      const response = await fetch('http://localhost:5000/getThoughtOfTheDay');
      if (response.ok) {
        const data = await response.json();
        console.log('Data from server:', data);
  
        // Extract the suvichar from the response
        const suvichar = data[0][0]?.suvichar;
  
        // Update the state with the extracted suvichar
        setThoughtOfTheDay(suvichar);
      } else {
        console.error('Failed to fetch thought of the day. Server response:', response);
      }
    } catch (error) {
      console.error('Error fetching thought of the day:', error);
    }
  };
useEffect(() => {
    // Make API call to fetch thought of the day
    fetchThoughtOfTheDay();
  }, []);

  const handleContactChange = (e) => {
    if (e.target && e.target.tagName) {
        const contactValue = e.target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters

        // Update the component state with the numeric value
        setFormData({
            ...formData,
            MobileNo: contactValue,
        });

        // if (contactValue === '') {
        //     document.getElementById('MobileNolbl').style.display = 'block';
        // } else {
        //     document.getElementById('MobileNolbl').style.display = 'none';
        // }
    }
};
const countryOptions = [
  { value: 'IN', label: 'India (+91)'},
  { value: 'US', label: 'United States (+1)'},
  { value: 'CA', label: 'Canada (+1)' },
  { value: 'GB', label: 'United Kingdom (+44)' },
  { value: 'AU', label: 'Australia (+61)' },
  { value: 'JP', label: 'Japan (+81)' },
  { value: 'DE', label: 'Germany (+49)' },
  { value: 'FR', label: 'France (+33)' },
  { value: 'BR', label: 'Brazil (+55)' },
  { value: 'CN', label: 'China (+86)' },
  { value: 'RU', label: 'Russia (+7)' },
  { value: 'IT', label: 'Italy (+39)' },
  { value: 'ES', label: 'Spain (+34)' },
  { value: 'MX', label: 'Mexico (+52)' },
  { value: 'ZA', label: 'South Africa (+27)' },
  // Add more countries as needed
];


const defaultCountry = countryOptions.find((country) => country.value === 'IN'); // India as the default
//   return (
//     <div>
//       <h2>Edit User Details</h2>
//       <form onSubmit={handleSubmit}>
//         {/* UserType and UserName fields (disabled) */}
//         <div>
//           <label>User Type:</label>
//           <input type="text" name="UserType" value={formData.UserType} disabled />
//         </div>
//         <div>
//           <label>User Name:</label>
//           <input type="text" name="UserName" value={formData.UserName} disabled />
//         </div>
//         {/* Editable fields */}
//         <div>
//           <label>Full Name:</label>
//           <input type="text" name="FirstName" value={formData.FirstName} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Investment Limit:</label>
//           <input type="text" name="Limit" value={formData.Limit} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Contact:</label>
//           <input type="text" name="MobileNo" value={formData.MobileNo} onChange={handleInputChange} />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input type="email" name="Email" value={formData.Email} onChange={handleInputChange} />
//         </div>
//         <button type="submit">Update User Details</button>
//       </form>
//     </div>
//   );

return (
  <section className="h-200 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 flex justify-center items-center">
       <div className="container flex justify-center items-center bg-slate-400">
      <div className="row justify-center">
          <div className="col-xl-11 col-md-11 cardhead flex">
              <div className="cardmain card rounded-3 text-black w-1/2  ">
                  <div className="row g-0">
                      <div className="col-lg-6 cardheight ">
                          <div className="card-body d-flex flex-col items-center ">
                              <div className="flex items-center flex-col">
                                  <img src={logo2} className="uspllogost " alt="logo2" />
                                  <h4 className="mt-1 pb-1">WELCOME TO MOTA</h4>
                                  <h5 className="mt-1 pb-1">(My Options Trading App)</h5>
                              </div> 
                              {/* <div className="d-flex align-items-center justify-content-end bg-slate-200">

</div> */}
                           <div id="zerodha1">
                              <form onSubmit={handleSubmit}>
                             
                                  {/* ... (rest of the form) */}
                                  <div className="form-group row flex">
                                      <div className="form-label col-sm-4 text-left">
                                          <label className="form-label registerfullname text-left" for="form2Example22">Broker Name</label>
                                      </div>
                                      <div className="col-sm-8 flex-grow">
                                          <div className="input-group  flex">
                                          <span className="input-group-addon">
                                                        {/* <i className="fa fa-id-badge icon"></i> */}
                                                        <FontAwesomeIcon icon={faIdBadge} className="icon" />
                                                    </span>
                                              <input type="text" id="fullname" name="FirstName"  className="form-control"  value={formData.UserType}
                                               onChange={handleInputChange} disabled />
                                             
                                          </div>
                                      </div>
                                  </div>

                                  <div className="form-group row flex">
                                            <div className="form-label col-sm-4 text-left">
                                                <label className="form-label registerfullname text-left" for="form2Example22">FULL NAME</label>
                                            </div>
                                            <div className="col-sm-8 flex-grow">
                                                <div className="input-group  flex">
                                                    <span className="input-group-addon">
                                                        
                                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                                    </span>
                                                    <input type="text" id="fullname" name="FirstName"  className="form-control" placeholder="fullname" value={formData.FirstName}
                                                     onChange={handleInputChange} required />
                                                    <label id="fullnamelbl" className="redtext" style={{ display: 'none' }}>Full name is required</label>
                                                </div>
                                            </div>
                                        </div>

                                  <div className="form-group row flex">
<label for="investmentAmount" className="col-sm-4  col-form-label Ilimit text-left ">INVESTMENT AMOUNT</label>
<div className="col-sm-8 flex-grow">
  <div className="input-group flex">
      <span className="input-group-addon">
          
          <FontAwesomeIcon icon={faMoneyBill} className="icon" />
      </span>
      <input
          type="number"
          id="investmentAmount"
          name="Limit"
          value={formData.Limit}
          className="form-control"
          placeholder="Enter investment amount"
          min="25000"
          max="5000000"
          onChange={handleInputChange}
          required
      />
      <label id="investlbl" style={{ display: 'none' }}>Investment amount is required</label>
  </div>
</div>
</div>




 <div className="form-group row ">
      <label className="form-label wcontcat col-sm-4 text-left" htmlFor="form2Example22">
          CONTACT
      </label>
      <div className="col-sm-8 flex  w-full h-full">
          <Select
              id="MobileNo"
              options={countryOptions}
              defaultValue={defaultCountry}
              onChange={handleContactChange}
              //components={{ Option: CustomOption }}
              placeholder="Select Country"
              isSearchable
              required
              className="custom-country-selector h-7 " // Add a custom class for styling
          />
          <input
          type="tel"   //npm install react-country-region-selector

          id="MobileNo"
          name="MobileNo"
          className="form-control"
          value={formData.MobileNo}
          onChange={handleContactChange}
          // value={contactValue}
          required
      />
          {/* <label id="MobileNolbl" className="redtext" style={{ display: 'none' }}>
              Numeric values are required
          </label> */}
          <span id="valid-msg" className="hide"></span>
          <span id="error-msg" className="hide"></span>
          
      
      </div>
  </div>

                                  <div className="form-group row flex">
                                      <label className="form-label wmail col-sm-4 text-left" for="form2Example22">EMAIL ID</label>
                                      <div className="col-sm-8 flex-grow">
                                          <div className="input-group  flex">
                                              <span className="input-group-addon">
                                                  
                                                  <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                              </span>
                                              <input type="email" id="emailid" name="Email" className="form-control" placeholder="email"  value={formData.Email} onChange={handleInputChange} required />
                                              <label id="emaillbl" className="redtext" style={{ display: 'none' }}>Email is required</label>
                                          </div>
                                      </div>
                                  </div>
                                  {/* <div className="form-group row flex">
                                  <label>USER ID </label>
                             <input type="text" name="UserType" value={formData.UserType} disabled />
                                     
                                  </div>
                                   */}
                                   <div className="form-group row flex">
    <label for="zeroid" className="col-sm-4 col-form-label user_zeroid text-left">USER ID</label>
    <div className="col-sm-8 flex-grow">
        <div className="input-group flex" >
       
        <span className="input-group-addon">
                                                        
                                                        <FontAwesomeIcon icon={faUser} className="icon" />
                                                    </span>
            <input type="text" id="zeroid" name="UserName" className="form-control"   value={formData.UserName} onChange={handleInputChange} disabled/>
        </div>
   
    </div>
</div>

                  


                                 
                                  <input type="submit" className=" btn btn-primary btn-block fa-lg  mb-3" value="Update"
                                      id="btnRegister" />
                                  
                                  <p id="successregister" style={{ display: 'none' }}>
                                      Successfully register

                                  </p>

                                  <div class="Back-Btn">
<a href="/"><small style={{ color:'purple', fontSize: '1rem', fontWeight: 600}}>Back Home</small></a>
</div>
                              </form>
                              {/* <UpdateModal isOpen={isModalOpen} onRequestClose={closeModal} message={updateMessage} /> */}
                           
                          </div> 
                          

</div>



                          
                      </div>
                  </div>

              </div>

              <div className="col-lg-6  text-white bg-gradient-to-r from-indigo-500 w-1/2">
              <div className="card-body1">
                  <h4 className="mb-4 areasvichar d-flex" id="suvichararea"></h4>
                  <div className="text-white  areasvicharhead text-black">
                  
                  
    <div id="thoughtOfTheDay">
<h3 style={{ textDecoration: 'underline', fontSize: '1.2rem', color: 'black' }}>   </h3>
<p style={{ fontSize: '2rem' ,color:'black',fontWeight:550}}>{thoughtOfTheDay}</p>
</div>

{/* Add a line here */}
<hr style={{ border: '1px solid black', margin: '20px 0' }} />

                      <div id="note">
                          <h3 style={{ textDecoration: 'underline', fontSize: '1.2rem', color: 'black', textAlign:'center' }}>Disclaimer, Terms and Conditions</h3>

                          <ul style={{ color: 'black', marginTop: '20px' }}>
                              <li className='text-black' style={{ marginBottom: '20px' }}>It's important to emphasize the risks associated with investments in the equity Futures and Options (F&O) trading market. Your statement highlights the high level of risk involved, and it's crucial for individuals to fully understand these risks before entering the market. Here's the information in a concise form:</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>Investments in the equity Futures and Options (F&O) trading market carry very high market risks.</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>Statistics suggest that 9 out of 10 individual traders incur losses in this market.</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>Consider these risks carefully before deciding to invest in F&O trading. So please ensure that you fully understand the risks and costs involved.</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>This serves as a clear warning to potential investors to exercise caution and seek professional advice if they are considering entering the F&O market.</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>Trading Futures & Options may not be suitable for everyone and can result in losses that exceed deposits.</li>
                              <li className='text-black' style={{ marginBottom: '20px' }}>We collect, retain, and use your contact information for legitimate business purposes only, to contact you and to provide you with information & latest updates regarding our products & services.</li>
                              
                          </ul>


                      </div>

                      {/* <div id="myModal" className="modal">
        <div className="modal-content">
           <h4 className="modal-title" style={{ color: 'black' }}>USPL MOTA app offers services specifically designed for intra-day tradingof Bank Nifty options Buy and Sell.</h4>

          <span className="close">&times;</span>
          <p id="modal-paragraph" style={{ color: 'black' }}>Our service is both Paper Trading AUTO and MANUAL executable. This allows
            you to simulate trades in real-time without risking any capital. You can test different
            strategies, analyze outcomes, and refine your trading approach
          </p>
        </div>
      </div>

      <div id="myModal1" className="modal">
        <div className="modal-content">
          <h4 className="modal-title" style={{ color: 'black' }}>USPL MOTA app offers services specifically designed for intra-day trading
            of Bank Nifty options Buy and Sell.</h4>
          <span className="close close1">&times;</span>
          <p id="modal-paragraph" style={{ color: 'black' }}>USPL MOTA app provides "CALL & PUT" options trade "BUY" and "SELL" signals
            via API. Our API delivers real-time data and signals for a wide range of options, enabling you
            to make informed trading decisions. You can easily integrate our signals into your own trading
            strategies and automate your trades, giving you an edge over the competition. This can help
            improve your trading strategy and increase your chances of success.
          </p>
        </div>
      </div>

      <div id="myModal2" className="modal">
        <div className="modal-content">
          <h4 className="modal-title" style={{ color: 'black' }}>USPL MOTA app offers services specifically designed for intra-day trading
            of Bank Nifty options Buy and Sell.</h4>
          <span className="close close2">&times;</span>
          <p id="modal-paragraph" style={{ color: 'black' }}>We offer the ability to auto-execute your demat accounts (Zerodha and IB)
            using broker API. This service is designed to save you time and reduce the potential for errors.
            With our app, you can easily execute trades in real-time, without having to manually enter
            orders.
          </p>
        </div>
      </div>

      {/*<div id="myModal3" className="modal">
        <div className="modal-content">
          <h4 className="modal-title" style={{ color: 'black' }}>USPL MOTA app offers services specifically designed for intra-day trading
            of Bank Nifty options Buy and Sell.</h4>
          <span className="close close3">&times;</span>
          <p id="modal-paragraph">We offer the ability to auto-execute your demat accounts (Zerodha and IB)
            using broker API. This service is designed to save you time and reduce the potential for errors.
            With our app, you can easily execute trades in real-time, without having to manually enter
            orders.
          </p>
        </div>
      </div>
      <div id="myModal4" className="modal">
        <div className="modal-content">
          <h4 className="modal-title" style={{ color: 'black' }}>USPL MOTA app offers services specifically designed for intra-day trading
            of Bank Nifty options Buy and Sell.</h4>
          <span className="close close4">&times;</span>
          <p id="modal-paragraph" style={{ color: 'black' }}>We offer the ability to auto-execute your demat accounts (Zerodha and IB)
            using broker API. This service is designed to save you time and reduce the potential for errors.
            With our app, you can easily execute trades in real-time, without having to manually enter
            orders.
          </p>
  </div>
</div> */}
                  </div>
              </div>
          </div>



          </div>




      



      </div>
  </div>;


</section>

);
};



export default EditUserDetails;
