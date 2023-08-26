import React from "react";
import box from "../../assets/box.svg";

const List = ({label}) => {
    return (
        <div className="relative mt-[16px]">
            <img
                src={box}
                alt=""
                className="absolute top-1/2 left-[15px] -translate-y-1/2"
            />
            <select
                name=""
                id="county"
                className="w-full h-[68px] px-[15px] pl-[71px] shadow-lg rounded-[12px] outline-none font-[700]"
            >
                <option selected hidden>
                    {label}
                </option>
                <option> red </option>
                <option> green </option>
                <option> yellow </option>
                <option> blue </option>
                <option> orange </option>
            </select>
        </div>
    );
};

export default List;
