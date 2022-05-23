import { useLocation } from "react-router-dom"
import styled from "styled-components"

export default function Success(){

    const purchaserInfo = useLocation().state
    console.log(purchaserInfo)

    return (
        <Main>
            <Title>Pedido feito <br/> com sucesso! </Title>
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

const Main = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`