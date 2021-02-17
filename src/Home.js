import React from 'react'
import HomePageBest from './components/HomePageBest'
import HomePageBlog from './components/HomePageBlog'
import HomePageBody from './components/HomePageBody'
import HomePageGrid from './components/HomePageGrid'
import HomePageInteritor from './components/HomePageInteritor'
import HomePageLorem from './components/HomePageLorem'
import HomePageRed from './components/HomePageRed'
import HomePageSection from './components/HomePageSection'

const Home = () => {
    return (
        <div style={{width:'100vw', margin: '0px', padding: '0px', boxSizing: 'border-box', overflow:'hidden'}}>
            <HomePageSection />
            <HomePageBody />
            <HomePageBest />
            <HomePageGrid />
            <HomePageInteritor />
            <HomePageLorem />
            <HomePageRed />
            <HomePageBlog />
        </div>
    )
}

export default Home
