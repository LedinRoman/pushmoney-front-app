import React, { useState } from "react";
import plus from "../../assets/plus.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "./style.css";
import ServicesItem from "./ServicesItem";
import arrows from "../../assets/arrows.svg";
import money from "../../assets/money.svg";
import burger from "../../assets/burger.svg";
import settings from "../../assets/setting.svg";
import visa from "../../assets/visa.svg";
import Recomended from "../Recomended";
import Modal from "../Modal";

const CardsInformation = ({ allCards, setNewCard }) => {
    const [modalTransaction, setModalTransaction] = useState(false);
    const [index, setIndex] = useState(0);
    const [activeCard, setActiveCard] = useState({
        balance: 0,
        bank: "",
        card_country: "",
        card_cvv: 0,
        card_exp: "",
        card_number: 0,
        card_type: "",
        created_at: "",
        currency: "",
        design_picture: "",
        limit: null,
        removed: false,
        status: "",
        updated_at: "",
        user_id: "",
        _id: "",
    });
    console.log(activeCard);
    return (
        <div className="w-[765px] rounded-[20px] bg-white">
            {modalTransaction && (
                <Modal setModalTransaction={setModalTransaction} allCards={allCards} />
            )}
            <div className="flex justify-between p-[24px]">
                <span>Карты</span>
                <img
                    onClick={() => setNewCard(true)}
                    src={plus}
                    alt=""
                    className="w-[28px] h-[28px]"
                />
            </div>
            <div className="">
                <Swiper
                    slidesPerView={5}
                    spaceBetween={0}
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={(e) => {
                        setIndex(e.realIndex);
                    }}
                    modules={[Pagination]}
                    className="mySwiper overflow-y-visible h-[200px]"
                >
                    {allCards.map((e, i) => {
                        return (
                            <SwiperSlide
                                key={i}
                                className="flex justify-center"
                                onClick={() => setActiveCard(e)}
                            >
                                <div
                                    className={`${
                                        index === i - 2 ? "scale-110" : ""
                                    } w-[148px] h-[170px] bg-gradient-to-b from-[#F2EFF4] to-[#B8A9C6] rounded-[20px] shadow-xl px-[16px] py-[24px]`}
                                >
                                    <div className="">{e.card_type}</div>
                                    <div className="flex flex-col mt-[30px]">
                                        <span className="text-[11px]">
                                            Salary
                                        </span>
                                        <span className="text-[17px] font-[700]">
                                            {e.currency} {e.balance}
                                        </span>
                                        <span className="text-[11px]">
                                            **
                                            {
                                                +e.card_number
                                                    .toString()
                                                    .slice(-4)
                                            }
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
            <div className="flex justify-between items-center flex-col px-[24px]">
                <div className="w-full mt-[27px] flex">
                    <div className="w-[500%]">
                        <div className="flex w-full items-center justify-between">
                            <span className="font-[700]">Информация</span>

                            <div className="dots flex gap-1">
                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                            </div>
                        </div>

                        <div className="w-full flex justify-between items-center pb-[18px] pt-4">
                            <span>Номер карты</span>
                            <span className="font-[700] text-[12px]">
                                **{+activeCard.card_number.toString().slice(-4)}
                            </span>
                        </div>
                        <div className="w-full flex justify-between items-center pb-[18px]">
                            <span>Баланс</span>
                            <span className="font-[700] text-[12px]">
                            {activeCard.currency} {activeCard.balance}
                            </span>
                        </div>
                        <div className="w-full flex justify-between items-center pb-[18px]">
                            <span>Валюта</span>
                            <span className="font-[700] text-[12px]">{activeCard.currency}</span>
                        </div>
                        <div className="w-full flex justify-between items-center pb-[18px]">
                            <span>Статус</span>
                            <span className="font-[700] text-[12px]">
                                {activeCard.card_exp.slice(2, 4)}/{activeCard.card_exp.slice(5, 7)} ({+activeCard.updated_at.slice(2,4) > activeCard.card_exp.slice(2, 4) ? "Disactive" : "Active"} )
                            </span>
                        </div>
                    </div>

                    <div className="flex flex-col h-auto justify-center gap-[8px] pb-[30px] w-full ml-[80px]">
                        <ServicesItem
                            img={arrows}
                            text={"Оплатить или перевести"}
                        />
                        <div onClick={()=> setModalTransaction(!modalTransaction)}>
                            <ServicesItem img={money} text={"Пополнить "} />
                        </div>
                        
                        <ServicesItem img={burger} text={"Реквизиты"} />
                        <ServicesItem img={settings} text={"Настройки"} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardsInformation;
