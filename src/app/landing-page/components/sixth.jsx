"use client"
import React from 'react'
import Btn from './btn'
import { useState } from 'react'

const sixth = () => {
    const [billingCycle, setBillingCycle] = useState("monthly");
    
    return (
        <section id='pricing' className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 text-center bg-white">
            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
                Pays for Itself After a Few Orders
            </h2>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-12">
                <div className="flex bg-[#F2F2F2] rounded-full p-1">
                    <button
                        className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                            billingCycle === "monthly"
                                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                                : "text-gray-600"
                        }`}
                        onClick={() => setBillingCycle("monthly")}
                    >
                        Monthly
                    </button>
                    <button
                        className={`px-6 py-2 text-sm font-medium rounded-full transition ${
                            billingCycle === "yearly"
                                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white"
                                : "text-gray-600"
                        }`}
                        onClick={() => setBillingCycle("yearly")}
                    >
                        Yearly
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                {/* Starter Plan */}
                <div className="bg-[#F2F2F2] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-black">Starter Plan</h3>
                        <p className="text-4xl font-bold mb-2 text-black">
                            ${billingCycle === "yearly" ? "300" : "30"}
                            <span className="text-xl text-black">/{billingCycle === "yearly" ? "yr" : "mo"}</span>
                        </p>
                        {billingCycle === "yearly" && (
                            <p className="text-green-600 text-sm mb-4">Save 17% annually</p>
                        )}
                    </div>
                    <hr className="w-full border-gray-300 my-2" />
                    <ul className="text-gray-700 text-sm space-y-3 text-left my-6 flex-grow text-black">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>1 social channel</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Basic ordering automation</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Delivery partner integration</span>
                        </li>
                    </ul>
                    <div className="mt-auto pt-6">
                        <Btn className="w-full" />
                    </div>
                </div>

                {/* Growth Plan */}
                <div className="bg-[#F2F2F2] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-black">Growth Plan</h3>
                        <p className="text-4xl font-bold mb-2 text-black">
                            ${billingCycle === "yearly" ? "500" : "50"}
                            <span className="text-xl text-black">/{billingCycle === "yearly" ? "yr" : "mo"}</span>
                        </p>
                        {billingCycle === "yearly" && (
                            <p className="text-green-600 text-sm mb-4">Save 17% annually</p>
                        )}
                    </div>
                    <hr className="w-full border-gray-300 my-2" />
                    <ul className="text-gray-700 text-sm space-y-3 text-left my-6 flex-grow text-black">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>All socials (WhatsApp, Messenger, Instagram)</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Automated complaint handling</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>CRM dashboard</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Delivery partner integration</span>
                        </li>
                    </ul>
                    <div className="mt-auto pt-6">
                        <Btn className="w-full" />
                    </div>
                </div>

                {/* Pro Plan */}
                <div className="bg-[#F2F2F2] rounded-3xl shadow-md hover:shadow-lg transition-shadow duration-300 p-8 flex flex-col h-full">
                    <div className="mb-6">
                        <h3 className="text-xl font-semibold mb-3 text-black">Pro Plan</h3>
                        <p className="text-4xl font-bold mb-2 text-black">
                            ${billingCycle === "yearly" ? "950" : "99"}
                            <span className="text-xl text-black">/{billingCycle === "yearly" ? "yr" : "mo"}</span>
                        </p>
                        {billingCycle === "yearly" && (
                            <p className="text-green-600 text-sm mb-4">Save 20% annually</p>
                        )}
                    </div>
                    <hr className="w-full border-gray-300 my-2" />
                    <ul className="text-gray-700 text-sm space-y-3 text-left my-6 flex-grow text-black">
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>All features included</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Advanced integrations & analytics</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>CRM dashboard & behavior-based re-engagement</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Google review requests after every order</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-green-500 mr-2 mt-0.5">✔</span>
                            <span>Priority onboarding & support</span>
                        </li>
                    </ul>
                    <div className="mt-auto pt-6">
                        <Btn className="w-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default sixth;