// Modal.js
import React from 'react';
import previewImg from '../images/preview.png'
import { useNavigate } from 'react-router-dom';
const RegisterModal = ({ title, message, onClose }) => {
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/'); // Navigate to the main page
  };
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-8 max-w-md rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-extrabold text-purple-600">{title}</h2>
        </div>
        {/* <img
          src="../" // Replace with the actual URL of your GIF
          alt="Successful Registration"
          className="mx-auto mb-4"
        /> */}
        <div className="flex justify-center items-center">
  <img className="transition ease-in-out delay-300 hover:-translate-y-1 hover:scale-110 duration-300 xl:w-[10rem] mt-[5rem] xl:mt-0" src={previewImg} alt="" />
</div>

        <p className="text-gray-800">{message}</p>
        <div className="mt-6 flex justify-center">
          <a
            href="https://play.google.com/store/apps/details?id=com.uspl.uspl&hl=en-IN"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 focus:outline-none transform transition-transform duration-300 hover:scale-105"
          >
            Download from Play Store
          </a>
        </div>
        <div className="mt-4 text-center text-gray-600 text-sm">
          <p>Don't have an account yet?</p>
          <button
            className="text-purple-500 underline hover:text-purple-700 focus:outline-none"
            onClick={handleClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
