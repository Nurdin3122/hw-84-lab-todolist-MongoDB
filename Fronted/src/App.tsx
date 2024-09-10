import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./Container/Header.tsx";
import Home from "./Container/Home.tsx";
import CreateUser from "./Components/UserComponents/CreateUser.tsx";
import LoginUser from "./Components/UserComponents/LoginUser.tsx";
import CreateTask from "./Components/TasksComponents/CreateTask.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CreateUser" element={<CreateUser/>}/>
            <Route path="/LoginUser" element={<LoginUser/>}/>
            <Route path="/CreateTask" element={<CreateTask/>}/>
            <Route path="*" element={<h5 className="text-center"> there is not such page </h5>}/>
        </Routes>
    </>
);

export default App
