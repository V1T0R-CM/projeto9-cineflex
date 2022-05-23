import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"
import axios from "axios"


function Information({title, children}){
    return(
    <BoxInfo>
        <span>{title}</span>
        {children}
    </BoxInfo>
    )
}
export default function Success(){

    const purchaserInfo = useLocation().state
    
    axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {ids: purchaserInfo.selectedId, name: purchaserInfo.name, cpf: purchaserInfo.cpf})

    return (
        <Main>
            <Title>Pedido feito <br/> com sucesso! </Title>
            <Information title="Filmes e sessao">
                {purchaserInfo.title}{`${purchaserInfo.date} ${purchaserInfo.hour}`}
            </Information>
            <Information title="Ingressos">
                {purchaserInfo.selectedName.map(number => <div>{`Assento ${number}`}</div>)}
            </Information>
            <Information title="Comprador">
                {`Nome: ${purchaserInfo.name}`}<br/>{`CPF: ${purchaserInfo.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/,"$1.$2.$3-$4")}`}
            </Information>
            <Link to = "/"><HomeButton>Voltar pra Home</HomeButton></Link>
        </Main>
    )

}

const Title = styled.span`
    font-weight: 700;
    font-size: 24px;
    color: #247A6B;
    margin-top: 30px;
    margin-bottom: 30px;
    text-align: center;
`

const BoxInfo = styled.div`
    display: flex;
    flex-direction: column;
    width: 333px;
    align-items: flex-start;
    font-weight: 400;
    font-size: 22px;
    line-height: 26px;
    color: #293845;
    margin-bottom: 30px;

    span{
        font-weight: 700;
        margin-bottom: 3px;
    }
`

const HomeButton = styled.button`
    width: 225px;
    height: 42px;
    background: #E8833A;
    border-radius: 3px;
    border: hidden;
    margin-top: 30px;
    font-weight: 400;
    font-size: 18px;
    color: #ffffff;
`

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`