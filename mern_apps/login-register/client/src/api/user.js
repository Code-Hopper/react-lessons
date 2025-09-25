import axios from "axios"

let baseUrl = "http://localhost:5009/api"

export const registerUser = async (userData) => {
    try {
        let result = await axios({
            method: "POST",
            url: `${baseUrl}/user/register`,
            data: userData
        })
        return result.data
    } catch (err) {
        throw err
    }
} 