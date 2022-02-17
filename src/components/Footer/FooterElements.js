import styled from "styled-components";

import imgFoot from '../../assets/Footer/foot.svg'


export const FooterContainer = styled.div`
    width: 100%;
    min-width: 320px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    background: #FAF8FC;
`;

export const FooterContent = styled.div`
    color: #ffffff;
    /* margin-left: 120px;
    margin-right: 120px; */
    padding-left: 120px;
    padding-right: 120px;
    width: 1440px;
    height: 603px;
    margin-top: 0px;
    /* display: flex;
    justify-content: flex-start; */
    top: 0;
    background-image: url(${imgFoot});
`;

export const FooterBack = styled.div`
`;

export const FooterTitle = styled.div`
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 5rem;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    margin-top: 336px;
    display: flex;
    justify-content: center;
    text-align: center;
    @media screen and (max-width: 1100px){
        font-size: 4.8rem;
    }
`;

export const FooterButtonFloat = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 35px;

`;

export const FloatButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 220px;
    height: 49px;

    background: #EF4B6C;
    border-radius: 25px;
    border: none;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 35px;
    letter-spacing: 0.08em;
    color: #FFFFFF;
    transition: all .5s ease;

    &:hover {
    transition: all .5s ease-in-out;
    background: #EF4B6C !important;
    opacity: .9;
    cursor: pointer;
    }
`;

export const FooterLinks = styled.div`
    width: 220px;
    height: 49px;
`;

export const LinkedIn = styled.div`
    width: 220px;
    height: 49px;
`;