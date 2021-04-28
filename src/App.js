import React from "react";
import Fade from "react-reveal/Fade";
import Container from "react-bootstrap/Container";

// Components
import MyNavbar from "./components/Navbar/MyNavbar.component";
import MyCarousel from "./components/Carousel/MyCarousel.component";
import TextCarousel from "./components/TextCarousel/TextCarousel.component";

// Pages
import About from "./pages/about/about.component";

import { Parallax } from "react-parallax";
// CSS
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousel />
      <TextCarousel />
      {/* About me */}
      <div>
        <Parallax
          blur={{ min: -30, max: 30 }}
          bgImage={require("./assets/img/parallax/background.webp")}
          bgImageAlt=""
          strength={-200}
        >
          <div>
            <Container className="container-box rounded">
              <Fade duration={500}>
                <About />
              </Fade>
            </Container>
          </div>
        </Parallax>
      </div>
      <Container className="container-box rounded">
        {/* <Slide bottom duration={500}> */}
        <hr />
        {/* <Skills /> */}
        {/* </Slide> */}
      </Container>
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />

            {/* <Experience /> */}
          </Fade>
        </Container>
      </div>
      <Container className="container-box rounded">
        {/* <Slide bottom duration={500}> */}
        <hr />
        {/* <TimeLine /> */}
        {/* </Slide> */}
      </Container>
      <Container className="container-box rounded">
        <Fade duration={500}>
          <hr />
          {/* <ContactForm /> */}
        </Fade>
      </Container>

      <hr />
      {/* <FooterPanel /> */}
    </div>
  );
};

export default App;
