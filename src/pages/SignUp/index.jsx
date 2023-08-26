import React, { useEffect, useRef, useState } from "react";
import singinbg from "../../assets/regBg.png";
import logo from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

import SubmitButton from "../../shared/Buttons/SubmitButton";
import showPass from "../../assets/showPass.png";
import { useDispatch, useSelector } from "react-redux";
import {
    setAccessPassword,
    setPassword,
    setPhone,
    setTokens,
} from "../../redux/auth/slice";
import { axiosInstance } from "../../axios";
import axios from "axios";


const SignUp = () => {
    let navigate = useNavigate();


    const { password, access_password, phone } = useSelector(
        (state) => state.auth
    );
    const [twink, setTwink] = useState(false);
    const dispatch = useDispatch();
    const passRef1 = useRef();
    const passRef2 = useRef();
    function togglePasswordVisibility1() {
        if (passRef1.current.type === "password") {
            passRef1.current.type = "text";
        } else {
            passRef1.current.type = "password";
        }
    }
    function togglePasswordVisibility2() {
        if (passRef2.current.type === "password") {
            passRef2.current.type = "text";
        } else {
            passRef2.current.type = "password";
        }
    }
    function handleChange(e) {
        if (passRef1.current.value === passRef2.current.value) {
            setTwink(true);
        } else {
            setTwink(false);
        }
    }
    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axiosInstance.post("/api/auth/sign-up", {
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
                navigate("/profile");
            }
            
        } catch (error) {
            console.log(error);
        }
    }
    // Страница входа
    return (
        <>
            <div className="signIn flex ">
                {/* Большое фото на странице входа */}

                <img
                    src={singinbg}
                    alt=""
                    className="w-[70vw] h-screen object-cover"
                />

                <div className="flex flex-col w-[30vw] items-center justify-center">
                    <div className="w-[331px] h-[501px]">
                        {/* Логотип формы */}

                        <div className="logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="">
                            {/* Форма Регистрации */}
                            <form action="">
                                <div className="flex flex-col mt-[68px]">
                                    <span className="pl-4 text-[11px] mb-2">
                                        Логин
                                    </span>

                                    {/* Инпут который используется везде */}

                                    <input
                                        type="tel"
                                        className="w-full h-[48px] bg-[F2F2F2] border border-[E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
                                        placeholder={"Телефон"}
                                        value={phone}
                                        onChange={(e) =>
                                            dispatch(setPhone(e.target.value))
                                        }
                                    />
                                </div>
                                <div className="flex flex-col mt-4 password-container">
                                    <span className="pl-4 text-[11px] mb-2">
                                        Пароль
                                    </span>

                                    {/* Инпут который используется везде */}

                                    <input
                                        ref={passRef1}
                                        type="password"
                                        className="w-full h-[48px] bg-[F2F2F2] border border-[#E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
                                        placeholder={"Пароль"}
                                        required
                                        value={password}
                                        onChange={(e) => {
                                            dispatch(
                                                setPassword(e.target.value)
                                            );
                                        }}
                                    />
                                    <img
                                        src={showPass}
                                        className="toggle-password"
                                        onClick={togglePasswordVisibility1}
                                    />
                                </div>
                                <div className="flex flex-col mt-4 mb-[10px] password-container">
                                    <span className="pl-4 text-[11px] mb-2">
                                        Подтверждение пароля
                                    </span>

                                    {/* Инпут который используется везде */}

                                    <input
                                        type="password"
                                        ref={passRef2}
                                        className="w-full h-[48px] bg-[F2F2F2] border border-[#E5E5E5] outline-none rounded-[6px] py-[14px] px-[16px] text-[15px]"
                                        placeholder={"Подтверждение пароля"}
                                        required
                                        value={access_password}
                                        onChange={(e) => {
                                            handleChange(e);
                                            dispatch(
                                                setAccessPassword(
                                                    e.target.value
                                                )
                                            );
                                        }}
                                    />
                                    <img
                                        src={showPass}
                                        className="toggle-password"
                                        onClick={togglePasswordVisibility2}
                                    />
                                </div>
                                {twink ? (
                                    <p className=" text-purple01">
                                        пароли совпадают
                                    </p>
                                ) : (
                                    <p className=" text-blue01">
                                        пароли не совпадают
                                    </p>
                                )}
                                <div onClick={handleSubmit}>
                                    <SubmitButton text="Зарегистрироваться" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export { SignUp };
