import React from "react";
import { useDispatch } from "react-redux";

const InputProfile = ({title, placeholder, value, setValue}) => {
    const dispatch = useDispatch()
    return (
        <div className="flex flex-col">
            <span className="text-[25px] font-[500]">{title}</span>
            <input
                id="firstName"
                type="text"
                className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                placeholder={placeholder}
                onChange={(e)=> dispatch( setValue(e.target.value))}
                value={value}
            />
        </div>
    );
};

export default InputProfile;
