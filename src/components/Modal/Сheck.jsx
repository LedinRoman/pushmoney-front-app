import React from "react";
import visa from "../../assets/visa.svg";
const Сheck = () => {
    return (
        <div className="pt-[8px] pb-[23px] px-[18px] bg-white inline-block rounded-[20px] shadow-xl">
            <div className="flex flex-col items-center">
                <span className="font-[500] text-[16px]">Выбрать счет откуда:</span>
                <div
                    className={`w-[148px] h-[170px] bg-gradient-to-b from-[#F2EFF4] to-[#B8A9C6] rounded-[20px] shadow-xl px-[16px] py-[24px]`}
                >
                    <div className="">
                        <img src={visa} alt="" />
                    </div>
                    <div className="flex flex-col mt-[30px]">
                        <span className="text-[11px]">Salary</span>
                        <span className="text-[17px] font-[700]">$2,230</span>
                        <span className="text-[11px]">**6917</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Сheck;