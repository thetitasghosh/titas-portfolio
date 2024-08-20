import Image from 'next/image';
import React from 'react';

const Card = ({data}) => {
  return (
    <div className='w-96 h-96 py-5 p-5 red rounded-md flex flex-col items-center justify-center'>
        <div className='w-full h-full'>
          <Image src={data.img} width={1000} height={500} className='w-full' alt='Titas Portfolio Projects'/>
        </div>
        <h1>{data.title}</h1>
    </div>
  );
}

export default Card;
