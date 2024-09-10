import express from "express";
import auth, {RequestWithUser} from "../middlewareUsers";
import Task from "../models/Tasks";
const taskRouter = express.Router();


taskRouter.get("/", auth, async (req, res) => {
    const user = (req as RequestWithUser).user;
    try {
        const tasks = await Task.find({ user: user._id });
        return res.status(200).send(tasks);
    } catch (error) {
        return res.status(500).send({ error: 'Failed to fetch tasks' });
    }
});

taskRouter.post("/",auth,async  (req,res) => {
    const user = (req as RequestWithUser).user;

    if (!req.body.title ||  !req.body.description) {
        return res.status(400).send({error: 'Title and description are required'});
    }
    const taskData = {
        user:user._id,
        username:user.username,
        title:req.body.title,
        description:req.body.description,
    };

    const task = new Task(taskData);
    try {
        await task.save();
        return res.status(201).send(task);
    } catch (error) {
        return res.status(400).send(error);
    }
});
export default taskRouter