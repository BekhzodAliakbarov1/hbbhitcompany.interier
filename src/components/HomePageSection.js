import React from 'react'
import sectionBg from '../assests/gallery/section_bg.png'
import style from '../styles/HomePageSection.module.css'

const HomePageSection = () => {
    return (
        <div className={style.section} style={{backgroundImage: `url(${sectionBg})`}}>
            <div className={style.container}>
                <div className={style.box}>
                    <div className={style.square}></div>
                    <h4>Clean and Modern</h4>
                    <p>For each project we establish relationships with partners who we know will help us.</p>
                </div>
                <div className={style.box}>
                    <div className={style.square}></div>
                    <h4>Clean and Services</h4>
                    <p>For each project we establish relationships with partners who we know will help us.</p>
                </div>
                <div className={style.box}>
                    <div className={style.square}></div>
                    <h4>Clean and Modern</h4>
                    <p>For each project we establish relationships with partners who we know will help us.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePageSection
