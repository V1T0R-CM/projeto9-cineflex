import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from 'styled-components';
import Header from "./Header"
import Catalog from "./Catalog"
import DateTime from './DateTime';
import Section from "./Section";
import Success from "./Success";

export default function App(){
    return (
        <BrowserRouter>
            <Header />
            <Background>
                <Routes>
                    <Route path="/" element={<Catalog />}/>
                    <Route path="/filme/:filmId" element={<DateTime />}/>
                    <Route path="/sessao/:sessaoId" element={<Section />}/>
                    <Route path="/sucesso" element={<Success/>}/>
                </Routes>
            </Background>
        </BrowserRouter>
    )
}

const Background = styled.div`
    padding-top: 68px;
    padding-bottom: 40px;
    padding-left: 15px;
    padding-right: 15px;
`