import jwt from "jsonwebtoken"
import { userModel } from "../models/userSchema.js"

async function checkAdmin(req, res, next) {
    try {
        let { token } = req.headers

        if (!token) throw ("invalid/empty token !")

        // token -> decode

        let decode = jwt.verify(token, process.env.JWT_SECRET)

        console.log(decode)

        let checkIfUserExists = await userModel.findOne({ "email": decode.email })

        if(!checkIfUserExists) throw ("invalid request !")

        req.user = checkIfUserExists

        next()

    } catch (err) {
        console.log("an error occured in check admin middleware : ", err)
        res.status(401).json({ message: "unable to acces this section", err })
    }
}

export { checkAdmin }
