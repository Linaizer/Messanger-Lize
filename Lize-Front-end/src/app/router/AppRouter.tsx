import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import LoginPage from '../../pages/login'
import MainPage from "../../pages/main";
import { ProtectedRoute } from "./ProtectedRoute";
import SettingsPage from "../../pages/settings";


const AppRouter = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<ProtectedRoute><MainPage /> </ProtectedRoute>}></Route>
                <Route path="/login" element={<LoginPage />}></Route>
                <Route path="/settings" element={<ProtectedRoute><SettingsPage/> </ProtectedRoute>}></Route>
            </Routes>
        </Suspense>
    )
}

export default AppRouter