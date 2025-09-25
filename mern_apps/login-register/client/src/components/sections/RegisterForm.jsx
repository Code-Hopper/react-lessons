import React from 'react'
import "../styles/style.scss"
import { useState } from 'react'
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { registerUser } from '../../api/user';
import { useAlert } from '../../context/AlertContext.jsx';

export const RegisterForm = () => {

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^])[A-Za-z\d@$!%*?&#^]{8,}$/;

    let [registerForm, setRegisterForm] = useState({
        name: "", phone: "", email: "", age: "", password: ""
    })

    let [togglePassword, setTogglePassword] = useState(false)

    const handleRegisterFormChange = (e) => {
        let { name, value } = e.target
        setRegisterForm(prev => ({ ...prev, [name]: value }))
    }

    let { showAlert } = useAlert()

    const handleRegisterFormSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await registerUser(registerForm)
            showAlert("success", response.message)
            console.log(response)
        } catch (err) {
            console.log("unable to register : ", err)
        }
    }

    return (
        <div id='register-from-container'>
            <div className='register-form'>
                <span className='block text-center font-bold text-lg'>Register Form</span>
                <form onSubmit={handleRegisterFormSubmit} className='mt-3'>
                    <input onChange={handleRegisterFormChange} value={registerForm.name} type="text" name='name' placeholder='Enter Your Name' />
                    <input onChange={handleRegisterFormChange} value={registerForm.phone} type="tel" name='phone' placeholder='Enter Your Phone' />
                    <input onChange={handleRegisterFormChange} value={registerForm.email} type="email" name='email' placeholder='Enter Your Email' />
                    <input onChange={handleRegisterFormChange} value={registerForm.age} type="number" name='age' placeholder='Enter Your Age' />
                    <div className='flex gap-2'>
                        <input className='grow' onChange={handleRegisterFormChange} value={registerForm.password} type={togglePassword ? "text" : "password"} name='password' placeholder='Create a password !' />
                        <button onClick={() => { setTogglePassword(!togglePassword) }}>
                            {togglePassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>

                    {
                        registerForm.password && !passwordRegex.test(registerForm.password) && (
                            <p className='text-red-600'>
                                <b>weak passowrd : </b> hint, minimum 8 charchters, atleast one uppercase, lowercase , number & special charchter.
                            </p>
                        )
                    }

                    <button type='submit' className='font-bold hover:!bg-green-700 transition hover:!text-white'>
                        Register
                    </button>
                </form>
            </div>
        </div>
    )
}