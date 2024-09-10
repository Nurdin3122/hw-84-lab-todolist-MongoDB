import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../Axios/axiosApi.ts";
import {Task} from "../../types.ts";


export const createTaskThunk = createAsyncThunk(
    "task/createTaskThunk",
    async (newTask,{getState}) => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated');
        }
        const response = await axiosApi.post('/tasks', newTask, {
            headers: {
                Authorization: `${token}`,
            },
        });
        return response.data
    }
);

export const getAllTasks = createAsyncThunk<Task[]>(
    "task/getAllTasks",
    async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated');
        }
        const tasksResponse = await axiosApi.get<Task[]>('/tasks', {
            headers: {
                Authorization: `${token}`,
            }
        });
        return tasksResponse.data || [];
    }
);

export const deleteTask = createAsyncThunk<void,string>(
    "task/deleteTask",
    async (id:string) => {
        const token = localStorage.getItem('token');
        if (!token) {
            throw new Error('User not authenticated');
        }

        const tasksResponse = await axiosApi.delete(`/tasks/${id}`, {
            headers: {
                Authorization: `${token}`,
            }
        });
        return tasksResponse.data ;
    }
);