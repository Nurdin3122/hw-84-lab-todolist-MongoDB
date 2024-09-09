import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useAppDispatch} from "../../store/hooks.ts";
import {UserMutation} from "../../types.ts";
import {loginUser} from "./UserThunks.ts";

const LoginUser = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [newUser, setNewUser] = useState<UserMutation>({
        username:"",
        password:"",
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewUser((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    };

    const onSend = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(loginUser(newUser))
            navigate('/');
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <div>
            <h3 className="mt-5 text-center">Login into your account</h3>
            <form onSubmit={onSend}>

                <h5 className="mt-5 text-center">Your name</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="username"
                           id="username"
                           onChange={onChange}
                           value={newUser.username}
                           required
                    />
                </div>

                <h5 className="mt-5 text-center">Your password</h5>
                <div className="input-group input-group-lg">
                    <input type="text"
                           className="form-control mt-5"
                           aria-label="Sizing example input"
                           aria-describedby="inputGroup-sizing-lg"
                           name="password"
                           id="password"
                           onChange={onChange}
                           value={newUser.password}
                           required
                    />
                </div>

                <div className="block-submit-btn d-flex">
                    <button type="submit" className="btn btn-danger mt-5 me-auto ms-auto">Create</button>
                </div>

            </form>
        </div>
    );
};

export default LoginUser;