import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {TaskMutation} from "../../types.ts";
import {createTaskThunk} from "./TaskThunks.ts";
import {useAppDispatch} from "../../store/hooks.ts";

const CreateTask = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [newTask, setNewTask] = useState<TaskMutation>({
        title:"",
        description:"",
    });


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };



    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(createTaskThunk(newTask))
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3 className="mt-5 text-center">Create a task</h3>
            <form onSubmit={onSend}>

                <h5 className="mt-5 text-center">Title</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="title"
                           id="title"
                           onChange={onChange}
                           value={newTask.title}
                           required
                    />
                </div>

                <h5 className="mt-5 text-center">Description</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="description"
                           id="description"
                           onChange={onChange}
                           value={newTask.description}
                           required
                    />
                </div>

                <div className="block-submit-btn d-flex">
                    <button type="submit" className="btn btn-danger mt-5 me-auto ms-auto">Create</button>
                </div>


            </form>
        </div>
    );
};

export default CreateTask;