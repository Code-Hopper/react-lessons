import { userModel } from "../models/userSchema.js"
import bcrypt from "bcrypt"

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

export { postUserRegister }