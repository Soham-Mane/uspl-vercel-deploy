import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import "./RegistrationPage.css"
import logo2 from "../images/Screenshot 2023-12-14 114040.png";
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faEye, faMoney, faEnvelope, faIdBadge, faUnlock } from '@fortawesome/fontawesome-free-solid';
import CountryRegionSelector from 'react-country-region-selector';
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import CountryFlag from 'react-country-flag';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import RegisterModal from './RegisterModal';
import '@fontsource/poppins'; // Import Poppins font
import moment from 'moment';
import axios from 'axios';
import EditUserDetails from './EditUserDetails';
import { useNavigate } from 'react-router-dom';




function RegistrationPage() {  
const [showSuccessModal, setShowSuccessModal] = useState(false);
const [thoughtOfTheDay, setThoughtOfTheDay] = useState('');
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
    


   //const [selectedCountry, setSelectedCountry] = useState('');
    //const [contactValue, setContactValue] = useState('');
    const [country, setCountry] = useState('');


    const [isRegister, setIsRegister] = useState(true);
    //const [isError, setIsError] = useState(false);
    const [isEditMode, setIsEditMode] = useState(false);
    const handleRadioChange = (value) => {
        setIsRegister(value === 'register');
        setIsEditMode(value === 'edit');
    };  
    const [formData, setFormData] = useState({
        UserType: '',
        FirstName: '',
        Limit: '',
        Email: '',
        MobileNo: '',
        UserName: '',
        Password: '',
      });
    //   const handleInputChange = (e) => {
       
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    //   };
    const handleInputChange = (e) => {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    };
    

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:5000/registerUser', formData);
            console.log(response);
            // Handle success (e.g., show a success message or redirect to a new page)
          } catch (error) {
            console.error('Error during registration:', error);
            // Handle error (e.g., show an error message to the user)
          }
        
        // Validation for Full Name
        const fullName = document.getElementById('fullname').value.trim();
        if (!fullName) {
            document.getElementById('fullnamelbl').style.display = 'block';
            return;
        }
    
        // Validation for Investment Amount
        const investmentAmount = document.getElementById('investmentAmount').value.trim();
        const minInvestment = 25000;
        const maxInvestment = 5000000;
        if (investmentAmount < minInvestment || investmentAmount > maxInvestment) {
            alert('Please enter investment amount between 25K-50L');
            return;
        }

        // Validation for Email ID
        const email = document.getElementById('emailid').value.trim();
        if (!email) {
            document.getElementById('emaillbl').style.display = 'block';
            return;
        }
    
        // Validation for Broker Name
        const brokerName = document.getElementById('listBroketname').value.trim();
        if (!brokerName) {
            document.getElementById('brokername').style.display = 'block';
            return;
        }
    
        // Validation for User ID
        const userId = document.getElementById('zeroid').value.trim();
        if (!userId) {
            document.getElementById('zerodhauserid').style.display = 'block';
            return;
        }
    
        // Validation for Password
        const password = document.getElementById('user_zeropassword').value.trim();
        if (!password) {
            document.getElementById('zerodhauserpwsbl').style.display = 'block';
            return;
        }
    
        // Validation for Reenter Password
        const reenterPassword = document.getElementById('user_zeroretrpassword').value.trim();
        if (!reenterPassword || reenterPassword !== password) {
            document.getElementById('zerodhauserrentpwsbl').style.display = 'block';
            return;
        }
        setShowSuccessModal(true);
    };
    
    //     const contactValue = e.target.value.trim();
    //     const contactRegex = /^\d+$/;

    //     if (!contactRegex.test(contactValue)) {
    //         document.getElementById('MobileNolbl').style.display = 'block';
    //     } else {
    //         document.getElementById('MobileNolbl').style.display = 'none';
    //     }
    // };
    // const handleContactChange = (e) => {
    //     const contactValue = e.target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters

    //     // Update the input value with only numeric characters
    //     e.target.value = contactValue;

    //     if (contactValue === '') {
    //         document.getElementById('MobileNolbl').style.display = 'block';
    //     } else {
    //         document.getElementById('MobileNolbl').style.display = 'none';
    //     }
    // };
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
   

    
    // const handleContactChange = (e) => {
    //     if (e && e.target) {
    //       const contactValue = e.target.value.replace(/[^\d]/g, '');
      
    //       e.target.value = contactValue;
      
    //       const MobileNolbl = document.getElementById('MobileNolbl');
          
    //       if (MobileNolbl) {
    //         if (contactValue === '') {
    //           MobileNolbl.style.display = 'block';
    //         } else {
    //           MobileNolbl.style.display = 'none';
    //         }
    //       }
    //     }
    //   };

    const handleContactChange = (e) => {
        if (e.target && e.target.tagName) {
            const contactValue = e.target.value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    
            // Update the component state with the numeric value
            setFormData({
                ...formData,
                MobileNo: contactValue,
            });

        }
    };
    
    
     
    
    
    const handleEditClick = () => {
        setIsRegister(false);
        setIsEditMode(true);
    };
    //  const handleEditSubmit = async (e) => {
    //     e.preventDefault();
    
    //     try {
    //         // Validate credentials on the server
    //         const response = await fetch('http://localhost:5000/getUserDetails', {
    //           method: 'POST',
    //           headers: {
    //             'Content-Type': 'application/json',
    //           },
    //           body: JSON.stringify(credentials),
    //         });
      
    //         if (response.ok) {
    //           // Credentials are correct, fetch user details
    //           const userDetailsResponse = await fetch(`http://localhost:5000/getUserDetails/${credentials.userId}`);
    //           const userDetails = await userDetailsResponse.json();
      
    //           // Redirect to the Edit User Details page with user details
    //           history.push({
    //             pathname: '/edituser',
    //             state: { userDetails },
    //           });
    //         } else {
    //           // Credentials are incorrect, handle accordingly
    //           console.log('Invalid credentials');
    //         }
    //       } catch (error) {
    //         console.error('Error during login:', error);
    //       }
    //     };
    const [credentials, setCredentials] = useState({
        UserName: '',
        Password: '',
      });
      const navigate = useNavigate();
      
    
      const handleCredentialChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
      };
      

    
    //     e.preventDefault();
    
    //     try {
    //       // Validate credentials on the server
    //       const response = await fetch('http://localhost:5000/getUserDetails', {
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(credentials),
    //       });
    
    //       if (response.ok) {
    //         // Credentials are correct, fetch user details
            
    //         const userDetailsResponse = await response.json();
    // alert("success");
    //         // Redirect to the Edit User Details page with user details
            
    //         history.push({
    //           pathname: '/edituser',
    //           state: { userDetails: userDetailsResponse.data }, // Assuming the data property contains user details
    //         });
    //       } else {
    //         // Credentials are incorrect, handle accordingly
    //         console.log('Invalid credentials');
    //       }
    //     } catch (error) {
    //       console.error('Error during login:', error);
    //     }
    //   };
    const handleEditSubmit = async (e) => {
        e.preventDefault();
      
        try {
            // Validate credentials on the server
            const response = await fetch('http://localhost:5000/getUserDetails', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(credentials),
            });
      
            if (response.ok) {
              // Credentials are correct, fetch user details
              const userDetailsResponse = await response.json();
      
              // Redirect to the Edit User Details page with user details
              navigate('/edituser', { state: { userDetails: userDetailsResponse.data } });
            } else {
              // Credentials are incorrect, handle accordingly
              console.log('Invalid credentials');
              alert.log('Invali Credentials');
            }
          }  catch (error) {console.error('Error during login:', error);
          console.error('Error during login:', error);
          // You may want to display an error message to the user
        }
      };
      

   
      
    
    

    

    return (
        <section className="h-200 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 flex justify-center items-center">
             <div className="container flex justify-center items-center bg-slate-400">
            <div className="row justify-center">
                <div className="col-xl-11 col-md-11 cardhead flex">
                    <div className="cardmain card rounded-3 text-black w-1/2">
                        <div className="row g-0">
                            <div className="col-lg-6 cardheight">
                                <div className="card-body d-flex flex-col items-center">
                                    <div className="flex items-center flex-col">
                                        <img src={logo2} className="uspllogost " alt="logo2" />
                                        <h4 className="mt-1 pb-1">WELCOME TO MOTA</h4>
                                        <h5 className="mt-1 pb-1">(My Options Trading App)</h5>
                                    </div> 
                                    <div className="d-flex align-items-center justify-content-end">
    
</div>
                                        <div className="Radio-container">
                                           <div className={`form-check ${isRegister ? 'active' : ''}`} id="check1hn">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                id="check2"
                                                value="ZERODHA"
                                                checked={isRegister}
                                                onChange={() => handleRadioChange('register')} />
                                            <label className="form-label labelregisterformlabelz" htmlFor="check2">
                                                Register User
                                            </label>
                                        </div>
                                             <div className={`form-check ${isEditMode ? 'active' : ''}`} id="check2hn">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            id="check1"
                                            value="ZERODHA"
                                            checked={isEditMode}
                                            onChange={() => handleRadioChange('edit')} />
                                        <label className="form-label labelregisterformlabelz" htmlFor="check1">
                                            Edit User Details
                                        </label>
                                    </div> 
                                </div>
                                

                                

                                {isRegister ? ( 
                                <div id="zerodha1">
                                    <form onSubmit={handleSubmit}>

                                        {/* ... (rest of the form) */}
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
                                        <div className="form-group row flex">
                                            <label className="form-label  col-sm-4 lbrokername text-left" for="BrokerName">Broker Name</label>
                                            <div className="col-sm-8 flex-grow" >
                                                <div className="input-group  flex">
                                                    <span className="input-group-addon">
                                                        {/* <i className="fa fa-id-badge icon"></i> */}
                                                        <FontAwesomeIcon icon={faIdBadge} className="icon" />
                                                    </span>
                                                    <select id="listBroketname" name="UserType" className="form-control " placeholder="limit" value={formData.UserType} onChange={handleInputChange} >
                                                        {/*<!-- <select id="myDropdown"> -->*/}
                                                        <option value="">Select Your Broker</option>
                                                        <option value="Zerodha">Zerodha</option>
                                                        <option value="Alice Blue">Alice Blue</option>
                                                        <option value="Nuvama">Nuvama</option>
                                                        <option value="Kotak Securities">Kotak Securities</option>
                                                        {/* <option value="Interactive Broker">Interactive Broker</option>
                                                        <option value="ICICI Direct">ICICI Direct</option>
                                                        <option value="Angle One">Angle One</option>
                                                        <option value="5Paise">5Paise</option>
                                                        <option value="FYERS">FYERS</<option value="DHAN">DHAN</option>
                                                        <option value="Stoxkart">Stoxkart</option>
                                                        <option value="Master Trust">Master Trust</option>
                                                        <option value="IIFL Securities">IIFL Securities</option> */}


                                                        
                                                    </select>
                                                    <label id="brokername" className="redtext" style={{ display: 'none' }}>Select Your broker from dropdown</label>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="form-group row">
                                            <label for="zeroid" className="col-sm-4 col-form-label user_zeroid">USER ID</label>
                                            <div className="col-sm-8">
                                                <div className="input-group">
                                                <span className="input-group-addon">
                                                  <FontAwesomeIcon icon={faUser} className="icon" />
                                               </span>
                                                    <input type="text" id="zeroid" className="form-control"
                                                        placeholder="User ID Provided by broker" />
                                                    <label id="zerodhauserid" className="redtext" style={{ display: 'none' }}>Username is
                                                        required</label>
                                                </div>
                                            </div>
                                        </div> */}
                                        <div className="form-group row flex">
    <label for="zeroid" className="col-sm-4 col-form-label user_zeroid text-left">USER ID</label>
    <div className="col-sm-8 flex-grow">
        <div className="input-group flex" >
       
            <span className="input-group-addon">
            {/* <i className="fa fa-user icon"></i> */}
            <FontAwesomeIcon icon={faUser} className="icon" />
            </span>
            <input type="text" id="zeroid" name="UserName" className="form-control" placeholder="User ID Provided by broker"  value={formData.UserName} onChange={handleInputChange} />
        </div>
        <label id="zerodhauserid" className="redtext" style={{ display: 'none' }}>Username is required</label>
    </div>
</div>



                                        <div className="form-group row flex">
                                            <label for="user_password" className="col-sm-4 text-left col-form-label user_zeropw">PASSWORD</label>
                                            <div className="col-sm-8 flex-grow">
                                                <div className="input-group   flex">
                                                    <span className="input-group-addon ">
                                                        {/* <i className="fa fa-key icon"></i> */}
                                                        <span className="input-group-addon">
                                                            <FontAwesomeIcon icon={faKey} className="icon" /></span>
                                                    </span>
                                                    <input type="password" id="user_zeropassword" name="Password" value={formData.Password} className="form-control custom-input"
                                                        placeholder="Password"  onChange={handleInputChange} />
                                                    <label id="zerodhauserpwsbl" className="redtext" style={{ display: 'none' }}>Password not
                                                        matched</label>
                                                    <span className="input-group-addon">
                                                        {/* <i className="fa fa-eye icon" id="icon-Password"></i> */}
                                                        <FontAwesomeIcon icon={faEye} className="icon" />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                       
                                        <div className="form-group row flex">
                                            <label className="form-label user_zeroentrpw col-sm-4 text-left" for="form2Example22">REENTER PASSWORD</label>
                                            <div className="col-sm-8 flex-grow" >
                                                <div className="input-group  flex">
                                                    <span className="input-group-addon ">
                                                        {/* <i className="fa fa-unlock icon"></i> */}
                                                         <FontAwesomeIcon icon={faKey} className="icon" />
                                                        
                                                    </span>
                                                    <input type="password" id="user_zeroretrpassword" className="form-control"
                                                        placeholder="Re-enter password" />
                                                    {/* <i className="fa fa-eye icon" id="icon-retr-Password"></i> */}
                                                    {/* <FontAwesomeIcon icon={faEye} id="icon-retr-Password" /> */}
                                                    <label id="zerodhauserrentpwsbl" className="redtext" style={{ display: 'none' }}>Password not
                                                        matched</label>
                                                        <span className="input-group-addon ">
                                                        {/* <i className="fa fa-unlock icon"></i> */}
                                                         <FontAwesomeIcon icon={faEye} className="icon" />
                                                        
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <input type="submit" className=" btn btn-primary btn-block fa-lg  mb-3" value="Register"
                                            id="btnRegister" />
                                        {/* <input type="submit" className="btn btn-primary btn-block fa-lg mb-3" value="Register" id="btnRegister" /> */}
                                        <p id="successregister" style={{ display: 'none' }}>
                                            Successfully register

                                        </p>

                                        <div class="Back-Btn">
<a href="/"><small style={{ color:'purple', fontSize: '1rem', fontWeight: 600}}>Back Home</small></a>
</div>
                                    </form>
                                    
                                 
                                </div> ) : (
 <form action="/register" onSubmit={handleEditSubmit} method="post">

 <div id="editdiv">

     <div className="form-group row flex">
         <div className="form-label col-sm-4  text-left">
             <label className="form-label" for="form2Example22">USER ID</label>
         </div>
         <div className="col-sm-8 flex-grow">
             <div className="input-group  flex">
                 <span className="input-group-addon">
                     {/* <i className="fa fa-user icon"></i> */}
                     <FontAwesomeIcon icon={faUser} className="icon" />
                 </span>
                 <input 
                 type="text" id="edit_username" name="UserName" className="form-control" placeholder="Enter User Id"  value={credentials.userId}  onChange={handleCredentialChange}
                     required />
                 <label id="usernamelbl" className="redtext" style={{ display: 'none' }}>Username is required</label>
             </div>
         </div>
     </div>
     <div className="form-group row flex">
         <div className="form-label col-sm-4 text-left">
             <label className="form-label " for="form2Example22">Password</label>
         </div>
         <div className="col-sm-8 flex-grow">
             <div className="input-group flex ">
                 <span className="input-group-addon">
                     {/* <i className="fa fa-key icon"></i> */}
                     <FontAwesomeIcon icon={faKey} className="icon" />
                 </span>
                 <input type="password" id="edit_password" className="form-control" placeholder="Enter Password" name="Password" value={credentials.Password}
            onChange={handleCredentialChange} required />
                 <label id="passlbl" className="redtext" style={{ display: 'none' }}>Password is required</label>
                 <span className="input-group-addon ">
                     {/* <i className="fa fa-eye icon" id="edit_icon-Password"></i> */}
                     {/* <FontAwesomeIcon icon={faEye} className="edit_icon-Password"></FontAwesomeIcon> */}
                     <FontAwesomeIcon icon={faEye} className="icon" />

                 </span>
             </div>
         </div>
     </div>
     <div id="errorMessage" style={{ color: 'red' }}></div>
     {/*<!-- <label className> Invalid Username or Password</label > -- > */}
         < input type="submit" className=" btn btn-primary btn-block fa-lg  mb-3" value="Submit"
     id="btnRegister" />

<div class="Back-Btn">
<a href="/"><small style={{ color:'purple', fontSize: '1rem', fontWeight: 600}}>Back Home</small></a>
</div>
 </div>
 
</form>

                                )
                                
                            }
                            </div>
                        </div>
                        {/* ... (rest of the code)  isEdit starts*/}
                        {/* {isEditMode && (
                       
                        )}
                         */}




                        
                        
                    </div>
                </div>




                <div className="col-lg-6  text-white bg-gradient-to-r from-indigo-500 w-1/2">
                    <div className="card-body1">
                        <h4 className="mb-4 areasvichar d-flex" id="suvichararea"></h4>
                        <div className="text-white  areasvicharhead text-black">
                        
                        {/* <div id="thoughtOfTheDay">
            <h3 style={{ textDecoration: 'underline', fontSize: '1.2rem', color: 'black' }}>Thought of the Day</h3>
            {thoughtOfTheDay ? (
              <p>{ThoughtOfTheDay}</p>
            ) : (
              <p>No thought of the day available</p>
            )}
          </div> */}
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
        </div>;

    </div>
    {showSuccessModal && (
        <div style={{ fontFamily: 'Poppins, sans-serif' }}>
        <RegisterModal
    
          title="Registration Successful!"
          message="Following a successful registration to enable the functionality of the USPL Mota app for trading on your mobile, laptop, or desktop, kindly send an email to info@usplbot.com containing your API key, API secret, and TOTP."
          onClose={() => setShowSuccessModal(false)}
         
        />
        </div>
      )}
    </section>
  
  );
};


export default RegistrationPage
