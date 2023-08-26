import React from "react";

const SelectProfile = ({title}) => {
    return (
        <div>
            <label htmlFor="county" className="text-[25px] font-[500]">{title}</label>
            <select name="" id="county" className="w-full h-[54px] px-[15px] py-[13px] border border-[#C8C8C8] rounded-[6px] outline-none">
                <option> red </option>
                <option> green </option>
                <option> yellow </option>
                <option> blue </option>
                <option> orange </option>
            </select>
        </div>
    );
};

export default SelectProfile;
