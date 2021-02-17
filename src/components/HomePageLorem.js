import React from 'react'
import style from '../styles/HomePageLorem.module.css'
import testi_logo from '../assests/gallery/testi-logo.png'

const HomePageLorem = () => {
    return (
        <div className={style.m_bottom}>
            <div className={style.lorem}>
                <div className={style.testi_logo} style={{backgroundImage: `url(${testi_logo})`}}></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                <p>Christine Eve <span> - Co Founder</span></p>
            </div>
        </div>
    )
}

export default HomePageLorem
