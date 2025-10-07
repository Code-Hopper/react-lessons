import { userModel } from "../models/userSchema.js"
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

const postUserRegister = async (req, res) => {
    try {

        let { name, phone, email, age, password } = req.body

        if (!name || !phone || !email || !age || !password) throw ("incomplete/invalid data !")

        let result = await userModel.findOne({ $or: [{ "email": email }, { "phone": phone }] })

        if (result) throw ("Duplicate entry. Phone/Email is already registred !")

        let newUser = new userModel({ name, phone, email, age, password })

        await newUser.save()

        res.status(202).json({ message: `user with email ${email} has been registred successfully !` })

    } catch (err) {
        console.log("unable to register the user ", err)
        res.status(500).json({ message: "unable to register the user !", err })
    }
}

const postUserLogin = async (req, res) => {
    let responseObject = {
        status: 500,
        message: "server is down !"
    }
    try {

        let { email, password } = req.body

        if (!email || !password) {
            responseObject.status = 400
            responseObject.message = "Invalid email/password !"
            throw ("email/password not found !")
        }

        let userExists = await userModel.findOne({ "email": email })

        if (!userExists) {
            responseObject.status = 401
            responseObject.message = "user din't exists please register the user first !"
            throw ("user din't exists please register the user first !")
        }


        let passwordMatching = await bcrypt.compare(password, userExists.password)

        console.log(passwordMatching)

        if (!passwordMatching) {
            responseObject.status = 401
            responseObject.message = "wrong email/password !"
            throw ("wrong email/password !")
        }

        // to create jwt token

        console.log(process.env.JWT_SECRET)

        let token = await jwt.sign({ email: userExists.email }, process.env.JWT_SECRET, { expiresIn: "12hr" })

        res.status(201).json({ message: `user with email ${userExists.email} loged in successfully !`, token, user: userExists })

    } catch (err) {
        console.log("unable to login user !", err)
        res.status(responseObject.status).json({ message: responseObject.message })
    }
}

const getUserInfo = (req, res) => {
    try {

        let { user } = req

        if (!user) throw ("unable to get user profile !")

        res.status(200).json({ message: "your request was successfull !", user })

    } catch (err) {
        console.log("error while sending user profile")
        res.status(500).json({ message: "unable to send user profile :", err })
    }
}

export { postUserRegister, postUserLogin, getUserInfo }