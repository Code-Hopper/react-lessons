import axios from "axios"

let baseUrl = `${import.meta.env.VITE_API_URL}/api/user`

export const registerUser = async (userData) => {
    try {
        let result = await axios({
            method: "POST",
            url: `${baseUrl}/register`,
            data: userData
        })
        return result.data
    } catch (err) {
        throw err
    }
}

export const loginUser = async (loginData) => {
    try {
        let result = await axios({
            method: "POST",
            url: `${baseUrl}/login`,
            data: loginData
        })
        return result.data
    } catch (err) {
        throw err
    }
}

export const getProfile = async (userToken) => {
    try {
        let result = await axios({
            method: "GET",
            url: `${baseUrl}/profile`,
            headers: {
                token: userToken
            }
        })
        return result.data
    } catch (err) {
        throw err
    }
}