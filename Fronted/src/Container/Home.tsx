import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="container-fluid">
            <div className="block-user mt-3 d-flex">
                <Link to="/CreateUser"  className="btn btn-primary ms-auto">create an account</Link>
                <Link to="/LoginUser"  className="btn btn-primary ms-3">login into your account</Link>
            </div>
            <div className="list-block">
                <h2 className="text-center">Your to do list</h2>
            </div>
        </div>
    );
};

export default Home;