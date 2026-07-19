import React from "react";
import "./skills.scss";

const Skills = () => {
    return (
        <section className="third-wrap" id="skills">
            <div className="grid">
                <h3>Skills</h3>
                <div className="skill-wrap">
                    <div className="othr-skill-wrap" id="dwnld-resume">
                        <div className="inner-wrap">
                            <ul>
                                <li>React</li>
                                <li>Javascript</li>
                                <li>NextJS</li>
                                <li>SCSS &amp; LESS</li>
                            </ul>
                            <ul>
                                <li>AWS</li>
                                <li>CDK</li>
                                <li>Kubernetes</li>
                                <li>Typescript</li>
                            </ul>
                            <ul>
                                <li>Agile Methodologies</li>
                                <li>Micro-Frontends</li>
                                <li>ExpressJS</li>
                                <li>Fastify</li>
                            </ul>
                            <ul>
                                <li>Newrelic</li>
                                <li>Jest</li>
                                <li>CI/CD</li>
                                <li>Optimizely</li>
                            </ul>
                        </div>
                    </div>
                    <h4>Certifications</h4>
                    <p className="certification">
                        AWS Certified Cloud Practitioner - April 2025 <img src="images/aws-certification.png" alt="AWS Certification Badge" />
                    </p>
                    <div className="dwnld-wrap">
                        <p>Download my Resume</p>
                        <a
                            className="dwnld-btn"
                            href="./assets/TejasNashikkar_Resume.pdf"
                            download
                        >
                            <img
                                src="images/download.png"
                                alt="download-button"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
