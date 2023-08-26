import React from "react";
import ProfileButton from "../../shared/Buttons/ProfileButton";
import List from "../../shared/List";
import cards from "../../assets/cards.png";
const Cards = () => {
    return (
        <div className="">
            <div className="w-[480px] h-[736px] bg-white mt-[67px] rounded-[20px] flex flex-col items-center">
                <div className="cards pt-[47px] w-full flex justify-center">
                    <img src={cards} alt="" />
                </div>
                <div className="w-[434px]">
                    <List label={"Страна"} />
                    <List label={"Банк"} />
                    <List label={"Тип карты"} />
                    <List label={"Цвет"} />
                </div>

                <div className="w-full flex justify-center mt-[36px]">
                    <ProfileButton text={"Сохранить"} />
                </div>
            </div>
        </div>
    );
};

export default Cards;
