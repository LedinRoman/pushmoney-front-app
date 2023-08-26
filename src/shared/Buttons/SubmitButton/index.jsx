import React from "react";

const SubmitButton = ({text}) => {
    // Кнопка для всех форм
    return (
        <button className="outline-none py-[10px] bg-[#007AFF] text-white w-full rounded-md text-center">
            {text}
        </button>
    );
};

export default SubmitButton;
