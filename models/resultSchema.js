import mongoose from "mongoose";
const { Schema } = "mongoose";

const resultSchema = new Schema({
    userName: {
        type: String
    },
    result: {
        type: Array, 
        default: []
    },
    attempts: {
        type: Number, 
        default: 0
    },
    points: {
        type: Number,
        default: 0
    },
    achived: {
        type: String,
        default:''
    },
    createdAt: {
        type: Date,
        defaut: Date.now
    }
})

export default mongoose.model('result', resultSchema)