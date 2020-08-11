import React, { Component } from "react";
import classes from "./Experiences.module.css";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";

class Experiences extends Component {
 
  render() {

    
   
    return (
      <div className={classes.experiences_section}>
        <div className={classes.experiences_desc}>
          <Container>
            <h1
              style={{
                color: "white",
              }}
            >
              My Work Experience
            </h1>
            <h2
              style={{
                marginTop: "30px",
                color: "white",
              }}
            >
              Halfway through my university degree, I had the opportunity to
              work at multiple places. Two of which was through my own
              application ( Martview & Clark Rubber) and one is through my
              university (LapBase).
              <br></br> <br></br> This has allowed me to acquire many valuable
              skills that has enhanced my experience and overall ability in my
              journey of software development. It has given me the aptitude to
              deal with future challenges and boost my confidence.
            </h2>
          </Container>
        </div>
        <div className={classes.experiences}>
          <Container>
            <Row>
              <Col>
                <CardDeck>
                  <Card className={classes.card} style={{ marginReft: "70px" }}>
                    <Card.Body>
                      <Card.Title>
                        <h1>Front End Developer</h1>
                      </Card.Title>
                      <Card.Text>
                        <div className={classes.experience_details}>
                          <div className={classes.logo}>
                            <img
                              src={require("../../images/lapbaselogo.svg")}
                            />

                            <p>03/2019 - 08/2019</p>
                          </div>
                          <div className={classes.responsibilities}>
                            <p>Responsibilities:</p>
                            <p>
                              My main role is Developing and Designing the
                              front-end. However , I occasionally help with the
                              backend and API.
                            </p>
                          </div>
                          <div className={classes.skills_aquire}>
                            <p>Skills aquired:</p>
                            <p>
                              - Angular - CSS <br></br>- TypeScript - HTML{" "}
                              <br></br>- C-Sharp - Bulma
                            </p>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card className={classes.card} style={{ marginLeft: "70px" }}>
                    <Card.Body>
                      <Card.Title>
                        <h1> Developer</h1>
                      </Card.Title>
                      <Card.Text>
                        <div className={classes.experience_details}>
                          <div className={classes.logo}>
                            <img
                              src={require("../../images/martviewlogo.svg")}
                            />

                            <p>01/2019 - Present</p>
                          </div>
                          <div className={classes.responsibilities}>
                            <p>Responsibilities:</p>
                            <p>
                              My work consist of whatever MartView wants me to
                              work on at the time. I typically spend about 2 - 3
                              weeks learning prior to starting a project
                            </p>
                          </div>
                          <div className={classes.skills_aquire}>
                            <p>Skills aquired:</p>
                            <p>
                              - Google Amp - Instagram API<br></br>- Node.js -
                              Facebook API <br></br>- Python
                            </p>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
            <Row>
              <Col>
                <CardDeck>
                  <Card
                    className={classes.card}
                    style={{ margin: "0px 300px" }}
                  >
                    <Card.Body>
                      <Card.Title>
                        <h1>Sales Asistant</h1>
                      </Card.Title>
                      <Card.Text>
                        <div className={classes.experience_details}>
                          <div className={classes.logo}>
                            <img
                              src={require("../../images/clarkrubberlogo.svg")}
                            />

                            <p>07/2018 - 10/2018</p>
                          </div>
                          <div className={classes.responsibilities}>
                            <p>Responsibilities:</p>
                            <p>
                              Due to the store being understaffed at the time, I
                              had to do multiple things. I was responsible for
                              customer services and the making of products.
                            </p>
                          </div>
                          <div className={classes.skills_aquire}>
                            <p>Skills aquired:</p>
                            <p>
                              - Customer Service - Learning products <br></br>-
                              Selling products - Communication <br></br>- Team
                              work{" "}
                            </p>
                          </div>
                        </div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Experiences;
