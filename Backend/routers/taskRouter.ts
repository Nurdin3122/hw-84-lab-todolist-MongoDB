import express from "express";
const taskRouter = express.Router();


taskRouter.get("/",async  (req,res) => {

    return res.status(200).send("hello");
});

taskRouter.post("/",async  (req,res) => {

    res.status(200).send("hello");
});
export default taskRouter