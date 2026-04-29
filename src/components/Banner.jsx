import React from 'react';

const Banner = () => {
  return (
    <div 
      className="bg-cover bg-center min-h-[60vh] w-full bg-no-repeat flex items-center mt-5 container mx-auto bg-[url('https://imgs.search.brave.com/BGCui8LLddF-IhrH63gbMe7lDsveyspjOi6krskAMxQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzAwLzU1Lzc3LzQ0/LzM2MF9GXzU1Nzc0/NDY1X3JZTTNDNEIy/ZVJPZk5RY1ZVcEhs/eDlFT1BEU1lKdzIw/LmpwZw')]"
      
    >
      <h1 className="text-white text-4xl">Banner</h1>
    </div>
  );
};

export default Banner;


// style={{ backgroundImage: "url('/banner.jpg')" }}