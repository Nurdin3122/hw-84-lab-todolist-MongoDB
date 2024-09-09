import express from "express";
import {randomUUID} from "crypto";
import {Error} from "mongoose";
import User from "../models/Users";
import bcrypt from "bcrypt";
import auth, {RequestWithUser} from "../middlewareUsers";
const userRouter = express.Router();


userRouter.post("/",async  (req,res,next) => {

    try {
        const user = new User({
            username: req.body.username,
            password: req.body.password,
            token:randomUUID(),
        });

        await user.save();
        console.log(user)
        return res.send(user);
    } catch (error) {
        if (error instanceof Error.ValidationError) {
            return res.status(400).send(error);
        }
        return next(error);
    }
});

userRouter.post("/sessions",async  (req,res) => {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
        return res.status(400).send({error: 'Username not found'});
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
        return res.status(400).send({error: 'Password is wrong'});
    }
    user.token = randomUUID();
    await user.save()
    console.log("everything is ok",user)
    return res.send("everything is ok" + "\n" +  user);
});


userRouter.post("/secret",auth,async  (req,res) => {
    const user = (req as RequestWithUser).user;

    return res.send({
        message: user,
        username: user.username,
    });
});

export default userRouter