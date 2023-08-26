import React, { useState } from "react";
import visa from "../../assets/visa.svg";
import SubmitButton from "../../shared/Buttons/SubmitButton";
import ProfileButton from "../../shared/Buttons/ProfileButton";
import { axiosInstance } from "../../axios";

const Modal = ({ setModalTransaction, allCards }) => {
    const [valute, setValute] = useState(null);
    const [money, setMoney] = useState(0)
    const [first, setFirst] = useState({
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

    const [second, setSecond] = useState({
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

    async function handleSubmit() {
        try {
            const response = await axiosInstance.post(
                "/api/transactions/create-transaction",{
                    amount: +money,
                 currency_name: second.currency,
                 sender_card_number: first.card_number.toString(),
                 sender_bank: first.bank,
                 receiver_card_number: second.card_number.toString(),
                 signature: "any string"
                  },
                {
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`,
                    },
                }
                
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="w-full h-full z-50 fixed top-0 left-0 backdrop-blur-lg flex items-center justify-center bg-[rgba(31,31,31,0.18)]">
            <div className="w-[824px] h-[630px] bg-white rounded-[20px] flex flex-col items-center">
                <div
                    onClick={() => setModalTransaction((e) => !e)}
                    className="-mr-[700px] mt-[20px] cursor-pointer text-blue01"
                >
                    Х
                </div>
                <span className="w-full block text-center font-[700] text-[32px] mt-[46px]">
                    Перевод
                </span>
                <div className="flex gap-10 items-center mt-[47px]">
                    <div className="">
                        <div className="pt-[8px] pb-[23px] px-[18px] bg-white inline-block rounded-[20px] shadow-xl">
                            <div className="flex flex-col items-center">
                                <span className="font-[500] text-[16px]">
                                    Выбрать счет откуда:
                                </span>
                                <div
                                    className={`w-[148px] h-[170px] bg-gradient-to-b from-[#F2EFF4] to-[#B8A9C6] rounded-[20px] shadow-xl px-[16px] py-[24px]`}
                                >
                                    <div className="">
                                        <img src={visa} alt="" />
                                    </div>
                                    <div className="flex flex-col mt-[30px]">
                                        <span className="text-[11px]">
                                            Salary
                                        </span>
                                        <span className="text-[17px] font-[700]">
                                            {first.currency} {first.balance}
                                        </span>
                                        <span className="text-[11px]">
                                            **
                                            {
                                                +first.card_number
                                                    .toString()
                                                    .slice(-4)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <select
                                    onClick={(event) => {
                                        setFirst(
                                            JSON.parse(
                                                event.target.selectedOptions[0].getAttribute(
                                                    "data-card"
                                                )
                                            )
                                        );
                                    }}
                                    name=""
                                    id=""
                                >
                                    {allCards.map((el) => (
                                        <option
                                            data-card={JSON.stringify(el)}
                                            value={el.card_number}
                                        >
                                            {el.card_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="w-[230px] pt-[24px]">
                            <span>Сумма перевода:</span>
                            <input
                                type="text"
                                name=""
                                id=""
                                className="border-none py-[14px] px-[23px] shadow-xl rounded-[16px] outline-none mt-[4px]"
                                placeholder="5.000"
                                value={money}
                                onChange={(e)=> setMoney(e.target.value)}
                            />
                        </div>
                    </div>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        viewBox="0 0 60 60"
                        fill="none"
                    >
                        <path
                            d="M9.71339 52.0969C14.003 56.0362 19.3471 58.6417 25.0932 59.5952C30.8393 60.5488 36.7389 59.8091 42.0715 57.4666C47.4042 55.124 51.9392 51.28 55.1229 46.4037C58.3066 41.5274 60.0013 35.83 60 30.0069H55.0008C55.0012 35.0401 53.4812 39.9561 50.6398 44.1112C47.7985 48.2662 43.7683 51.4667 39.0769 53.2934C34.3856 55.1202 29.2518 55.488 24.3478 54.3489C19.4438 53.2098 14.9982 50.6167 11.5931 46.9092H18.8569C19.5198 46.9092 20.1556 46.6459 20.6243 46.1773C21.0931 45.7087 21.3564 45.0731 21.3564 44.4103C21.3564 43.7476 21.0931 43.112 20.6243 42.6434C20.1556 42.1748 19.5198 41.9115 18.8569 41.9115H7.21381C6.55088 41.9115 5.91509 42.1748 5.44633 42.6434C4.97757 43.112 4.71422 43.7476 4.71422 44.4103V56.0401C4.71422 56.7028 4.97757 57.3384 5.44633 57.807C5.91509 58.2757 6.55088 58.5389 7.21381 58.5389C7.87674 58.5389 8.51252 58.2757 8.98128 57.807C9.45004 57.3384 9.71339 56.7028 9.71339 56.0401V52.0919V52.0969ZM48.4169 13.1096H41.1531C40.4902 13.1096 39.8544 13.3728 39.3857 13.8415C38.9169 14.3101 38.6536 14.9457 38.6536 15.6084C38.6536 16.2712 38.9169 16.9068 39.3857 17.3754C39.8544 17.844 40.4902 18.1073 41.1531 18.1073H52.8012C53.4641 18.1073 54.0999 17.844 54.5687 17.3754C55.0374 16.9068 55.3008 16.2712 55.3008 15.6084V3.96873C55.3008 3.30599 55.0374 2.67039 54.5687 2.20177C54.0999 1.73314 53.4641 1.46986 52.8012 1.46986C52.1383 1.46986 51.5025 1.73314 51.0337 2.20177C50.565 2.67039 50.3016 3.30599 50.3016 3.96873V7.91693C46.0126 3.97274 40.6671 1.36303 34.9185 0.406736C29.1699 -0.549559 23.2671 0.188978 17.9315 2.53209C12.5959 4.87521 8.05867 8.72142 4.87421 13.6007C1.68975 18.4799 -0.00397509 24.1809 1.02509e-05 30.0069H4.99918C4.99873 24.973 6.51905 20.0564 9.36101 15.9009C12.203 11.7455 16.2341 8.54499 20.9263 6.71866C25.6185 4.89233 30.7531 4.52531 35.6575 5.66567C40.5619 6.80604 45.0075 9.40062 48.4119 13.1096H48.4169Z"
                            fill="#23445C"
                        />
                    </svg>
                    <div className="">
                        <div className="pt-[8px] pb-[23px] px-[18px] bg-white inline-block rounded-[20px] shadow-xl">
                            <div className="flex flex-col items-center">
                                <span className="font-[500] text-[16px]">
                                    Выбрать счет откуда:
                                </span>
                                <div
                                    className={`w-[148px] h-[170px] bg-gradient-to-b from-[#F2EFF4] to-[#B8A9C6] rounded-[20px] shadow-xl px-[16px] py-[24px]`}
                                >
                                    <div className="">
                                        <img src={visa} alt="" />
                                    </div>
                                    <div className="flex flex-col mt-[30px]">
                                        <span className="text-[11px]">
                                            Salary
                                        </span>
                                        <span className="text-[17px] font-[700]">
                                            {second.currency} {second.balance}
                                        </span>
                                        <span className="text-[11px]">
                                            **
                                            {
                                                +second.card_number
                                                    .toString()
                                                    .slice(-4)
                                            }
                                        </span>
                                    </div>
                                </div>
                                <select
                                    onClick={(event) => {
                                        setSecond(
                                            JSON.parse(
                                                event.target.selectedOptions[0].getAttribute(
                                                    "data-card"
                                                )
                                            )
                                        );
                                    }}
                                    name=""
                                    id=""
                                >
                                    {allCards.map((el) => (
                                        <option
                                            data-card={JSON.stringify(el)}
                                            value={el.card_number}
                                        >
                                            {el.card_number}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className="w-[230px] pt-[24px]">
                            <div className="w-[230px] pt-[24px]">
                                <span>Сумма перевода:</span>
                                <div className=" shadow-xl rounded-[16px] outline-none mt-[4px] overflow-hidden">
                                    <ul className="flex justify-between h-full">
                                        {[...new Array(6)].map((_, i) => (
                                            <li
                                                className={`${
                                                    valute === i
                                                        ? "bg-[#565656] text-white"
                                                        : ""
                                                } h-full w-full text-center py-[14px]`}
                                                onClick={() => setValute(i)}
                                            >
                                                $
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>
                <div onClick={handleSubmit}>
                            <ProfileButton text="Перевести" />
                        </div>
            </div>
        </div>
    );
};

export default Modal;
