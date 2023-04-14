import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <BrowserRouter>
        <ScrollToTop />
        <App />
    </BrowserRouter>
);
