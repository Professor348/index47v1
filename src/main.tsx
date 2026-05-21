import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router";
import Index from "./routes";
import Term from "./routes/term";
import Layout from "./routes/layout";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="*" element={<Term />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
