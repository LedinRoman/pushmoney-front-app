import React from "react";
import grafik from "../../assets/grafik.svg";

const Limit = () => {
    return (
        <div className="w-[323px] h-[95px] border rounded-[20px] p-[20px] flex items-center justify-between cursor-pointer ">
            <div className=" flex items-center">
                <img src={grafik} alt="" />

                <div className="flex flex-col ml-[20px]">
                    <span className="text-[10px]">Лимит по карте *4552</span>
                    <span className="mt-[7px]">
                        <span className="font-[700] text-[14px]">$ 2,000</span>
                        /$5,000{" "}
                    </span>
                </div>
            </div>

            <div className="arrow w-5 h-5 border-t border-r rotate-45 "></div>
        </div>
    );
};

export default Limit;
