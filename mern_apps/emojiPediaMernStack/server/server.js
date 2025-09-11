import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import "./database/conn.js"
import { router } from "./routers/router.js"

dotenv.config({ path: "./config.env" })

let port = process.env.port || 4001

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

let corsOptions = {
    origin: "*",
    method: "*"
}

app.use(cors(corsOptions))

app.use("/api", router)

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})