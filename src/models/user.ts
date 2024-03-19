
import * as mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true }
}, {id: false});

export default mongoose.model('Final-Project-User', userSchema);
