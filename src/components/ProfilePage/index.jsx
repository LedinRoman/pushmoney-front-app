import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import ProfileButton from "../../shared/Buttons/ProfileButton";
import InputProfile from "../../shared/InputProfile";
import SelectProfile from "../../shared/SelectProfile";
import btc from "../../assets/profile/bitcoin.png";
import { useDispatch, useSelector } from "react-redux";
import {
    setCity,
    setCounty,
    setEmail,
    setFirstName,
    setLastName,
    setLocation,
    setMiddleName,
    setProfile,
    setPassword,
    setPhone,
} from "../../redux/profile/slice";
import { setIsLogin } from "../../redux/auth/slice";
import { axiosInstance } from "../../axios";

const Profile = () => {
    const [file, setFile] = useState("");
    const { user = "" } = useSelector((state) => state.profile);
    const dispatch = useDispatch();
    async function patchPhoto() {
        try {
            const formData = new FormData();
            formData.append("file", file);
            const response3 = await axiosInstance.patch(
                "/api/user/photo",
                formData,
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`,
                        "Content-Type": "multipart/form-data",
                    },
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(localStorage.access_token);
        try {
            patchPhoto();
            const response1 = await axiosInstance.patch(
                "/api/user/profile",
                {
                    phone: profile.phone,
                    password: profile.password,
                    full_name:
                        profile.firstName +
                        " " +
                        profile.lastName +
                        " " +
                        profile.middleName,
                    telegram: "123",
                    email: profile.email,
                    birth_date: "123",
                    location:
                        profile.location +
                        " " +
                        profile.county +
                        " " +
                        profile.city,
                },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.access_token}`,
                    },
                }
            );

            const response2 = await axiosInstance.get("/api/user/me", {
                headers: {
                    authorization: `Bearer ${localStorage.access_token}`,
                },
            });
            dispatch(setProfile(response2.data));
            dispatch(setIsLogin(true));

            console.log(response2.data);
        } catch (error) {
            console.log(error);
        }
    };
    const profile = useSelector((state) => state.profile);
    return (
        <div className="profileBg h-full w-full ">
            <Header />

            <div className="flex min-h-screen max-xl:px-[24px] xl:px-[113.5px] justify-between py-[85px]">
                <form
                    onSubmit={handleSubmit}
                    className="profileShadow w-[943px] h-[943px] px-[90px] py-[56px] flex ] "
                >
                    <div className="flex flex-col gap-[40px] w-full">
                        <h1 className="text-[30px] text-[#007AFF] font-[700]">
                            Профиль
                        </h1>
                        <div className="flex justify-between">
                            <div className="w-[233px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Имя
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            profile.user && profile.user.full_name ? profile.user.full_name.split(' ')[0] : ''
                                        }
                                        onChange={(e) =>
                                            dispatch(
                                                setFirstName(e.target.value)
                                            )
                                        }
                                        value={profile.firstName}
                                    />
                                </div>
                            </div>
                            <div className="w-[233px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Фамилия
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            profile.user && profile.user.full_name ? profile.user.full_name.split(' ')[1] : ''
                                        }
                                        onChange={(e) =>
                                            dispatch(
                                                setLastName(e.target.value)
                                            )
                                        }
                                        value={profile.lastName}
                                    />
                                </div>
                            </div>

                            <div className="w-[233px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Отчество
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            profile.user && profile.user.full_name ? profile.user.full_name.split(' ')[2] : ''
                                        }
                                        onChange={(e) =>
                                            dispatch(
                                                setMiddleName(e.target.value)
                                            )
                                        }
                                        value={profile.middleName}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-[492px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Почта
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            user && user.full_name !== null ?
                                            profile.user.contacts.email
                                            : ""
                                        }
                                        onChange={(e) =>
                                            dispatch(setEmail(e.target.value))
                                        }
                                        value={profile.email}
                                    />
                                </div>
                            </div>
                            <div className="w-[254px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Номер телефона
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            user && user.full_name !== null ? profile.user.phone : ""
                                        }
                                        
                                        onChange={(e) => {
                                            dispatch(setPhone(e.target.value));
                                        }}
                                        value={profile.phone}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-[37px]">
                            <div className="w-[238px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Страна
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            user && user.full_name !== null ?
                                            profile.user.location.split(` `)[1]
                                            : ""
                                        }
                                        onChange={(e) =>
                                            dispatch(setCounty(e.target.value))
                                        }
                                        value={profile.county}
                                    />
                                </div>
                            </div>

                            <div className="w-[238px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Город
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={
                                            user && user.full_name !== null ?
                                            profile.user.location.split(` `)[2]
                                            : ""
                                        }
                                        onChange={(e) =>
                                            dispatch(setCity(e.target.value))
                                        }
                                        value={profile.city}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="w-[428px]">
                            <div className="flex flex-col">
                                <span className="text-[25px] font-[500]">
                                    Адрес
                                </span>
                                <input
                                    required
                                    id="firstName"
                                    type="text"
                                    className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                    placeholder={
                                        user && user.full_name !== null ?
                                        profile.user.location.split(` `)[0]
                                        : ""
                                    }
                                    onChange={(e) =>
                                        dispatch(setLocation(e.target.value))
                                    }
                                    value={profile.location}
                                />
                            </div>
                        </div>
                        {profile.user && profile.user.full_name ? (
                            <div className="w-[383px]">
                                <div className="flex flex-col">
                                    <span className="text-[25px] font-[500]">
                                        Пароль
                                    </span>
                                    <input
                                        required
                                        id="firstName"
                                        type="text"
                                        className="w-full h-[54px] py-[16px] px-[21px] outline-none rounded-[6px] "
                                        placeholder={profile.password}
                                        onChange={(e) =>
                                            dispatch(
                                                setPassword(e.target.value)
                                            )
                                        }
                                        value={profile.password}
                                    />
                                </div>
                            </div>
                        ) : (
                            ""
                        )}
                        <div className="text-center" onClick={handleSubmit}>
                            <ProfileButton text="Сохранить" type="submit" />
                        </div>
                    </div>

                    <div className="flex items-center flex-col ml-[140px]">
                        <div className="profileShadow h-[315px] w-[264px] flex items-center justify-center flex-col gap-[30px]">
                            <h2>Моя фотография</h2>
                            {user !== null ? (
                                <img
                                    src={user.avatar}
                                    className="rounded-full w-[120px] aspect-square"
                                    alt="profile"
                                />
                            ) : (
                                <div className=" bg-gray-300 rounded-full w-[120px] aspect-square"></div>
                            )}

                            <label htmlFor="avatar">
                                <input
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    accept="image/png, image/jpeg"
                                    className="hidden"
                                    onChange={(e) => setFile(e.target.files[0])}
                                />
                                <div className="px-[42px] py-[12px] w-[180px] bg-blue01 rounded-full text-white text-[21px] font-semibold cursor-pointer">
                                    Выбрать
                                </div>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Profile;
