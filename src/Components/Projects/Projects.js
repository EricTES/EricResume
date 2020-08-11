import React, { Component } from "react";
import classes from "./Projects.module.css";
import Project from "./Project/Project";
import { Button, ButtonGroup, Container, Row, Col } from "react-bootstrap";

class Projects extends Component {
  state = {
    lapbase: {
      title: "LapBase App",
      technology: "Angular",
      description:
        "I build this app with 4 other team members whilst interning for LapBase. It serves as a way for patients to track their BMI and food intake post fat surgery. This app was build completely from scratch ranging from the planning, coding to designing. Aside from the technical skills, I have aquired so many soft skills and had many priceless experiences. The technology used was Angular, Typescript, C-sharp and Azure.",
    },
    burger: {
      title: "Burger Order App",
      technology: "React",
      description:
        "The Burger app is the biggest personal projects I had done. It took me a good 2 months to finish. There are many features to this app such as routing to different pages, authentication, using Firebase and etc.",
    },
    blackjack: {
      title: "BlackJack",
      technology: "Python/Tkinter",
      description:
        "Whilst learning Python , I decided to make a simple game to solidify my knowledge. Although it seems simple but there was a lot of challenges whilst making this game. Add to the fact I had just started learning Python and Tkinter , the game of BlackJack had more features than I initially thought. Overall, this project had not only made me a better Python programmer but a better programmer in general. ",
    },
    simonsays: {
      title: "Simon Says",
      technology: "Html/Css/jquery",
      description:
        "This is one of my earliest projects. I had just learnt how to design a user interface with simple html and css. After learning javascript and jquery as well , I decided to combine the skills and make a simple 'Simon Says' game. There are even ingame sounds that goes with it",
    },
    tictactoe: {
      title: "Tic Tac Toe",
      technology: "Python/Pygame",
      description:
        "Tic Tac Toe was the closes I have ever got to making my own AI. I have always been passionate about algorithm and have wanted to expand into AI. So I decided to explore this option. It utilises the Min Max algorithm to work out the most optimal path for the computer the place a move ",
    },
    spaceinvaders: {
      title: "Space Invaders",
      technology: "Python/Pygame",
      description:
        "Space Invaders was a step up from the BlackJack game. I wanted to see how well I was able to transfer my skills from Tkinter to Pygame.",
    },
  };

  render() {
    return (
      <div className={classes.project_section}>
        <Container>
          <Row>
            <Col>
              <h1
                style={{
                  color: "black",
                }}
              >
                Personal Projects
              </h1>
              <h2
                style={{
                  marginTop: "30px",
                  color: "black",
                }}
              >
                Here are some personal projects I have done in my spare time.{" "}
                <br></br>
                Want to know more?{" "}
                <a
                  href="mailto:erictes96@gmail.com"
                  style={{ color: "#f85f00" }}
                >
                  Email me
                </a>
              </h2>
            </Col>
          </Row>
        </Container>
        <Container className={classes.project_list}>
          <Row>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.lapbase}
                imageurl={require("../../images/Image 6.svg")}
              ></Project>
            </Col>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.burger}
                imageurl={require("../../images/Image 4.svg")}
              ></Project>
            </Col>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.blackjack}
                imageurl={require("../../images/Image 2.svg")}
              ></Project>
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.simonsays}
                imageurl={require("../../images/Image 7.svg")}
              ></Project>
            </Col>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.tictactoe}
                imageurl={require("../../images/Image 5.svg")}
              ></Project>
            </Col>
            <Col
              style={{
                margin: "0px -30px",
              }}
            >
              <Project
                information={this.state.spaceinvaders}
                imageurl={require("../../images/Image 3.svg")}
              ></Project>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <a href="https://github.com/EricTES?tab=repositories">
              <Button
                className={classes.checkout_button}
                variant="outline-primary"
                size="lg"
              >
                Checkout my Github
              </Button>
            </a>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Projects;
