import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

function Poster({id, posterURL, title}){
    return(
        <Link to = {`filme/${id}`} >
            <Frame>
                <PostImg src = {posterURL} alt = {title}/>
            </Frame>
        </Link>
    )
}

export default function Catalog(){

    const [filmsInfo, setFilmsInfo]=useState([])

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then(response => {setFilmsInfo([...response.data])})
    }, [])

    return (
        <Main>
            <Title>Selecione o filme</Title>
            <FilmList>
                {filmsInfo.map(info =><Poster id = {info.id} posterURL = {info.posterURL} title = {info.title} />)}
            </FilmList>
        </Main>
    )
}

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    margin-bottom: 15px;
`

const FilmList = styled.div`
    display: flex;
    width: 350px;
    flex-wrap: wrap;
`

const Frame = styled.div`
    width: 145px;
    height: 209px;
    padding: 8px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    margin: 15px;
`

const PostImg = styled.img`
    width:100%;
    height:100%;
`