import express from "express"
import dotenv from "dotenv"
import cors from "cors"

import "./conn.js"

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

app.get("/api/:name", (req, res) => {

    let { name } = req.params
    if (name == "amey") {
        res.status(200).json({ message: "you have reached backend successfully !" })
    } else {
        res.status(400).json({ message: "name does not matched !" })
    }

})

app.listen(port, () => {
    console.log(`server is running on port ${port}`)
})