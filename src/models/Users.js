import { Schema, model } from 'mongoose'

const UserSchema = new Schema({
    name: {
        type: string,
        required: true,
    },
    email: {
        type: string,
        required: true,
    },
    password: {
        type: string,
        required: true,
    },
    bio: String,
    avatar: {
        type: string,
        required: true,
    },
}, { timestamps: true })

export default model('User', UserSchema)