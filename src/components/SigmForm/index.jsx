import React from "react";
import { InputDefault } from "../../shared/InputDefault";
import { Link } from "react-router-dom";
import SubmitButton from "../../shared/Buttons/SubmitButton";
import telegram from "../../assets/telegram.png";

const SignInForm = () => {
    // Форма входа
    return (
        <form>
            <div className="flex flex-col mt-[68px]">
                <span className="pl-4 text-[11px] mb-2">Логин</span>

                {/* Инпут который используется везде */}

                <InputDefault placeholder={"Телефон"} />
            </div>
            <div className="flex flex-col mt-4">
                <span className="pl-4 text-[11px] mb-2">Пароль</span>

                {/* Инпут который используется везде */}

                <InputDefault placeholder={"Пароль"} />
            </div>
            <Link
                to={"/"}
                className="block w-full text-end mt-5 text-[#007AFF] text-[12px]"
            >
                Забыли пароль?
            </Link>
            <div className="mt-8">
                {/* Кнопка отправления любой формы */}

                <SubmitButton text="Вход"/>
            </div>

            {/* Ссылки на соц. сети */}

            <div className="flex gap-5 mt-[64px]">
                <Link to={"/"}>
                    <img src={telegram} alt="" />
                </Link>
                <Link to={"/"}>
                    <img src={telegram} alt="" />
                </Link>
            </div>
        </form>
    );
};

export { SignInForm };
