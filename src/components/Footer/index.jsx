import React from "react";
import wk from "../../assets/wk.png";
import telegram from "../../assets/telegram.png";

const Footer = () => {
    return (
        <footer className="h-[268px] w-full bg-purple02 max-xl:px-[24px] xl:px-[113.5px] flex items-center gap-[50px]">
            <div className="grid gap-[16px]">
                <h4 className="text-[18px] font-poppins text-white font-medium">+7 (945) 500-30-50</h4>
                <p className=" font-poppins font-[14px] text-white/50">Для звонков из любой точки мира</p>
                <div className="flex gap-[20px]">
                    <img className="w-[28px]" src={wk} alt="" />
                    <img className="w-[28px]" src={telegram} alt="" />
                </div>
            </div>
            <div className="grid gap-[16px]">
                <h4 className="text-[18px] font-poppins text-white font-medium">700</h4>
                <p className=" font-poppins font-[14px] text-white/50">Для бесплатных звонков на территории РФ</p>
                <div className=" opacity-0">_</div>
            </div>
        </footer>
    );
};

export default Footer;
