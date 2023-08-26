import React, { useEffect } from "react";
import singinbg from "../assets/regBg.png";
import logo from "../assets/Logo.png";
import { Link, useNavigate } from "react-router-dom";
import SubmitButton from "../shared/Buttons/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../axios";
import { setPassword, setPhone, setTokens } from "../redux/auth/slice";
import telegram from "../assets/telegram.png";

const SignIn = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const { password, phone } = useSelector(
        (state) => state.auth
    );
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/api/auth/sign-in", {
                phone: phone,
                password: password,
            });
            const { access_token, refresh_token } = response.data;
            dispatch(
                setTokens({
                    access_token: access_token,
                    refresh_token: refresh_token,
                })
            ); // Сохраняем токен в хранилище
            if (access_token !== null) {
                navigate("/");
            }
        } catch (error) {
            console.log(error);
        }
    }
    // Страница входа
    return (
        <>
            <div className="signIn flex">
                {/* Большое фото на странице входа */}

                <img
                    src={singinbg}
                    alt=""
                    className="w-[70vw] h-screen object-cover"
                />

                <div className="flex flex-col w-[30vw] items-center justify-center">
                    <div className="w-[330px] h-[440px]">
                        {/* Логотип формы */}

                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            {/* Форма входа */}

                            <form>
                                <div className="flex flex-col mt-[68px]">
                                    <span className="pl-4 text-[11px] mb-2">
                                        Логин
                                    </span>

                                    {/* Инпут который используется везде */}

                                  
                                    <input
                                        type={"tel"}
                                        className="w-full h-[48px] bg-[F2F2F2] border border-[E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
                                        placeholder={"Телефон"}
                                        value={phone}
                                        onChange={(e)=> dispatch(setPhone(e.target.value))}
                                    />
                                </div>
                                <div className="flex flex-col mt-4">
                                    <span className="pl-4 text-[11px] mb-2">
                                        Пароль
                                    </span>

                                    {/* Инпут который используется везде */}

                                   
                                    <input
                                        type={"password"}
                                        className="w-full h-[48px] bg-[F2F2F2] border border-[E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
                                        placeholder={"Пароль"}
                                        value={password}
                                        onChange={(e) => {
                                            dispatch(
                                                setPassword(e.target.value)
                                            );
                                        }}
                                    />
                                </div>
                                <Link
                                    to={"/"}
                                    className="block w-full text-end mt-5 text-[#007AFF] text-[12px]"
                                >
                                    Забыли пароль?
                                </Link>
                                <div onClick={handleSubmit} className="mt-8">
                                    {/* Кнопка отправления любой формы */}

                                    <SubmitButton text="Вход" />
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Ссылка на регистрацию елси не зарегестрированы */}

                    <div>
                        <span>Нет аккаунта?</span>
                        <Link to={"/signUp"} className="ml-2 text-[#007AFF]">
                            Зарегистрироваться
                        </Link>
                    </div>
                     <div className="flex gap-5 mt-[64px]">
                        <Link to={"/"}>
                            <img src={telegram} alt="" />
                        </Link>
                        <Link to={"/"}>
                            <img src={telegram} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export { SignIn };
