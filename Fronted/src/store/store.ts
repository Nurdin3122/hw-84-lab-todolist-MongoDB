import { configureStore } from '@reduxjs/toolkit';
import {UserReducer} from "../Components/UserComponents/UserSlice.ts";
import {TaskReducer} from "../Components/TasksComponents/TaskSlice.ts";


export const store = configureStore({
    reducer: {
        user:UserReducer,
        task:TaskReducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;