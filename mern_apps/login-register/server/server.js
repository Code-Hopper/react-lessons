import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import router from "./routers/router.js"
import "./database/conn.js"

dotenv.config({ path: "./config.env" })

const app = express()

let port = process.env.PORT

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

let corsOptions = {
    origin: "*",
    method: "*"
}

app.use(cors(corsOptions))

app.use("/api", router)

app.use((req, res) => {
    res.status(404).json({ message: "content/route not found !" })
})

app.listen(port, () => {
    console.log(`server is running on port ${port} !`)
})