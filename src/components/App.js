import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Sections from './Sections';
import Header from "./Header"
import Catalog from "./Catalog"

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Background>
                <Routes>
                    <Route path="/" element={<Catalog />}/>
                    <Route path="/filme/:filmId" element={<Sections />}/>
                </Routes>
            </Background>
        </BrowserRouter>
    )
}

const Background = styled.div`
    padding-top: 68px;
    padding-bottom: 40px;
`