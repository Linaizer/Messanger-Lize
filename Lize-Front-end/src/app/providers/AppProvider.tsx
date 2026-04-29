import type React from "react";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({ children }: React.PropsWithChildren) => {
    return (
        <BrowserRouter>
            {children}
        </BrowserRouter>
    )
}

export default AppProvider