import { Schema, model } from 'mongoose';


const PostSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    prompt: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});


export default model('Post', PostSchema);