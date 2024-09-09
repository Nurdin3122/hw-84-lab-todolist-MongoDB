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