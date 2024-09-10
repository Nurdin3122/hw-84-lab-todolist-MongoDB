import {Task} from "../../types.ts";
import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "../../store/store.ts";
import {createTaskThunk, getAllTasks} from "./TaskThunks.ts";

export interface TasksState {
    tasks:Task[];
    loading:boolean;
    error:boolean;
}

const initialState:TasksState = {
    tasks:[],
    loading:false,
    error:false,
}

export const TaskSlice = createSlice<TasksState>({
    name:"task",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(createTaskThunk.pending,(state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(createTaskThunk.fulfilled,(state) => {
            state.loading = false;
        });
        builder.addCase(createTaskThunk.rejected,(state) => {
            state.loading = false;
            state.error = true;
        });


        builder.addCase(getAllTasks.pending,(state) => {
            state.loading = true;
            state.error = false;
        });
        builder.addCase(getAllTasks.fulfilled,(state,{payload:tasks}) => {
            state.loading = false;
            state.tasks = tasks;
        });
        builder.addCase(getAllTasks.rejected,(state) => {
            state.loading = false;
            state.error = true;
        });


    }
});

export const TaskReducer = TaskSlice.reducer;
export const loadingTaskState = (state: RootState) => state.task.loading;
export const tasksState = (state: RootState) => state.task.tasks;
