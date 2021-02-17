import React from 'react'
import style from '../styles/HomePageGrid.module.css'
import gallery7 from '../assests/gallery/gallery7.png'
import gallery2 from '../assests/gallery/gallery2.png'
import gallery3 from '../assests/gallery/gallery3.png'
import gallery4 from '../assests/gallery/gallery4.png'
import gallery5 from '../assests/gallery/gallery5.png'
import gallery6 from '../assests/gallery/gallery6.png'

const HomePageGrid = () => {
    return (
        <div className={style.grid_page}>
           <div style={{backgroundImage: `url(${gallery7})`}}></div> 
           <div style={{backgroundImage: `url(${gallery2})`}}></div> 
           <div style={{backgroundImage: `url(${gallery3})`}}></div> 
           <div style={{backgroundImage: `url(${gallery4})`}}></div> 
           <div style={{backgroundImage: `url(${gallery5})`}}></div> 
           <div style={{backgroundImage: `url(${gallery6})`}}></div> 
        </div>
    )
}

export default HomePageGrid
