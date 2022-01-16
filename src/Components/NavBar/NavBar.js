import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavLinkLogo, Search} from './NavBarElements'
const NavBar = () => {
    return (
        <>
          <Nav>
            <NavLinkLogo to="/" className='logo'>
                <Bars />
                <img src="https://redux-toolkit.js.org/img/redux.svg" alt="dark redux logo" width={34} height={34}   ></img>
                <strong>Redux Toolkit</strong>       
           </NavLinkLogo>    
            <NavMenu>
                <NavLink to="/getting-started" activeStyle>
                    <strong>Getting Started</strong>
                </NavLink>
                <NavLink to="/tutorials" activeStyle>
                    <strong>Tutorials</strong>
                </NavLink>
                <NavLink to="/usage-guide" activeStyle>
                    <strong>Usage Guide</strong>
                </NavLink>
                <NavLink to="/API" activeStyle>
                    <strong>API</strong>
                </NavLink>
                <NavLink to="/rtk-query" activeStyle>
                   <strong>RTK Query</strong>
                </NavLink>
                <NavLink to="https://github.com/reduxjs/redux-toolkit" activeStyle>
                    <strong>GitHub</strong>
                </NavLink>
            </NavMenu>
            <Search>
                <button type='button'>
                <span className='glassSearch'>
                    <svg width={20} height={20} viewBox='0 0 20 20'>
                    <path d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z" 
                    stroke="white" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <span className="searchPlaceholder">
                        Search
                    </span>
                </span>
                <span className='ctrlKey'>
                <svg width="15" height="15" class="DocSearch-Control-Key-Icon">
                    <path d="M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953" 
                    stroke-width="1.2" stroke="#7f8497" fill="none" stroke-linecap="square">
                    </path>
                 </svg>
                </span>
                <span className="ctrlKey"><strong>K</strong></span>
                </button>
            </Search>
          </Nav>  

        </>
    )  
}

export default NavBar