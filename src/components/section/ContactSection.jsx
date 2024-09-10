import Image from 'next/image';
import React from 'react';

const ContactSection = () => {
  return (
    <div className='w-full h-screen gap-10 flex flex-col items-center justify-center redd p-2'>
      <h1 className='text-AthensGray desktop:text-5xl text-4xl'> Contact ↴</h1>
     <div className='border-ScienceBlue border desktop:h-28 w-[25rem] h-20 rounded-full desktop:w-[50rem] flex items-center gap-2 justify-start px-2'>
      <div className='desktop:size-24 size-16 overflow-hidden rounded-full'>
        <Image src={'/assets/me.png'} alt='Ttas Ghosh | ' width={500} height={500} className='w-full h-full'/>
      </div>
      <div className='text-AthensGray uppercase'>
        <h1 className='desktop:text-6xl text-2xl'>hi@titasghosh.com</h1>
      </div>
     </div>
    </div>
  );
}

export default ContactSection;
