import mongoose from "mongoose";
import bcrypt from "bcrypt"

let userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true,
        unique: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    age: {
        type: Number,
        require: true
    },
    password: {
        type: String,
    },
    AccountCreated: {
        type: String,
        require: true
    }
})

userSchema.pre("save", async function () {
    try {
        let hash = await bcrypt.hash(this.password, 12)
        this.password = hash
        this.AccountCreated = new Date().toLocaleDateString() + " | " + new Date().toLocaleTimeString()
    } catch (err) {
        console.log('error in user pre method : ', err)
    }
})

let userModel = new mongoose.model("users", userSchema)

export { userModel }