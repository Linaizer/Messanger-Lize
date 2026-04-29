import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: React.PropsWithChildren) => {
    const { token } = localStorage
    if (!token) {
        return <Navigate to={'/login'} />
    }

    return (
        <>
            {children}
        </>
    )
}