import React from 'react'
import style from '../styles/HomePageInteritor.module.css'
import sectionBg from '../assests/gallery/section_bg.png'
import team1 from '../assests/gallery/team1.png'
import team2 from '../assests/gallery/team2.png'
import team3 from '../assests/gallery/team3.png'

const HomePageInteritor = () => {
    return (
        <div className={style.best_page} style={{ backgroundImage: `url(${sectionBg})` }}>
            <div className={style.title}>
                <p>CREATIVE DERECTOR</p>
                <h2>Best Interitor Services</h2>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.card_img} style={{ backgroundImage: `url(${team1})` }}></div>
                    <div className={style.card_body}>
                        <h2>Jhon Sunsa</h2>
                        <p><span>------</span> Creative derector</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_img} style={{ backgroundImage: `url(${team2})` }}></div>
                    <div className={style.card_body}>
                        <h2>Jhon Sunsa</h2>
                        <p><span>------</span> Creative derector</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_img} style={{ backgroundImage: `url(${team3})` }}></div>
                    <div className={style.card_body}>
                        <h2>Jhon Sunsa</h2>
                        <p><span>------</span> Creative derector</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageInteritor
