import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config({ path: "./config.env" })

async function conn() {
    try {
        await mongoose.connect(process.env.mongodb_string)
        console.log("connection with database was successfull")
    } catch (err) {
        console.log("unable to connect with mongodb : ", err)
    }
}

conn()