import React, { useState } from "react";
import que from "../../assets/Question.svg";
import rubl from "../../assets/rubl.svg";
import ServicesItem from "../CardsInformation/ServicesItem";
import arrows from "../../assets/arrows.svg";
import money from "../../assets/money.svg";
import burger from "../../assets/burger.svg";
import { axiosInstance } from "../../axios";
import { useDispatch } from "react-redux";
import { setProfile } from "../../redux/profile/slice";
import ProfileButton from "../../shared/Buttons/ProfileButton";
import Modal from "../Modal";

const Rubl = ({ balance }) => {
    const [modal, setModal] = useState(false);

    const [mani, setMoney] = useState(0);
    const dispatch = useDispatch();
    async function handleSubmit() {
        setModal(false);
        try {
            const response = await axiosInstance.post(
                "/api/user/deposit",
                { amount: +mani },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`,
                    },
                }
            );

            try {
                const response = await axiosInstance.get("/api/user/me", {
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`,
                    },
                });
                dispatch(setProfile(response.data));
            } catch (error) {
                console.log(error);
            }

            setMoney(0);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-[565px] bg-white rounded-[20px] px-[51px] py-[26px] flex flex-col items-center">
            <div className="flex w-full justify-between">
                <span className="text-[24px] font-[500]">Цифровой рубль</span>
                <img src={que} alt="" />
            </div>
            <img src={rubl} alt="" className="mt-[43px]" />
            <span className="text-[48px] font-[500] text-[#5E5E5D]">
                {balance}
            </span>
            <div className="flex gap-10 mt-[50px]">
                <ServicesItem img={arrows} />

                <ServicesItem img={burger} />
                <div onClick={() => setModal(!modal)}>
                    <ServicesItem img={money} />
                </div>
            </div>
            {modal && (
                <div className="CardShadow h-[265px] mt-[20px] w-[265px] bg-white flex flex-col items-center justify-center gap-[30px]">
                    <h2>Пополнить счёт</h2>
                    <input
                        value={mani}
                        onChange={(e) => setMoney(e.target.value)}
                        type="number"
                    />
                    <button onClick={handleSubmit}>
                        <ProfileButton text="Пополнить" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Rubl;
