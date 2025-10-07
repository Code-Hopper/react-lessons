import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { getProfile } from '../../../api/user'
import { useAlert } from '../../../context/AlertContext'
import { useState } from 'react'

const Dashboard = () => {

    let [user, setUser] = useState()

    let navigate = useNavigate()

    let { showAlert } = useAlert()

    const checkAccess = async () => {
        try {

            let token = localStorage.getItem("token")

            let result = await getProfile(token)

            showAlert("success", result.message)
            setUser(result.user)
        } catch (err) {
            console.log('error while checking access !', err)
            showAlert("error", "unable to grant access to dashboard !")
            navigate("/")
        }
    }

    useEffect(() => {
        let token = localStorage.getItem("token")
        if (!token) navigate("/")
        checkAccess()
    }, [])

    return (
        <div className='dashboard'>
            <h1>welcome admin</h1>
            <h1 className='text-2xl font-bold'>
                {user ? `welcome ! ${user.name}.` : null}
            </h1>
            <button onClick={()=>{
                localStorage.removeItem("token")
                navigate("/")
            }} className='bg-red-500 font-bold text-white p-3'>logout</button>
        </div>
    )
}

export default Dashboard
