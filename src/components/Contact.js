import React, { useRef, useState } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image from '../images/WhatsApp Image 2024-01-09 at 21.23.35.jpeg';
const Contact = React.forwardRef((props, ref)  => {
    const form = useRef();
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const [contact,setContact]=useState("");
    const [message,setMessage]=useState("");
    // const notify = () => toast("Message sent successfully.Our Team will contact you within 8 working days");


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y3udtnm', 'template_kcwhpow', form.current, 'TJyc7_o85Pt_Ykwh9')
          .then((result) => {
              console.log(result.text);
              console.log("Happy");
              toast.success(' Message sent successfully.Our Team will contact you within 7 working days', {
                position: "top-right",
                autoClose: 5000,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            }, (error) => {
              console.log(error.text);
          });
      };


  return (
    <div className='w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] mb-12' ref={ref}>

     <div class="relative w-full h-96 flex justify-center " >
  {/* <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.2386362926895!2d-97.78526902464867!3d30.201735774844742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b354fff7171d%3A0x9386acbe56d3fc62!2sBlueberry%20Hill%2C%20Austin%2C%20TX%2078745%2C%20USA!5e0!3m2!1sen!2sin!4v1702271420357!5m2!1sen!2sin"
    width="1200"
    height="450"
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="responsive Google Map"
    class="absolute inset-0 w-full h-full rounded-md"
  ></iframe> */}
   <img
  className='h-full w-5/6 mb-4 items-center	'
  src={image} /> 
</div> 

  <section class="mt-12 ">
    <div class="container px-6 py-12 mx-auto">
        <div>
            <p class="text-lg font-semibold leading-7 text-indigo-600">Contact us</p>

            <h1 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Chat to our friendly team</h1>

            <p class="mt-3 text-gray-500 dark:text-gray-400">We’d love to hear from you. Please fill out this form or shoot us an email.</p>
        </div>

        <div class="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div clas>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>

                    <h2 class="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Email</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-base font-medium text-indigo-600 dark:text-blue-400">info@usplbot.com</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Live chat</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Our friendly team is here to help.</p>
                    <p class="mt-2 text-base font-medium text-indigo-600 dark:text-blue-400">Start new chat</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Office</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Come say hello at our office HQ.</p>
                    <p class="mt-2 text-base font-medium text-indigo-600 dark:text-blue-400">A1509 Blurberry Hills South Congress,Austin, TX 78704 United States</p>
                </div>

                <div>
                    <span class="inline-block p-3 text-blue-500 rounded-full bg-blue-100/80 dark:bg-gray-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    
                    <h2 class="mt-4 text-lg font-semibold text-gray-800 dark:text-white">Phone</h2>
                    <p class="mt-2 text-sm text-gray-500 dark:text-gray-400">Mon-Fri from 8am to 5pm.</p>
                    <p class="mt-2 text-base font-medium text-indigo-600 dark:text-blue-400">+1 5589 55488 55</p>
                </div>
            </div>

            <div class="p-4 py-6 rounded-lg bg-gray-50 dark:bg-gray-800 md:p-8">
                <form ref={form}  onSubmit={sendEmail}>
                    <div class="-mx-2 md:items-center md:flex">
                        <div class="flex-1 px-2">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">First Name</label>
                            <input onChange={(e)=>setFirstName(e.target.value)} type="text" placeholder="John" name="from_name" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-blue-400 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="flex-1 px-2 mt-4 md:mt-0">
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Last Name</label>
                            <input onChange={(e)=>setLastName(e.target.value)} type="text" placeholder="Doe" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-blue-400 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email address</label>
                        <input onChange={(e)=>setEmail(e.target.value)}  type="email" placeholder="johndoe@example.com" name="from_email" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-blue-400 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Mobile Number</label>
                        <input onChange={(e)=>setContact(e.target.value)} type="tel" placeholder="+1 5589 55488 55" name="contact_name" class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-blue-400 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>

                    <div class="w-full mt-4">
                        <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Message</label>
                        <textarea onChange={(e)=>setMessage(e.target.value)} name="message" class="block w-full h-32 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-purple-700 dark:focus:border-blue-400 focus:ring-purple-700 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Message"></textarea>
                    </div>

                    <button  class="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform  bg-[#51087E] hover:bg-purple-700 rounded-lg  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Send message
                    </button>
                </form>
                <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}
)


export default Contact;
