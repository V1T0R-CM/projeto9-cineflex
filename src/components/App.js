import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
//import Catalog from "./Catalog"

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
            </Routes>
        </BrowserRouter>
    )
}