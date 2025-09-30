"use client";
import React, { useState, useEffect } from "react";
import { useModal } from "./ModalContext";
import { createPortal } from "react-dom";
import { parsePhoneNumber, isValidPhoneNumber } from 'libphonenumber-js';


const ModalForm = () => {
  const { isOpen, closeModal } = useModal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("");

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      setStatus("");
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // clear error when typing
  };

  // Global Phone Validation Function using libphonenumber-js
  const validatePhone = (phone, defaultCountry = 'IN') => {
    // Check if phone is empty
    if (!phone || !phone.trim()) {
      return {
        isValid: false,
        error: "Contact number is required."
      };
    }

    try {
      // Parse the phone number with default country
      const phoneNumber = parsePhoneNumber(phone, defaultCountry);
      
      // Check if parsing was successful
      if (!phoneNumber) {
        return {
          isValid: false,
          error: "Invalid phone number format."
        };
      }
      
      // Validate the phone number
      if (!phoneNumber.isValid()) {
        return {
          isValid: false,
          error: `Please enter a valid phone number.`
        };
      }
      
      // Return success with formatted number
      return {
        isValid: true,
        error: null,
        formatted: phoneNumber.formatInternational(),
        e164: phoneNumber.number
      };
      
    } catch (error) {
      return {
        isValid: false,
        error: "Invalid phone number format."
      };
    }
  };

  // Validation logic
  const validate = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    } else if (formData.name.trim().length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    // Global phone validation using libphonenumber-js
    const phoneValidation = validatePhone(formData.phone, 'IN'); // Change 'IN' to your target country
    if (!phoneValidation.isValid) {
      newErrors.phone = phoneValidation.error;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // no errors
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) return; // stop if errors

    setStatus("loading...");
    console.log("Form Submitted:", formData);

    try {
      const res = await fetch("/api/route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        console.log("mail data", data);
        setStatus("Subscribed successfully!");
        setFormData({ name: "", email: "", phone: "" });
       
      } else {
        setStatus(`Error: ${data.error}`);
      }
    } catch (err) {
      setStatus("Something went wrong.");
      console.error(err);
    }
  };

  if (!isOpen) return null;

  return createPortal(
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
            Fill in your details and we'll reach out to you.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className={`w-full border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <input
              type="tel"
              name="phone"
              placeholder="Contact Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full cursor-pointer bg-gradient-to-r from-[#367FEA] to-[#74E5E6] text-white py-3 rounded-full font-semibold shadow-md hover:opacity-90 transition"
          >
            Submit
          </button>
          <p className="text-center text-gray-500 mt-2">{status}</p>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ModalForm;