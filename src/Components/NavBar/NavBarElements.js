import styled from 'styled-components'
import {NavLink as Link} from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const NavLinkLogo = styled.div`
    color: #ba8fff;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    img{
        margin-right: 10px; 
        margin-left: -10px;  
    }
`
export const Nav = styled.nav`
    background: #242526;
    position: relative;
    display: flex;
    height: 60px;
    padding: 10px;
    z-index: 10;
`
export const NavMenu = styled.section`
    display: flex;
    margin-left: 45%;
    
    @media screen and (max-width: 1000px) {
        display: none;
    }
`
export const NavLink = styled(Link)`
    color: #ba8fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &:hover {
        color: #ba8fff;
    }
`

export const Bars = styled(FaBars)`
    display: none;
    color: #fff;

    @media screen and (max-width: 1000px) {
        display: flex;
        align-items: center;
        transform: translated(-100, 75%);
        font-size: 1.5rem;
        margin-right: 15px;
        cursor: pointer;
    }
`

export const Search = styled.div`
    display: flex;
    justify-content: flex-end
    flex-wrap: nowrap;
    align-items: center;
    
    

    button {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border: solid;
        border-width: 2px;
        background-color: black;
        border-radius: 40px;
        
        
    }

    button:hover {
        transition-timing-function: cubic-bezier(0.08, 0.52, 0.52, 1);
        transition-duration: 200ms;
        transition-property: border-color;
        border-color: #ba8fff;
    }

    .glassSearch {
        display: flex;
        align-items: center;
        : 15px;
    }

    .searchPlaceholder {
        padding-right: 10px;
        padding-left: 5px;
        color: #7f8497;
        &:hover {
        transition-duration: 200ms;
        transition-property: color;
        color: white;
        }
    }

    .ctrlKey {
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(-26.5deg,#565872,#31355b);
        border-radius: 3px;
        box-shadow: rgb(40, 45, 85) 0px -2px 0px 0px inset, rgb(81, 87, 125) 0px 0px 1px 1px inset, rgba(3, 4, 9, 0.3) 0px 2px 2px 0px
        height: 10px;
        width: 20px;
        margin-right: 0.4em;
        position: relative;
        padding: 0;
        font-weight: 500;
        font-size: 10px;
        color: #7f8497;
    }

`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-left: 24px;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #256cel;
    padding: 10px 22px;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2 ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2 ease-in-out;
        background: #fff;
        color: #010652;
    }
`