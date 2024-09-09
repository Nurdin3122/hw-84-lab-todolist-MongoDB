import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";
import {store} from "./store/store.ts";


createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <BrowserRouter>
            <StrictMode>
                <App />
            </StrictMode>
        </BrowserRouter>
    </Provider>
)
