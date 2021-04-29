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
                                Hi there! I am <strong>&nbsp;Dilshan Chathuranga</strong>
                                <br />A passionate programmer and a Coach, born and brought up in India. I am a Full Stack Web Developer with React.js, Redux, Express.js, Node.js, and PostgreSQL as my tech stack.
                                <br />
                                In 2019, I successfully completed my Engineering with specialization in 'Electronics and Telecommunication'.
                                <br />
                                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them.
                                <br />
                                Along with that, I also help people as a COACH on their journey of becoming a professional programmer.
                                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                    
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
