import './App.css'
import {Route, Routes} from "react-router-dom";
import Header from "./Container/Header.tsx";
import Home from "./Container/Home.tsx";
import CreateUser from "./Components/UserComponents/CreateUser.tsx";
import LoginUser from "./Components/UserComponents/LoginUser.tsx";

const App = () => (
    <>
        <header>
            <Header/>
        </header>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/CreateUser" element={<CreateUser/>}/>
            <Route path="/LoginUser" element={<LoginUser/>}/>
            <Route path="*" element={<h5 className="text-center"> there is not such page </h5>}/>
        </Routes>
    </>
);

export default App
