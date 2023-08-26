import React from "react";
import circle from "../../assets/circle.png";
import arrow from "../../assets/arrow.png";

const DropBox = ({ title, descr, price }) => {
    return (
        <div className="w-full flex pl-[15px] pr-[36px] py-[14px] justify-between items-center shadow-lg rounded-[20px] mt-[16px] cursor-pointer">
            <img src={circle} alt="" className="w-[40px] h-[40px]" />
            <div className="flex flex-col">
                <span className="text-[16px] font-[700]">{title}</span>
                <p className="text-[12px]">{descr}</p>
            </div>
            <span>{price}</span>
            <img src={arrow} alt="" className="w-[27px] h-[27px]" />
        </div>
    );
};

export default DropBox;
