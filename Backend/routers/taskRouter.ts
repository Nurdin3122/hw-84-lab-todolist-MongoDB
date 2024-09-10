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


taskRouter.delete("/:id", auth, async (req, res) => {
    const user = (req as RequestWithUser).user;
    const taskId = req.params.id;

    try {
        const task = await Task.findById(taskId);

        if (!task) {

            return res.status(404).send({ error: 'Task not found' });

        }

        if (task.user.toString() !== user._id.toString()) {

            return res.status(403).send({ error: 'You can only delete your own tasks' });
        }

        await Task.deleteOne({ _id: taskId });
        return res.status(200).send({ message: 'Task deleted successfully' });
    } catch (error) {
        return res.status(500).send({ error: 'Failed to delete task' });
    }
});


taskRouter.put("/:id", auth, async (req, res) => {
    const user = (req as RequestWithUser).user;
    const taskId = req.params.id;
    const changedTask = req.body;

    try {
        const task = await Task.findById(taskId);

        if (!task) {

            return res.status(404).send({ error: 'Task not found' });
        }

        if (task.user.toString() !== user._id.toString()) {

            return res.status(403).send({ error: 'You can only edit your own tasks' });
        }

        const newTask = await Task.findByIdAndUpdate(taskId, changedTask, { new: true });
        return res.status(200).send(newTask);
    } catch (error) {
        return res.status(400).send({ error: 'Failed to update task' });
    }
});
export default taskRouter