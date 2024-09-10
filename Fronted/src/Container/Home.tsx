import React from 'react';
import {Link} from "react-router-dom";
import Tasks from "../Components/TasksComponents/Tasks.tsx";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="block-links mt-3 d-flex">
                <Link to="/CreateTask" className="btn btn-danger me-auto">Create a task</Link>
                <Link to="/CreateUser"  className="btn btn-primary ms-auto">create an account</Link>
                <Link to="/LoginUser"  className="btn btn-primary ms-3">login into your account</Link>
            </div>
            <div className="list-block mt-5">
                <h2 className="text-center">Your to do list</h2>
                <Tasks/>
            </div>
        </div>
    );
};

export default Home;