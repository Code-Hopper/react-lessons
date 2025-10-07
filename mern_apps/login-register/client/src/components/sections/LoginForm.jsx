import React from 'react'
import "../styles/style.scss"
import { useState } from 'react'
import { loginUser } from '../../api/user'
import { useAlert } from '../../context/AlertContext'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {

    let { showAlert } = useAlert()

    let navigate = useNavigate()

    let [showPassword, setShowPassword] = useState(false)

    let [loginData, setLoginData] = useState({
        email: "", password: ""
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setLoginData(prev => {
            return { ...prev, [name]: value }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {

            let result = await loginUser(loginData)

            console.log(result)

            localStorage.setItem("token", result.token)

            showAlert("success", `welcome ${result.user.name} !`)

            navigate("/dashboard")

        } catch (err) {
            console.log("error while login : ", err)
            showAlert("error", "unable to login !")
        }
    }

    return (
        <div id='login-form-container'>
            <div className='login-form rounded-lg absolute start-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                <div>
                    <h1 className='text-2xl font-bold p-3 text-center'>login</h1>
                </div>
                <div className='p-5'>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
                        <input onChange={handleChange} value={loginData.email} className='border p-2 bg-gray-500 text-white' placeholder='enter email' type="email" name="email" id="" />
                        <input onChange={handleChange} value={loginData.password} className='border p-2 bg-gray-500 text-white' placeholder='enter password' type={showPassword ? "text" : `password`} name="password" id="" />
                        <button onClick={() => { setShowPassword(!showPassword) }} type='button' className='bg-blue-600 text-white font-bold p-3'>
                            {showPassword ? "hide" : "show"}
                        </button>
                        <button type='submit' className='bg-green-500 text-white font-bold p-3'>login</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginForm
