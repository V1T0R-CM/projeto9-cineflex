import { useEffect, useState } from 'react';
import { useParams, Link} from "react-router-dom";
import styled from 'styled-components';
import Footer from './Footer';
import axios from "axios";



function Days({weekday, date, showtimes}){
    return(
        <SectionsDays>
            <span>{`${weekday} - ${date}`}</span>
            <Timetable>
                {showtimes.map(hours => <Link to = {`/sessao/${hours.id}`}><button>{hours.name}</button></Link>)}
            </Timetable>
        </SectionsDays>
    )
}


export default function DateTime(){
    const {filmId} = useParams()
    const [sectionsInfo, setSectionsInfo] = useState(false)

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${ filmId }/showtimes`);
        promise.then(response => {setSectionsInfo({...response.data})})
    }, [])

    return (
        <Main>
            <Title>
                Selecione o horário
            </Title>
            {sectionsInfo?sectionsInfo.days.map(days => <Days weekday = {days.weekday} date = {days.date} showtimes = {days.showtimes}/>):""}
            <Footer imgURL={sectionsInfo.posterURL}>
                {sectionsInfo.title}
            </Footer>
        </Main>
    )
}


const SectionsDays = styled.div`
    height: 100px;
    margin-bottom: 22px;
    display: flex;
    flex-direction: column;
    width: 100%;

    
    span{
        font-weight: 400;
        font-size: 20px;
        color: #293845;
        margin-bottom: 22px;
    }
`

const Title = styled.span`
    font-weight: 400;
    font-size: 24px;
    color: #293845;
    margin-top: 30px;
    margin-bottom: 30px;
`
const Timetable = styled.div`
    button{
            width: 83px;
            height: 43px;
            background-color: #E8833A;
            font-weight: 400;
            font-size: 18px;
            color: #FFFFFF;
            border-radius: 3px;
            border: hidden;
            margin: 4px;
        }
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`