import { model, Schema } from 'mongoose';

const UserSchema = new Schema({
    nick: {type: String, require: true },
    firstName: {type: String, require: true },
    lastName: {type: String, require: true },
    password: {type: String, require: true },
    email: {type: String, require: true },
    age: {type: Number, require: true },
    country: {type: String},
    salt: {type: String, required: true},
    createdAt: {type: Date, default: Date.now()}
});

export default model('User', UserSchema);