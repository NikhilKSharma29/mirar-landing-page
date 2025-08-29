"use client"
import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
import { createPortal } from "react-dom";

const ModalForm = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  // ⬅️ Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    // cleanup in case modal unmounts
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    closeModal();
    setFormData({
      name: "",
      email: "",
      contact: "",
    });
  };

  if (!isOpen) return null;

  return (
    createPortal(
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[99999] backdrop-blur-sm">
      <div className="bg-white w-[90%] max-w-md p-8 rounded-3xl shadow-2xl relative z-[100000]">
        
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition text-2xl"
        >
          ✕
        </button>
    
        {/* Header */}
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
          <p className="text-gray-500 mt-1 text-sm">
            Fill in your details and we’ll reach out to you.
          </p>
        </div>
    
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
    
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
    
          <input
            type="tel"
            name="contact"
            placeholder="Contact Number"
            value={formData.contact}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          />
    
          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-[#367FEA] to-[#74E5E6] text-white py-3 rounded-full font-semibold shadow-md hover:from-[#367FEA] hover:opacity-90 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    , document.body)
  );
};

export default ModalForm;
