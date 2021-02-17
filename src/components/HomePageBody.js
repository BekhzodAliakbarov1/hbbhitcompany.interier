import React from 'react'
import gallery8 from '../assests/gallery/gallery8.png'
import style from '../styles/HomePageBody.module.css'


const HomePageBody = () => {
    return (
        <div className={style.gallery8} style={{backgroundImage: `url(${gallery8})`}}>
            <div className={style.block}>
                <div className={style.box}>
                    <div className={style.inform}>
                        <p>OUR PROFESSIONAL SERVICES</p>
                        <h3>We Will Create Modern And First Class Intorior.</h3>
                        <p className={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.</p>
                        <p className={style.lorem}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                    </div>                
                    <div className={style.discover}>
                        <div className={style.discoverRed}>
                            <p>About Us</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePageBody
