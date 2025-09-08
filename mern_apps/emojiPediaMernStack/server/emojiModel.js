import mongoose, { model } from "mongoose";

let emojiSchema = new mongoose.Schema({
    icon: { type: String },
    name: { type: String },
    description: { type: String },
    timeStamp: {
        type: Date
    }
})

emojiSchema.pre("save", function () {
    this.timeStamp = new Date().toLocaleTimeString() + " | " + new Date().toLocaleDateString()
})

let emojiModel = new mongoose.model("emoji", emojiSchema)

export { emojiModel }