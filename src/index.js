import React from "react";
import {BrowserRouter} from "react-router-dom"
import { FeedbackProvider } from "./context/FeedbackContext";
import ReactDOM  from "react-dom/client";
import "./index.css"
import App from "./App";


const root= ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <FeedbackProvider>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </FeedbackProvider>
    </React.StrictMode>
);
