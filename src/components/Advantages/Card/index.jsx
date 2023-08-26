import React from 'react'

const Card = ({src, title, desc}) => {
  return (
    <div className='flex flex-col justify-center items-center gap-[20px] cardShadow bg-white rounded-[10px] pb-[60px] px-[30px] pt-[40px] w-[326px] h-[275px]'>
        <img src={src} alt="card icon" className='w-[90px]' />
        <h3 className=' text-[25px] font-semibold font-poppins text-blue02'>{title}</h3>
        <p className=' text-[15px] font-medium text-gray01'>{desc}</p>
    </div>
  )
}

export default Card