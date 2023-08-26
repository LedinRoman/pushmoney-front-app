import React from "react";

const ProfileButton = ({ text, type }) => {
    return (
        <button className="px-[42px] py-[12px] bg-blue01 rounded-full text-white text-[21px] font-semibold" type={type}>
            {text}
        </button>
    );
};

export default ProfileButton;
