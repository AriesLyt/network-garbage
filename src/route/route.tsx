import { Routes, Route } from "react-router-dom";

// component
import GarMain from "@views/index";

export default function MRoute() {
    return (
        <Routes>
            <Route path="/" element={<GarMain />} />
        </Routes>
    )
}