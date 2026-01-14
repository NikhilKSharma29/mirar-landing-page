import Image from 'next/image';
import React from 'react';

const FloatingChatIcon = () => {
  return (
    <div className="bg-gradient-to-r from-[#367fea] to-[#74E5E6] rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer">
      {/* Chat Icon SVG */}
      <Image 
        src="/images/chaticon.png"
        className="w-8 h-8" 
        width={32}
        height={32}
        alt="Chat Icon"
        
      />
       
    
    </div>
  );
};

export default FloatingChatIcon;