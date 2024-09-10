import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../../store/hooks.ts";
import {deleteTask, getAllTasks} from "./TaskThunks.ts";
import {loadingTaskState, tasksState} from "./TaskSlice.ts";
import Spinner from "../Spinner/Spinner.tsx";

const Tasks = () => {
    const dispatch = useAppDispatch();
    const tasks = useAppSelector(tasksState);
    const loading = useAppSelector(loadingTaskState)

    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch]);

    const ChangeTask = (id:string) => {
        console.log(id)
    };

    const DeleteTask = async (id:string) => {
        await dispatch(deleteTask(id));
        await dispatch(getAllTasks());
    };

    return (
        <div className="d-flex mt-4 flex-wrap">
            {
                loading ? <Spinner/> : (
                    tasks.map(task => (
                        <div key={task._id} className="border d-flex flex-column me-auto ms-auto">
                            <div className="m-4 text-center">
                                <h6>{task.title}</h6>
                                <p>{task.description}</p>
                                <button className="btn btn-danger me-3" onClick={() => DeleteTask(task._id)}>Delete</button>
                                <button className="btn btn-success" onClick={() => ChangeTask(task._id)}>Изменить</button>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
};

export default Tasks;