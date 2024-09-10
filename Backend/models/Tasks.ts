import mongoose from "mongoose";
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId, ref: 'User', required: true
    },
    username: {
        type: String,
    },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Task = mongoose.model('Task', TaskSchema);
export default Task