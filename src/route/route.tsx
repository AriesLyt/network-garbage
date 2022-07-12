import { Routes, Route } from "react-router-dom";

// component
import GarMain from "@views/index";
import ShowShowWay from "@views/SSW";

export default function MRoute() {
    return (
        <Routes>
            <Route path="/" element={<GarMain />} />
            <Route path="/ssw" element={<ShowShowWay />} />
        </Routes>
    )
}