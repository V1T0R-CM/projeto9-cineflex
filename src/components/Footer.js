import styled from 'styled-components';

export default function Footer({imgURL, children}){

    return (
    <FooterBar>
        <div>
            <img src={imgURL} />
        </div>
        <span>{children}</span>
    </FooterBar>
    )
}

const FooterBar = styled.footer`
    width:100%;
    height: 117px;
    position: fixed;
    left: 0px;
    bottom: 0px;
    background-color: #DFE6ED;
    border: 1px solid #9EADBA;
    display:flex;
    align-items:center;
    justify-content: center;

    div{
        background: #FFFFFF;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        border-radius: 2px;
        width: 64px;
        height: 89px;
        padding: 8px;
        margin: 20px;
    }

    img{
        width:100%;
        height:100%
    }

    span{
        color: #293845;
        font-weight: 400;
        font-size: 26px;
    }
`