import React from "react";

const ServicesItem = ({ img }) => {
    return (
        <div className="px-[16px] py-[9px] w-14 text-center shadow-xl rounded-[20px]">
            <div className="w-full flex justify-center">
                <img src={img} alt="" />
            </div>
        </div>
    );
};

export default ServicesItem;
