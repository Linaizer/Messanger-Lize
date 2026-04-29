import { useState } from "react"
import regApi from "../api/regApi"
import { useNavigate } from "react-router-dom"
const RegisterFrom = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleSumbit = async (e: React.SyntheticEvent) => {
        e.preventDefault()
        const data =  await regApi(name,email,password)
        console.log(data)
        localStorage.setItem('token', data.token)
        navigate('/')
    }

    return(
        <div>
            <h2> Welcome!</h2>
            <div>
                <form onSubmit={handleSumbit}>
                    <input placeholder="Write your name" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <input placeholder="Write email..." value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input placeholder="Write password..." value={password} onChange={(e) => setPassword(e.target.value)} type="password"/>
                <button type="submit">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default RegisterFrom