import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import LoginPage from '../../pages/login'
import { ProtectedRoute } from "./ProtectedRoute";
const MainPage = React.lazy(()=>import('../../pages/main'))
const SettingsPage = React.lazy(()=>import('../../pages/settings'))



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