import { useState } from "react";
import { loginApi } from "../api/loginApi";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSumbit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data = await loginApi(email, password)
         console.log('data', data)
        localStorage.setItem('token',data.token)
        navigate('/')
    }

    return (
        <div>
            <h2> Welcome!</h2>
            <div>
                <form onSubmit={handleSumbit}>
                    <input placeholder="Write email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Write password..." value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                <button type="submit"> Log in</button>
                </form>
            </div>
        </div>
    )
}

export default LoginForm