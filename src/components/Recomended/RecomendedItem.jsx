import React from 'react'
import netflix from '../../assets/netflix.png'

const RecomendedItem = () => {
  return (
    <div className="h-[230px] w-[180px] shadow-xl rounded-[20px] text-[15px] font-[500]">
      <img src={netflix} alt="" />
       <span className="w-full text-center block mt-[28px]">Оплатить подписку</span>
    </div>
  )
}

export default RecomendedItem
