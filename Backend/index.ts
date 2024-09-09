import express from 'express';
import mongoose from 'mongoose';

import cors from 'cors';
import userRouter from "./routers/userRouter";
import taskRouter from "./routers/taskRouter";



const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use('/users',userRouter);
app.use('/tasks',taskRouter);



const run = async () => {
    await mongoose.connect('mongodb://localhost/todolist');
    app.listen(port, () => {
        console.log(`Server started on ${port} port!`);
    });
    process.on('exit', () => {
        mongoose.disconnect();
    });
};
run().catch(console.error);