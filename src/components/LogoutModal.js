import React, { useState } from 'react';
import { Link } from 'react-router-dom';
const LogoutModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
    <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md">
      <div className="border-b p-4 flex items-center justify-between bg-gray-100 rounded-t-lg">
        <h2 className="text-xl font-semibold text-gray-800">Confirm Logout 🚪</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-800">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-6">
        <p className="text-gray-600 text-lg mb-4">Are you sure you want to logout? </p>
        <div className="flex justify-end space-x-4">
            <Link to="/">
            <button 
            onClick={onClose}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded"
          >
            Logout 🚀
          </button>
            </Link>
         
          <button 
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-2 rounded"
          >
            Cancel 🛑
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};
export default LogoutModal;