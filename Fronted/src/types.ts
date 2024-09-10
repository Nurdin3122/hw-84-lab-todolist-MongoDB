export interface UserMutation {
    username:string;
    password:string;
}

export interface User {
    id:string;
    username:string;
    password:string;
    token:string;
}

export interface Task {
    id:string;
    user:string;
    username:string;
    title:string;
    description:string;
}

export interface TaskMutation {
    title:string;
    description:string;
}