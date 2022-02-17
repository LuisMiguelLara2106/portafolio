import styled from "styled-components";

import img from '../../assets/Home/hero.svg'

import img2 from '../../assets/Home/header_tablet.svg'

import img3 from '../../assets/Home/hero-990.svg'

export const HeroContainer = styled.div`
    width: 100%;
    min-width: 320px;
    /* height: 100%; */
    /* min-height: fit-content;  */
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 1;
    background: #FAF8FC;
`;

export const HeroParent = styled.div`
    color: #ffffff;
    padding-left: 120px;
    padding-right: 120px;
    width: 1440px;
    height: 900px;
    margin-top: 0px;
    top: 0;
    background-image: url(${img});
    
    @media screen and (max-width: 1300px) { 
    
    height: 900px;
    width: 1300px;
    background-image: url(${img2});
    }

    @media screen and (max-width: 1100px) {
    
    text-align: center;
    height: 900px;
    width: 100%;
    /* min-width: 980px; */
    background-image: url(${img3});
    }
`;

export const HeroDetails = styled.div`
    
    padding: 0%;
    text-align: start;

    @media screen and (max-width: 1100px) {
        flex-direction: column;
        display: flex;
        justify-content: center;
        align-items:center;
        
    }
    
`;

export const HeroDetailsName = styled.div`
    margin-top: 152px;
    margin-bottom: 0%; 

    @media screen and (max-width: 1300px) {
        margin-top: 250px;
        margin-bottom: 0%;   
    }

    @media screen and (max-width: 1100px) {
        margin-top: 80px;
        display: flex;
        justify-content: center; 
    }
    
`;

export const PrimaryText = styled.div`
    margin: 0%;
    width: 670px;
    height: 120px;
    font-family: 'Playfair Display', serif;
    font-style: normal;
    font-weight: 800;
    font-size: 9rem;
    line-height: 120px;
    letter-spacing: 0.05em;

    @media screen and (max-width: 1300px) {
        height: 100px;
        font-weight: 800;
        font-size: 7rem;
    }
    @media screen and (max-width: 1100px) {
        /* margin-top: 80px; */
        margin: 0;
        display: flex;
        justify-content: center; 
        align-items: center;
        width: 359px;
        height: 84px; 
        font-weight: 800;
        font-size: 4.8rem;
    }
`;

export const HeroDetailsRole = styled.div`
    width: 692px;
    height: 70px;

    @media screen and (max-width: 1300px) {
        margin: 0%;
    }
    @media screen and (max-width: 1100px) {
        /* margin-top: 80px; */
        display: flex;
        justify-content: center; 

        width: 359px;
        height: 64px; 
        margin: 0%;
        padding: 0%;
        font-weight: 600;
        font-size: 1.8rem;
        text-align:center;
    }
`;

export const SecondaryText = styled.div`
    margin: 0%;
    /* width: 692px;
    height: 70px; */
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 3rem;
    line-height: 35px;
    letter-spacing: 0.08em;
    margin-top: 10px;

    @media screen and (max-width: 1300px) {
        margin: 0%;
        width: 392px;
        height: 70px;
        font-weight: 600;
        font-size: 2rem;
    }
    
`;

export const HeroButtonFloat = styled.div`
  
`;

export const FloatButton = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 148px;
    /* position: absolute; */
    width: 220px;
    height: 49px;

    background: #FFFFFF;
    border-radius: 25px;
    border: none;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 35px;
    letter-spacing: 0.08em;
    color: #3D73BE;

    transition: all .5s ease;

    @media screen and (max-width: 1300px) {
        margin-top: 25px;
    }
    @media screen and (max-width: 1100px) {
        margin-top: 40px;
    }
    &:hover {
    transition: all .5s ease-in-out;
    background-color: #f3f3f3 !important;
    cursor: pointer;
    }
`;

export const HeroImagMobile = styled.img`
    display: none;
    -webkit-transition: -webkit-transform 0.4s;
    transition: transform 0.4s;
    @media screen and (max-width: 1100px) {
        display:unset;
        margin-top: 40px;
    }
    &:hover {
        -webkit-transform: scale(1.8) rotate(0.01deg);
        transform: scale(1.1) rotate(0.01deg);
    }
`;



