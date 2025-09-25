import React from 'react'
import { useAlert } from '../../../context/AlertContext'
import "./Alert.scss"

const Alert = () => {

    let { alert } = useAlert()

    if (!alert.status) return null

    return (
        <div id='alert' className={`${alert.type}`}>
            <span className='font-bold'>
                {alert.message}
            </span>
        </div>
    )
}

export default Alert
