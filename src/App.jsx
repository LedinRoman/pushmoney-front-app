import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Main } from "./pages/Main";
import Profile from "./components/ProfilePage";
import { SignUp } from "./pages/SignUp";
import Transaction from "./pages/Transaction";
import { useEffect } from "react";
import { axiosInstance } from "./axios";
import { useDispatch, useSelector } from "react-redux";
import { setProfile } from "./redux/profile/slice";
import { setIsLogin } from "./redux/auth/slice";

function App() {
    const dispatch = useDispatch();
    let navigate = useNavigate();
    const { user } = useSelector((state) => state.profile);
    const location = useLocation()
    useEffect(() => {
        async function handleSubmit() {
            try {
                const response = await axiosInstance.get("/api/user/me", {
                    headers: {
                        authorization: `Bearer ${localStorage.access_token}`,
                    },
                });
                window.response = response
                dispatch(setProfile(response.data));
                dispatch(setIsLogin(true));
                
                if (!response.data.full_name_low) navigate("/profile");
            } catch (error) {
                console.log(error);
            }
        }
        handleSubmit();
    }, [location.pathname]);
    // Компонент, который отвечает за переключение страниц
    return (
        <>
            <Routes>
                <Route path="/transaction" element={<Transaction />} />
                <Route path="/auth" element={<SignIn />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/" element={<Main />} />
                <Route path="/profile/" element={<Profile />} />
            </Routes>
        </>
    );
}

export default App;
