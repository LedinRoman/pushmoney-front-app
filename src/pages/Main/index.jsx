import React from "react";

import mainBg from "../../assets/mainBg.png";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import AboutUs from "../../components/AboutUs";
import Advantages from "../../components/Advantages";
import { Navigate } from "react-router";
import { useSelector } from "react-redux";

const Main = () => {

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                <div className="xl:pl-[113.5px] pt-[45px] w-full justify-between flex max-xl:flex-col ">
                    <div className="max-w-[689px] max-xl:px-[24px]">
                        <h1 className="text-purple01 text-6xl max-xl:text-4xl font-bold tracking-[0.3px] mb-[15px]">
                            Открой для себя возможности с БРИКС
                        </h1>
                        <p className="max-w-[389px] mb-[45px] text-[21px]">
                            <strong>PushMoney</strong> позволит тебе создать
                            онлайн кошелек, расширить возможность переводов
                            денежных средств. <br />
                            Не упусти возможность создать онлайн кошелек.
                        </p>
                        <button className="px-[58px] py-[20px] bg-gradient-to-r from-purple01 to-orange01 rounded-full text-white text-xl mb-[91px]">
                            Создать
                        </button>
                    </div>
                    <img
                        className="-mb-[10px] relative right-0"
                        src={mainBg}
                        alt=""
                    />
                </div>
                <AboutUs />
                <Advantages />
            </main>
            <Footer />
        </div>
    );
};

export { Main };
