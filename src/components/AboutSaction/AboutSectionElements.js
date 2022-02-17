import styled from 'styled-components';

import ImgFoto from '../../assets/about/foto.svg';



export const InfoContainer = styled.div`
    color: #fff;
    background: #FAF8FC;
    height: 900px;

    @media screen and (max-width: 1100px){
        height: auto;
        padding-bottom: 110px;
    }
`;

export const InfoContent = styled.div`

`;

export const InfoTittle = styled.div`
    padding-top: 110px;
    /* height: 116px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Heading = styled.h1`
    margin: 0;
    display: flex;
    justify-content: center;
    color: #212529;
    position: static;
    width: 253px;
    height: 30px;
    font-family: Playfair Display;
    font-style: normal;
    font-weight: bold;
    font-size: 5rem;
    line-height: 30px;
    letter-spacing: 0.08em;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const TopLine = styled.h2`
    margin-top: 25px;
    display: flex;
    justify-content: center;
    color: #32353B;
    position: static;
    width: 205px;
    height: 35px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 2rem;
    line-height: 35px;
    letter-spacing: 0.08em;
`;

export const Line = styled.hr`
    margin-top: 25px;
    color: #12AAD7;
    width: 40px;
    border: none;
    height: 2px;
    background-color: #12AAD7; 
`;

export const InfoWrapper = styled.div`
    margin-top: 35px;
    display: flex;
    z-index: 2;
    /* width: 1440px; */
    width: 100%;
    max-width: 1440px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    @media screen and (max-width: 1100px){
        height: auto;
        display: flex;
        justify-content: center;
    }
    
`;

export const InfoRow = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    grid-template-areas: "col2 col1";
    align-items: center;
    background: #FFFFFF;
    width: 995px;
    height: 530px;
    border-radius: 20px;

    @media screen and (max-width: 1100px){
        grid-template-areas: 'col2' 'col1';
        width: 497px;
        height: 920px;
    }
`;

export const Column1 = styled.div`
    grid-area: col1;
    margin: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1100px){
    /* padding: 20px; */
    margin: 0;
    height: 460px;
    width: 100%;
    } 
`;

export const Column2 = styled.div`
    grid-area: col2;
    height: 100%;
    width: 100%;
    @media screen and (max-width: 1100px){
    margin: 0;
    height: 460px;
    width: 100%;
    }
`;


export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    margin-top: 10px;
    @media screen and (max-width: 1100px){
    margin-top: 20px;
    height: auto;
    width: 90%;
    }
`;

export const Presentation = styled.p`
    margin-bottom: 20px;
    color: #626881;
    font-family: Lora;
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 35px;
    letter-spacing: 0.08em;
`;
export const SubTitle = styled.h3`
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 35px;
    letter-spacing: 0.08em;
    color: #32353B;
    margin-bottom: 20px;
    margin-top: 10px;
`;

export const ImgWrap = styled.div`
    /* max-width: 400px; */
    height: 100%;
    width: 99.9%;
    background-image: url(${ImgFoto});
`;

export const ImagenPhoto = styled.img`
    
`;

export const SkillsContainer = styled.div`
    display: flex;
    justify-content: space-between;

`;

export const SkillDev = styled.div`
`;

export const ImgDev = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 210px;
`;

export const SkillDseign = styled.div`

`;

export const ImgDesign = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 210px;
`;