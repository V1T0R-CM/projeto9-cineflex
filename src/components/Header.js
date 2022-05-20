import styled from 'styled-components';

export default function Header(){
    return(
        <Headerbar>Cineflix</Headerbar>
    )
}

const  Headerbar = styled.header`
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 400;
    font-size: 34px;
    color: #E8833A;
    background-color: #C3CFD9;
    position: fixed;
    top: 0;
    left: 0;
`