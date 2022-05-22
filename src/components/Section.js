import { useEffect, useState } from 'react';
import { useParams, Link} from "react-router-dom";
import styled from 'styled-components';
import Footer from './Footer';
import axios from "axios";


export default function Section(){
    const {sessaoId} = useParams()
    const [sectionInfo, setSectionInfo] = useState(false)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(response => {setSectionInfo({...response.data})})
    }, [])

    return(
        <Main>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <Footer imgURL={sectionInfo.movie.posterURL}>
                {sectionInfo.movie.title}<br/>{`${sectionInfo.day.weekday} - ${sectionInfo.name}`}
            </Footer>
        </Main>
    )
}

const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    margin-bottom: 30px;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`