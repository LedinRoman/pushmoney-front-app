import React from "react";
import Card from "./Card";
import programms from "../../assets/advantages/programms.png";
import games from "../../assets/advantages/games.png";
import films from "../../assets/advantages/films.png";
const Advantages = () => {
    return (
        <div className="pt-[50px] pb-[120px] text-center max-xl:px-[24px] xl:px-[113.5px]">
            <h2 className="text-4xl max-xl:text:2xl text-purple01 font-bold mb-[7px]">
                Платите где хотите
            </h2>
            <p className="text-[20px] text-black font-medium mb-[71px]">
                Позвольте себе больше — получайте товары сейчас
            </p>
            <div className="flex justify-between max-xl:flex-col items-center gap-[54px]">
                <Card
                    src={programms}
                    title={"Программы"}
                    desc={"Adobe products, Microsoft"}
                />
                <Card
                    src={games}
                    title={"Игры"}
                    desc={
                        "Компьютерные игры для PC, которые можно купить в Steam"
                    }
                />
                <Card
                    src={films}
                    title={"Фильмы"}
                    desc={"Подписка на плащадках как Netflix"}
                />
            </div>
        </div>
    );
};

export default Advantages;
