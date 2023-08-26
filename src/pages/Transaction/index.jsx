import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import DropBox from "../../shared/DropBox";
import Footer from "../../components/Footer";
import Cards from "../../components/Cards";
import DesignCard from "../../components/DesignCard";
import Limit from "../../components/Limit";
import Recomended from "../../components/Recomended";
import CardsInformation from "../../components/CardsInformation";
import Rubl from "../../components/Rubl";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router";
import { axiosInstance } from "../../axios";
import { setCurrencies } from "../../redux/transaction/slice";
import plus from "../../assets/transaction/plus.png";

import no from "../../assets/transaction/no.png";
import witcher1 from "../../assets/transaction/witcher1.png";
import witcher2 from "../../assets/transaction/witcher2.png";
import bears from "../../assets/transaction/bears.png";
import bogat from "../../assets/transaction/bogat.png";
import woman from "../../assets/transaction/woman.png";
import cards from "../../assets/transaction/cards.png";
import ProfileButton from "../../shared/Buttons/ProfileButton";
import Modal from "../../components/Modal";

const Transaction = () => {
    const [country, setCountry] = useState("RUS");
    const [bank, setBank] = useState("GBK");
    const [cardType, setCardType] = useState("VISA");
    const [color, setColor] = useState("Синий");

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleBankChange = (event) => {
        setBank(event.target.value);
    };

    const handleCardTypeChange = (event) => {
        setCardType(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };
    const [newCard, setNewCard] = useState();
    const dispatch = useDispatch();
    const transaction = useSelector((state) => state.transaction);
    const { user } = useSelector((state) => state.profile);
    let mass = [];
    let littleMass = [];
    const [pag, setPag] = useState();
    const [index, setIndex] = useState(0);
    const [indexCard, setIndexCard] = useState(0);
    const [allCards, setAllCard] = useState([]);
    console.log(allCards);
    useEffect(() => {
        async function handleSubmit() {
            try {
                const response = await axiosInstance.get(
                    "/api/exchange-rates/currencies"
                );

                response.data.currencies.forEach((e, index) => {
                    littleMass.push(e);

                    if (
                        (index + 1) % 4 === 0 ||
                        index === response.data.currencies.length - 1
                    ) {
                        mass.push([...littleMass]); // Добавляем текущий littleMass в массив mass
                        littleMass = []; // Обнуляем littleMass
                    }
                });
                setPag(mass);
                dispatch(setCurrencies(response.data.currencies));

                const response2 = await axiosInstance.get(
                    "/api/cards/get-cards",
                    {
                        headers: {
                            authorization: `Bearer ${localStorage.access_token}`,
                        },
                    }
                );

                setAllCard(response2.data);
                console.log(allCards);
            } catch (error) {
                console.log(error);
            }
        }
        handleSubmit();
    }, []);

    async function handleSubmit() {
        setNewCard(false);
        try {
            const requestData = {
                card_country: country,
                card_type: cardType,
                bank: bank,
                meta: {},
                design_picture: color,
            };

            const response = await axiosInstance.post(
                "/api/cards/request-card",
                requestData,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`,
                    },
                }
            );
            const response2 = await axiosInstance.get("/api/cards/get-cards", {
                headers: {
                    authorization: `Bearer ${localStorage.access_token}`,
                },
            });

            setAllCard(response2.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className="profileBg h-full w-full">
                <Header />
                <div className="flex min-h-screen max-xl:px-[24px] xl:px-[113.5px] justify-center py-[85px] ">
                    <div className="flex h-[425px]  gap-10">
                        {/* Левая карточка */}
                        <div className="">
                          
                            <div className="w-[682px] bg-white rounded-[20px] px-[42px] py-[20px]">
                                <span className="font-[700]">Курс валют</span>
                                <div className="mt-[20px]">
                                    {pag &&
                                        pag[index].map((e) => {
                                            return (
                                                <div
                                                    key={e._id}
                                                    className=" border-t border-[#C7C7C7] pb-[8px] pt-[20px] text-[12px] px-10 flex justify-between"
                                                >
                                                    <div>
                                                        {e.first_cur +
                                                            "/" +
                                                            e.second_cur}
                                                    </div>
                                                    <div>{e.price}</div>
                                                    <div
                                                        className={
                                                            e.price_movement
                                                                .movement ===
                                                            "Up"
                                                                ? "text-green-500"
                                                                : "text-red-500"
                                                        }
                                                    >
                                                        {e.price_movement.value}
                                                    </div>
                                                    <div
                                                        className={
                                                            e.price_movement
                                                                .movement ===
                                                            "Up"
                                                                ? "text-green-500"
                                                                : "text-red-500"
                                                        }
                                                    >
                                                        {
                                                            e.price_movement
                                                                .percentage
                                                        }
                                                        %
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                                <span className="block w-full text-center text-[#1093FF] text-[14px] mt-[35px]">
                                    {pag &&
                                        pag.map((_, i) => (
                                            <span
                                                key={i}
                                                onClick={() => setIndex(i)}
                                                className={`px-1 cursor-pointer ${
                                                    index === i
                                                        ? "font-bold"
                                                        : ""
                                                }`}
                                            >
                                                {i + 1}
                                            </span>
                                        ))}
                                </span>
                            </div>
                            {/* <DesignCard /> */}

                            {allCards.length !== 0 && !newCard && (
                                <div className="pt-[60px]">
                                    <CardsInformation
                                        allCards={allCards}
                                        setNewCard={setNewCard}
                                    />
                                    <div className="pt-[60px]">
                                        <Recomended />
                                    </div>
                                </div>
                            )}
                            {newCard && (
                                <div className="mt-[99px] flex flex-col gap-[33px]">
                                    <div className="CardShadow w-[682px] h-[96px] pr-[25px] bg-white flex justify-between items-center">
                                        <img
                                            className="-mb-[25px]"
                                            src={no}
                                            alt=""
                                        />
                                        <div className="w-full text-start">
                                            <p className="CardChoise">
                                                Без дизайна
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 0
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(0)}
                                        ></div>
                                    </div>
                                    <div className="CardShadow w-[682px] px-[25px] h-[96px] bg-white flex justify-between items-center">
                                        <img src={witcher1} alt="" />
                                        <div className="w-full text-start pl-[25px]">
                                            <p className="CardChoise">
                                                Ведьмак
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 1
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(1)}
                                        ></div>
                                    </div>
                                    <div className="CardShadow w-[682px] px-[25px] h-[96px] bg-white flex justify-between items-center">
                                        <img src={witcher2} alt="" />
                                        <div className="w-full text-start pl-[25px]">
                                            {" "}
                                            <p className="CardChoise">
                                                Ведьмак
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 2
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(2)}
                                        ></div>
                                    </div>
                                    <div className="CardShadow w-[682px] px-[25px] h-[96px] bg-white flex justify-between items-center">
                                        <img src={bears} alt="" />
                                        <div className="w-full text-start pl-[25px]">
                                            {" "}
                                            <p className="CardChoise">
                                                Утро в сосновом лешу, Иван
                                                Шишкин
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 3
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(3)}
                                        ></div>
                                    </div>
                                    <div className="CardShadow w-[682px] px-[25px] h-[96px] bg-white flex justify-between items-center">
                                        <img src={bogat} alt="" />
                                        <div className="w-full text-start pl-[25px]">
                                            {" "}
                                            <p className="CardChoise">
                                                Богатыри, Виктор Васнецов{" "}
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 4
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(4)}
                                        ></div>
                                    </div>
                                    <div className="CardShadow w-[682px] px-[25px] h-[96px] bg-white flex justify-between items-center">
                                        <img src={woman} alt="" />
                                        <div className="w-full text-start pl-[25px]">
                                            <p className="CardChoise">
                                                Девочка с персиками, Валентин
                                                Серов
                                            </p>
                                        </div>
                                        <div
                                            className={`w-5 h-5 border-2 border-black rounded-full aspect-square cursor-pointer ${
                                                indexCard === 5
                                                    ? "border-blue01 bg-blue01/50"
                                                    : ""
                                            }`}
                                            onClick={() => setIndexCard(5)}
                                        ></div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Правая карточка */}

                        <div className=" flex flex-col items-center">
                            <div className="p-[24px] w-[480px] h-[325px] bg-white rounded-[20px] ">
                                <div className="flex justify-between items-center">
                                    <span className="font-[700]">
                                        Транзакции
                                    </span>

                                    <div className="dots flex gap-1">
                                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                        <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                                    </div>
                                </div>

                                <div className="text-[#7C8DB5]">
                                    <span className="text-[20px] font-[700] text-black">
                                        $ 2,193,21
                                    </span>
                                    | за месяц
                                </div>

                                <div className="">
                                    <DropBox
                                        title={"Dodol.id"}
                                        descr={"Added storage space 1TB "}
                                        price={"- $109,39"}
                                    />
                                    <DropBox
                                        title={"Dodol.id"}
                                        descr={"Added storage space 1TB "}
                                        price={"- $109,39"}
                                    />
                                </div>
                                <div className="text-center mt-[24px]">
                                    <span className="text-[#1093FF] text-[14px] border-b border-b-[#1093FF] cursor-pointer">
                                        Полная история
                                    </span>
                                </div>
                            </div>
                            {/* <div className="">
                                <div className="w-[446px] mt-[52px] rounded-[20px] px-[200px] py-[20px] bg-white flex items-center justify-center cursor-pointer">
                                    <img src={plus} alt="" />
                                </div>
                                <span className="block text-[12px] text-[#8C9BBE] text-end pr-4 pt-[10px]">У вас пока нет карт</span>
                            </div> */}
                            {/* <Cards /> */}
                            {allCards.length === 0 && !newCard && (
                                <div className="p-[24px] w-[480px] flex justify-center h-[125px] mt-[43px] bg-white rounded-[20px]">
                                    <button onClick={() => setNewCard(true)}>
                                        <img src={plus} alt="" />
                                    </button>
                                </div>
                            )}
                            {allCards.length !== 0 && !newCard && (
                                <div className="pt-[90px]">
                                    <Rubl balance={user.wallet.balance} />
                                    <div className="mt-[50px] flex gap-[44px]">
                                        <div className="w-[418px] h-[323px] bg-white rounded-[20px] px-[53px] py-[18px]">
                                            <span className="text-[18px] font-[700]">
                                                Лимит
                                            </span>
                                            <div className="flex flex-col gap-[20px] mt-[20px]">
                                                <Limit />
                                                <Limit />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {newCard && (
                                <div className=" flex pt-[99px] gap-[44px]">
                                    <div className="w-[418px] h-[736px] bg-white rounded-[20px] px-[53px] py-[18px] flex flex-col items-center">
                                        <div
                                            onClick={() => setNewCard(false)}
                                            className=" cursor-pointer w-full text-blue01 text-end"
                                        >
                                            X
                                        </div>

                                        <img src={cards} alt="" />
                                        <div className="flex flex-col gap-[18px]">
                                            <select
                                                className="h-[68px]"
                                                value={country}
                                                onChange={handleCountryChange}
                                            >
                                                <option value="RUS">
                                                    Россия
                                                </option>
                                                <option value="CHN">
                                                    Китай
                                                </option>
                                                <option value="ZAF">
                                                    Эмираты
                                                </option>
                                                <option value="IND">
                                                    Индия
                                                </option>
                                                <option value="BRA">
                                                    Бразилия
                                                </option>
                                            </select>
                                            <select
                                                className="h-[68px]"
                                                value={bank}
                                                onChange={handleBankChange}
                                            >
                                                <option value="GBK">
                                                    Государственный банк Китая
                                                </option>
                                                <option value="BNS">
                                                    Banrisul. Банк Бразилии
                                                </option>
                                                <option value="IUB">
                                                    Itaú Unibanco. Банк Бразилии
                                                </option>
                                                <option value="SBI">
                                                    Государственный банк Индии
                                                    (SBI)
                                                </option>
                                                <option value="DIB">
                                                    Исламский банк Дубая (DIB)
                                                </option>
                                                <option value="SBER">
                                                    Сбербанк России
                                                </option>
                                                <option value="TINKOFF">
                                                    Тинькофф
                                                </option>
                                                <option value="ALPHA">
                                                    Альфа Банк
                                                </option>
                                            </select>
                                            <select
                                                className="h-[68px]"
                                                value={cardType}
                                                onChange={handleCardTypeChange}
                                            >
                                                <option value="VISA">
                                                    VISA
                                                </option>
                                                <option value="mastercard">
                                                    mastercard
                                                </option>
                                                <option value="МИР">МИР</option>
                                            </select>
                                            <select
                                                className="h-[68px]"
                                                value={color}
                                                onChange={handleColorChange}
                                            >
                                                <option value="Синий">
                                                    Синий
                                                </option>
                                                <option value="Черный">
                                                    Черный
                                                </option>
                                            </select>
                                        </div>
                                        <div onClick={handleSubmit}>
                                            <ProfileButton text={"Сохранить"} />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-[700px]">
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default Transaction;
