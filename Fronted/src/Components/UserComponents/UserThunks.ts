import {createAsyncThunk} from "@reduxjs/toolkit";
import axiosApi from "../../Axios/axiosApi.ts";
import {UserMutation} from "../../types.ts";

export const createUser = createAsyncThunk(
    "user/createUser",
    async (userMutation) => {
        const response = await axiosApi.post<UserMutation>('/users', userMutation);
        return response.data
    }
);

export const loginUser = createAsyncThunk(
    "user/loginUser",
    async (newUser) => {
        const response = await axiosApi.post<UserMutation>('/users/sessions', newUser);
        const {_id, token} = response.data
        localStorage.setItem('token', token);
        localStorage.setItem('id', _id);
        return response.data
    }
);
