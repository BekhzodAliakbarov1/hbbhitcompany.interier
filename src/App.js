import React from 'react'
import Navbar from './Navbar'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Home from './Home'
import Footer from './Footer'

import HomePageLorem from './components/HomePageLorem'
import HomePageInteritor from './components/HomePageInteritor'
import HomePageGrid from './components/HomePageGrid'
import HomePageBest from './components/HomePageBest'
import HomePageRed from './components/HomePageRed'
import HomePageBlog from './components/HomePageBlog'
import HomePageTop from './components/HomePageTop'
import NavbarMobile from './NavbarMobile'

const App = () => {
    return (
        <div>
            <Router>
                <Navbar />
                <NavbarMobile />
                <HomePageTop />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <HomePageLorem />
                        <HomePageInteritor />
                    </Route>
                    <Route path="/services">
                        <HomePageBest />
                        <HomePageRed />
                        <HomePageBlog />
                    </Route>
                    <Route path="/gallery">
                        <HomePageGrid />
                    </Route>
                    <Route path="/contact">
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    )
}

export default App
