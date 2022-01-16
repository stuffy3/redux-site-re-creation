import React from 'react'
import "./Header.css"
const Header = () => {
    return (
        <div>
            <header className='bannerPrimary'>
                <div className='container'>
                    <div className='reduxLogoTitle'>
                        <img src='https://redux-toolkit.js.org/img/redux_white.svg' alt="redux logo" width={100} height={100}></img>
                        <h1><strong>Redux Toolkit</strong></h1>
                    </div>
                    <p>The official, opinionatem batteries-included toolset for efficient Redux development</p>
                    <div className='buttonTitle'>
                        <a className='secondButton' href='/getting-started'>Get Started</a> 
                    </div>
                </div>
            </header>
        </div>
    )
    
}

export default Header