import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    /* background: ${({ scrollNav }) => (scrollNav ? '#000' : 'transparent')}; */
    width: 100%;
    min-width: 320px;
    min-height: fit-content; 
    display: flex;
    /* flex-direction: row-reverse; */
    justify-content: center;
    align-items: center;
    /* position: relative; */
    z-index: 2;
    /* flex-direction: column; */
    background-color: transparent;
    height: 80px;
    /* margin-top: -80px; */
    font-size: 1rem;
    position: absolute;
    top: 0;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    padding: 0;
    padding-left: 120px;
    padding-right: 120px;
    width: 1440px;
`;

export const NavLogo = styled(LinkR)`
    color: #FFFFFF;
    opacity: .7;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
    text-decoration: none;
    &:hover {
        transition: all 0.25s ease-in-out;
        color: #FFFFFF;
        opacity: 1;

    }
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    
`;

export const NavLinks = styled(LinkS)`
    color: #FFFFFF;
    opacity: .7;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1.6rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.5rem;
    /* &.active {
        border-bottom: 3px solid #8B63FF;
    } */
    &:hover {
        transition: all 0.25s ease-in-out;
        color: #FFFFFF;
        opacity: 1;

    }
`;
