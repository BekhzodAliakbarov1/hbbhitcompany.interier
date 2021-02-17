import React from 'react'
import style from '../styles/HomePageBlog.module.css'
import sectionBg from '../assests/gallery/section_bg.png'
import home_blog1 from '../assests/gallery/home_blog1.png'
import home_blog2 from '../assests/gallery/home_blog2.png'

const HomePageBlog = () => {
    return (
        <div className={style.best_page} style={{ backgroundImage: `url(${sectionBg})` }}>
        <div className={style.title}>
            <p>OUR PROFESSIONAL SERVICES</p>
            <h2>Best Interitor Services</h2>
        </div>
        <div className={style.cards}>
            <div className={style.card}>
                <div className={style.card_img} style={{backgroundImage: `url(${home_blog1})`}}></div>
                <div className={style.card_body}>
                    <div className={style.card_div}>
                        <div>
                            <p>October 27, 2020</p>
                        </div>
                        <div>
                            <p> By Admin - 30 Likes - 4 Comments</p>
                        </div>
                    </div>
                    <h3>16 Easy Ideas to Use Everyday Stuff in Kitchen.</h3>
                    <p><span>------</span> Lighting</p>
                </div>
            </div>
            <div className={style.card}>
                <div className={style.card_img} style={{backgroundImage: `url(${home_blog2})`}}></div>
                <div className={style.card_body}>
                <div className={style.card_div}>
                        <div>
                            <p>October 27, 2020</p>
                        </div>
                        <div>
                            <p> By Admin - 30 Likes - 4 Comments</p>
                        </div>
                    </div>
                    <h3>16 Easy Ideas to Use Everyday Stuff in Kitchen.</h3>
                    <p><span>------</span> Interior Design</p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default HomePageBlog
