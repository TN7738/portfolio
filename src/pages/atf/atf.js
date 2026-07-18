import React from "react";
import './atf.scss';
import Typewriter from "../Typewriter/Typewriter";
import ScrollIntoView from 'react-scroll-into-view';

const ATF = () => {
    return(
        <section className="atf-wrap">
            <header>
                <div className="head-wrap">
                    <div className="grid">
                        <ul>
                            <li>
                                <ScrollIntoView selector="#about">
                                    <a>About</a>
                                </ScrollIntoView>
                            </li>
                            <li>
                                <ScrollIntoView selector="#skills">
                                    <a>Skills</a>
                                </ScrollIntoView>
                            </li>
                            <li>
                                <ScrollIntoView selector="#career">
                                    <a>Career</a>
                                </ScrollIntoView>
                            </li>
                            <li>
                                <ScrollIntoView selector="#contact-me">
                                    <a>Contact Me</a>
                                </ScrollIntoView>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <div className="first-wrap">
                <div className="grid">
                    <div className="after-wrap">
                        <div className="cent-wrap">
                            <img src="images/plane.gif" alt="plane-gif" />
                            <h1>Tejas Nashikkar</h1>
                            <h2 className="line2">I am a <Typewriter /></h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ATF;