import React from 'react'
import style from '../styles/HomePageTop.module.css'
import gallery1 from '../assests/gallery/gallery1.png'
import heroLine from '../assests/gallery/hero_line.png'

const HomePageTop = () => {
    return (
        <div className={style.gallery} style={{ backgroundImage: `url(${gallery1})` }}>
            <div className={style.container}>
                <h3>Welcome to Intorior</h3>
                <span><img src={heroLine} alt="#" /></span>
                <br />
                <h2>Modern Interior <br/> & Design</h2>
            </div>
        </div>


    )
}

export default HomePageTop