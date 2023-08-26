import React from "react";

const InputDefault = ({ placeholder, ref,type }) => {
    // Инпут который можно переиспользовать везде
    return (
        <input
            ref={ref}
            type={type}
            className="w-full h-[48px] bg-[F2F2F2] border border-[E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
            placeholder={placeholder}
        />
    );
};

export { InputDefault };
