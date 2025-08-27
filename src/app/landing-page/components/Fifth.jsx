
import React from 'react'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa6'
import { RiMessengerLine } from 'react-icons/ri'
const Fifth = () => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-[#FFE28B] to-[#ED8B4D]">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Take Orders From Social Apps <br /> Your Customers Already Use
    </h2>
    <p className="text-gray-800 max-w-2xl mx-auto mb-16 text-black">
        Whether it’s WhatsApp, Messenger, or Instagram — Mirar AI turns every
        message into a complete order flow: menu → payment → delivery → review.
    </p>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* WhatsApp */}
        <div className="bg-orange-100 rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 transition">
            <FaWhatsapp size={58} className="text-blue-500 mb-4" />
            <h3 className="font-bold text-2xl mb-2 text-black">WhatsApp</h3>
            <p className="text-gray-700 text-sm text-black">
                Accept orders, collect payments, and arrange delivery, all in one chat.
            </p>
        </div>

        {/* Messenger */}
        <div className="bg-orange-100 rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 transition">
            <RiMessengerLine size={58} className="text-blue-500 mb-4" />
            <h3 className="font-bold text-2xl mb-2 text-black">Messenger</h3>
            <p className="text-gray-700 text-sm text-black">
                Customers order, pay, and track deliveries without leaving Messenger —
                all within Messenger itself.
            </p>
        </div>

        {/* Instagram */}
        <div className="bg-orange-100 rounded-2xl shadow p-8 flex flex-col items-center hover:scale-105 transition">
            <FaInstagram size={58} className="text-blue-500 mb-4" />
            <h3 className="font-bold text-2xl mb-2 text-black">Instagram</h3>
            <p className="text-gray-700 text-sm text-black">
                Turn DMs into sales, from menu browsing to payments and delivery.
                Mirar AI trains itself instantly.
            </p>
        </div>
    </div>
</section>
  )
}

export default Fifth