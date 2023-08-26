import React from "react";
import RecomendedItem from "./RecomendedItem";

const Recomended = () => {
    return (
        <div className="w-[682px] h-[357px] bg-white rounded-[20px] px-[40px] py-[24px]">
            <span className="text-[18px] font-[500]">Рекомендуем</span>
            <div className="flex justify-between mt-[23px]">
                <RecomendedItem />
                <RecomendedItem />
                <RecomendedItem />
            </div>
        </div>
    );
};

export default Recomended;
