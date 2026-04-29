import { useState } from "react"
import LoginForm from "../../../features/auth-by-login"
import RegisterFrom from "../../../features/auth-by-registration"

const LoginPage = () => {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div>
            {isLogin ? <LoginForm /> : <RegisterFrom />}
            <p>
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <span onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? ' Sign up' : ' Sign in'}
                </span>
            </p>
        </div>
    )
}

export default LoginPage