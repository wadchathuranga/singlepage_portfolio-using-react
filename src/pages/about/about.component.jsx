import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import './about.style.css'

import profile_img from '../../assets/img/profile/profile.jpg'

const About = () => {
    return (
        <div id="about">
            <div className="about">
                <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
                <Container>
                    <Row className="pt-3 pb-5 align-items-center">

                        {/* profile image */}
                        <Col xs={12} md={6}>
                            <Row className="justify-content-center mb-2 mr-2 ">
                                <Image className="profile justify-content-end" src={profile_img} alt="profile image" thumbnail fluid />
                            </Row>
                        </Col>

                        {/* about me description */}
                        <Col xs={12} md={6}>

                            {/* description */}
                            <Row className=" align-items-start p-2 my-details rounded">
                                I am <strong>&nbsp;Dilshan Chathuranga</strong>
                                <br />
                                <br />
                                <p>
                                    I'm passionate programmer and a developer, in Sri Lanka.<br/>
                                    I am a Full Stack Web Developer with Laravel, Django, Reactjs, Nodejs, MongoDB and Mysql as my tech stack.
                                </p>
                                <p>
                                    In 2022, I will successfully complete my Computer Sciences Degree.<br />
                                    Working with the clients, my goal is always driven towards providing amazing experience 
                                    with the best level of quality and service to them.
                                </p>
                                <p>
                                    I love learning about new technologies and use them to build better and scalable products.
                                    Along with that, I also help people as a good human on their journey of becoming a professional programmer.<br />
                                </p>
                    
                                {/* buttons */}
                                <Col className="d-flex justify-content-center flex-wrap">
                                    <div>
                                        <a href="#contact">
                                            <Button className="m-2" variant="outline-primary"> Let's talk </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#contact" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-success"> My Resume </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#contact" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-dark"> GitHub </Button>
                                        </a>
                                    </div>
                                    <div>
                                        <a href="#contact" target="_blank" rel="noopener noreferrer">
                                            <Button className="m-2" variant="outline-info"> LinkedIn </Button>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    )
}

export default About
