import React from 'react'
import style from '../styles/HomePageBest.module.css'
import sectionBg from '../assests/gallery/section_bg.png'
import services1 from '../assests/gallery/services1.png'
import services2 from '../assests/gallery/services2.png'
import services3 from '../assests/gallery/services3.png'

const HomePageBest = () => {
    return (
        <div className={style.best_page} style={{ backgroundImage: `url(${sectionBg})` }}>
            <div className={style.title}>
                <p>OUR PROFESSIONAL SERVICES</p>
                <h2>Best Interitor Services</h2>
            </div>
            <div className={style.cards}>
                <div className={style.card}>
                    <div className={style.card_img} style={{backgroundImage: `url(${services1})`}}></div>
                    <div className={style.card_body}>
                        <h3><span>------</span> Lighting</h3>
                        <p>For each project we establish relationships with partners who we know will help us.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_img} style={{backgroundImage: `url(${services2})`}}></div>
                    <div className={style.card_body}>
                        <h3><span>------</span> Interior Design</h3>
                        <p>For each project we establish relationships with partners who we know will help us.</p>
                    </div>
                </div>
                <div className={style.card}>
                    <div className={style.card_img} style={{backgroundImage: `url(${services3})`}}></div>
                    <div className={style.card_body}>
                        <h3><span>------</span> Office Decoretion</h3>
                        <p>For each project we establish relationships with partners who we know will help us.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageBest
