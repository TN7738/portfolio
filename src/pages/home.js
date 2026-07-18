import React from "react";
import ATF from './atf/atf';
import AboutMe from './aboutme/aboutme';
import Skills from './skills/skills';
import Quotes from './quote/quote';
import Contact from './contact/contact';
import Footer from './footer/footer';
import Career from "./career/Career";

class Home extends React.Component{
    render(){
        return(
            <div className="parent-wrap">
                <ATF />
                <AboutMe />
                <Skills />
                <Career />
                <Quotes />
                <Contact />
                <Footer />
            </div>
        )
    }
}

export default Home;