import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearTokens } from "../../redux/auth/slice";
const Header = () => {
    const profile = useSelector((state) => state.profile);
    const auth = useSelector((state) => state.auth);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    function handleClick () {
        localStorage.clear()
        dispatch(clearTokens());
        navigate("/")
    }
    return (
        <header className="px-[113.5px] max-xl:flex-col flex justify-between items-center pt-[32px]">
            <div className="flex items-center gap-5">
                <Link to={"/"}>
                    <img src="../../assets/logo.png" alt="logo" />
                </Link>
            </div>
            <ul className="flex max-xl:flex-col items-center justify-between max-w-[508px] flex-grow">
                <li>О Нас</li>
                <Link to={"/transaction"}>
                    <li>Платежи</li>
                </Link>
                <li>Компании</li>
                <li>Новости</li>
            </ul>
            {localStorage.access_token !== undefined ? (
                location.pathname === "/profile" ? (
                    <button onClick={handleClick} className="px-[31px] py-[10px] bg-[#007AFF] rounded-xl text-white font-bold bg-">
                        Выход
                    </button>
                ) : (
                    <Link to={"/profile"}>
                        {profile.user !== null ? (
                            <img
                                className="h-[40px] w-[40px] rounded-full"
                                src={profile.user.avatar}
                                alt=""
                            />
                        ) : (
                            <div className=" h-[40px] w-[40px] rounded-full bg-gray01"></div>
                        )}
                    </Link>
                )
            ) : (
                <Link to="/auth/">
                    <button className="px-[31px] py-[10px] bg-[#007AFF] rounded-xl text-white font-bold bg-">
                        Вход
                    </button>
                </Link>
            )}
        </header>
    );
};

export default Header;
