import { useEffect, useState } from 'react';
import { useParams, useNavigate} from "react-router-dom";
import styled from 'styled-components';
import Footer from './Footer';
import axios from "axios";


function Seats({name, id , isAvailable, selectedId, setSelectedId, selectedName, setSelectedName}){
    const [color, setColor]= useState(isAvailable ? "#808F9D" : "#F7C52B")
    
    function changeSeat(){
        if(isAvailable && !selectedId.find(item => item === id)){
            setColor("#8DD7CF")
            setSelectedId([...selectedId, id])
            setSelectedName([...selectedName, name])
        }
        else if (isAvailable){
            setColor("#808F9D")
            setSelectedId(selectedId.filter(item => item !== id))
            setSelectedId(selectedName.filter(item => item !== name))
        }
        else{
            alert("Esse assento não está disponível")
        }
    }
    
    return(
        <Seat color = {color} onClick = {()=>changeSeat()}>
            {name}
        </Seat>
    )
}

function Legendtable(){
    return(
        <Label>
            <LabelItem>
                <Seat color="#8DD7CF"/>
                Selecionado
            </LabelItem>
            <LabelItem>
                <Seat color="#808F9D"/>
                Disponível
            </LabelItem>
            <LabelItem>
                <Seat color="#F7C52B"/>
                Indisponível
            </LabelItem>
        </Label>
    )
}

function PurchaserInfo({name, setName, cpf, setCpf, selectedId, selectedName, filmTitle, date, hour}){
    const navigate = useNavigate()

    function submitData(event){
        event.preventDefault();
    }

    function purchase(){
        let infosValidas=true
        let messege=""

        if(selectedId.length===0){
            messege+="Escolha ao menos 1 assento!\n"
            infosValidas=false
        }
        for(let i of name){
            if((!isNaN(i) && i!==" ") || name.length===0){
                messege+="Insira um nome valido!\n"
                infosValidas=false
                break
            }
        }

        if(cpf.length!==11){
            messege+="Insira um número de CPF valido!\n"
            infosValidas=false
        }
        
        else{
            for(let j of cpf){
                if(isNaN(j)){
                    messege+="Insira um número de CPF valido!\n"
                    infosValidas=false
                    break
                }
            }
        }

        if(infosValidas){
            navigate("/sucesso", {replace:true, state:{filmTitle, date, hour, name, cpf, selectedId, selectedName}})
        }
        else{
            alert(messege)
        }
    }

    return(
        <Purchaserform onSubmit={submitData}>
            <label htmlFor="nome">Nome do comprador:</label>
            <input
              type="text"
              placeholder="Digite seu nome..."
              id="nome"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
            />

            <label htmlFor="cpf">CPF do comprador:</label>
            <input
              type="text"
              placeholder="Digite seu CPF..."
              id="cpf"
              value={cpf}
              required
              onChange={(e) => setCpf(e.target.value)}
            />
            <CenterDiv><button type="submit" onClick={()=>purchase()}>Reservar assento(s)</button></CenterDiv>
        </Purchaserform>
    )
}

export default function Section(){
    const {sessaoId} = useParams()
    const [sectionInfo, setSectionInfo] = useState(false)
    const [selectedId, setSelectedId] = useState([])
    const [selectedName, setSelectedName] = useState([])
    const [name, setName] = useState("")
    const [cpf, setCpf] = useState("")

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`);
        promise.then(response => {setSectionInfo({...response.data})})
    }, [])

    return(
        <Main>
            <Title>
                Selecione o(s) assento(s)
            </Title>
            <TableSeats>
                {sectionInfo ?  sectionInfo.seats.map(seat => <Seats name = {seat.name} id = {seat.id} isAvailable = {seat.isAvailable} selectedId = {selectedId} setSelectedId = {setSelectedId} selectedName={selectedName} setSelectedName={setSelectedName}/>) : ""}
            </TableSeats>
            <Legendtable/>
            {sectionInfo?<PurchaserInfo name={name} setName={setName} cpf={cpf} setCpf={setCpf} selectedId = {selectedId} selectedName={selectedName} filmTitle = {sectionInfo.movie.title} date = {sectionInfo.day.date} hour={sectionInfo.name}/> : ""}
            {sectionInfo?
            <Footer imgURL={sectionInfo.movie.posterURL}>
                {sectionInfo.movie.title}<br/>{`${sectionInfo.day.weekday} - ${sectionInfo.name}`}
            </Footer>
            :
            ""}
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

const TableSeats = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 333px;
    height: 210px;
`

const Seat = styled.div`
    background-color: ${props => props.color};
    border: 1px solid #808F9D;
    border-radius: 12px;
    width: 26px;
    height: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 11px;
    margin-left: 3px;
    margin-right: 3px;
    margin-bottom: 16px;
`

const Label = styled.div`
    width: 333px;
    display: flex;
    justify-content: space-around;
    margin-bottom: 40px;
`
const LabelItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #4E5A65;
    font-weight: 400;
    font-size: 13px;
`

const Purchaserform = styled.form`
    display: flex;
    flex-direction: column;
    width: 333px;
    align-items: flex-start;
    font-weight: 400;
    font-size: 18px;
    color: #293845;

    label{
        margin-bottom:3px;
    }

    button{
        background: #E8833A;
        font-weight: 400;
        font-size: 18px;
        color: #FFFFFF;
        border-radius: 3px;
        border: hidden;
        width: 225px;
        height: 42px;
    }

    input{
        width: 327px;
        height: 51px;
        border: 1px solid #D5D5D5;
        border-radius: 3px;
        margin-bottom: 8px;
        padding: 5px;
    }

    input::placeholder{
        font-style: italic;
        font-weight: 400;
        font-size: 18px;
        color: #AFAFAF;
    }
`

const CenterDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 55px;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`