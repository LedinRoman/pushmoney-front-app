import React from "react";

const DesignCardItem = ({ title }) => {
    return (
        <div className="w-[682px] h-[96px] bg-white rounded-[20px] flex items-center justify-between px-[30px]">
            <div className="flex items-center gap-[27px]">
                {/* <img src="" alt="" /> */}
                <div className="w-[108px] h-[62px] bg-blue-500 rounded-[20px]"></div>
                <span className="font-[700]">{title}</span>
            </div>

            <div>
                <label class="form-control">
                    <input
                        type="radio"
                        id="contactChoice1"
                        name="contact"
                        value="email"
                        className="w-[20px] h-[20px] appearance-none  rounded-full border-[2px] checked:bg-blue-400 checked:border-blue-500"
                    />
                </label>
            </div>
        </div>
    );
};

export default DesignCardItem;
