import React from 'react'
import Typewriter from "typewriter-effect";
import styled from "styled-components";

const MyTitleMessage = styled.h1`
  position: absolute;
  width: 100%;
  top: 22rem;
  z-index: 1;
  margin-top: -125px;
  text-align: center;

  strong {
    font-size: 1.25em;
  }
  div {
    color: ${props => props.theme.textColor};

    text-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
    font-weight: 100;
    letter-spacing: 5px;

    .main {
      font-size: 50px;
    }

    .sub {
      font-size: 27px;
      letter-spacing: 1px;
    }
  }
`;

const TextCarousel = () => {
    return (
        <MyTitleMessage>
            <div className="titleMessage">
                <div className="heading">
                    <div className="main text-center mb-3">
                        Hi, I am
                        <br />
                        <span>
                            <strong>Dilshan Chathuranga</strong>
                        </span>
                    </div>
                    <div className="sub">
                        <Typewriter
                            options={{
                                strings: ['Full Stack Developer', 'Mobile Apps Developer'],
                                autoStart: true,
                                loop: true,
                            }}
                        />
                    </div>
                </div>
            </div>
        </MyTitleMessage>
    )
}

export default TextCarousel
