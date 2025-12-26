import React from 'react'
// import { useModal } from './ModalContext';

const Btn = () => {
  // const { openModal } = useModal();
  

  const handleClick = () => {
  window.open("https://restaurant.mirar.ai", "_blank", "noopener=yes,noreferrer=yes");
};
  return (
    <button  onClick={handleClick}  className="
    bg-gradient-to-r from-[#367fea] to-[#74E5E6] 
    text-white font-medium
    px-4 py-2 text-sm
    sm:px-5 sm:py-2.5 sm:text-base
    md:px-6 md:py-3 md:text-md
    rounded-full shadow-md
    hover:opacity-90 transition
    cursor-pointer
  ">
    Start Taking Orders from Social
Media Now

  </button>
  )
}

export default Btn