import {createSlice} from "@reduxjs/toolkit";
import {User} from "../../types.ts";
import {createUser, loginUser} from "./UserThunks.ts";


export interface userState {
    user:User[]
    loading:boolean;
    error:boolean;
}

export const initialState:userState = {
    user:[],
    loading:false,
    error:false,
}

export  const UserSlice = createSlice<userState>({
    name:"users",
    initialState,
    reducers:{},
    extraReducers:(builder) => {
        builder.addCase(createUser.pending,(state) => {
            state.loading = true;
            state.error = false
        });
        builder.addCase(createUser.fulfilled,(state) => {
            state.loading = false;
        });
        builder.addCase(createUser.rejected,(state) => {
            state.loading = false;
            state.error = true
        });

        builder.addCase(loginUser.pending,(state) => {
            state.loading = true;
            state.error = false
        });
        builder.addCase(loginUser.fulfilled,(state) => {
            state.loading = false;
        });
        builder.addCase(loginUser.rejected,(state) => {
            state.loading = false;
            state.error = true
        });

    }
});

export const UserReducer = UserSlice.reducer