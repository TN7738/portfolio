import React from "react";
import './quote.scss';

const Quotes = () => {
    return(
        <section className="fifth-wrap">
            <div className="grid">
                <h3>Inspiring quotes</h3>
                <div className="swiper">
                    <div className="quotes-wrap swiper-wrapper">
                        <div className="quote swiper-slide">
                            <img src="images/steve-jobs.jpg" alt="Steve Jobs" />
                            <p className="txt">"Because the people who are crazy enough to think they can change the world are the ones who do."</p>
                            <p className="bywho">- Steve Jobs</p>
                        </div>
                        <div className="quote swiper-slide">
                            <img src="images/bill-gates.jpg" alt="Bill Gates" />
                            <p className="txt">"Success is a lousy teacher. It seduces smart people into thinking they can't lose."</p>
                            <p className="bywho">- Bill Gates</p>
                        </div>
                        <div className="quote swiper-slide">
                            <img src="images/linus-torvalds.jpg" alt="Linus Torvalds" />
                            <p className="txt">"See, you not only have to be a good coder to create system like Linux, you have to be a sneaky bastard too."</p>
                            <p className="bywho">- Linus Torvalds</p>
                        </div>
                        <div className="quote swiper-slide">
                            <img src="images/larry-page.jpg" alt="Larry Page" />
                            <p className="txt">"If you're changing the world, you're working on important things. You're excited to get up in the morning."</p>
                            <p className="bywho">- Larry Page</p>
                        </div>
                    </div>
                    <div className="swiper-pagination"></div>
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        </section>
    );
};

export default Quotes;