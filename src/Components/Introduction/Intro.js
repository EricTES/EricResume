import React, { Component } from "react";
import classes from "./Intro.module.css";
import { Container, Row, Col } from "react-bootstrap";
class Intro extends Component {
  render() {
    return (
      <div className={classes.intro_section} id="intro_component">
        <div className={classes.intro}>
          <Container>
            <Row>
              <Col>
                <h1
                  style={{
                    color: "white",
                  }}
                >
                  How's it going? Nice to meet you!
                </h1>
                <h2
                  style={{
                    marginTop: "30px",
                    color: "white",
                  }}
                >
                  I started my journey of Software Development back in 2017 when
                  I enrolled in the Bachelor's of Information Technology at La
                  Trobe University. I recently graduate in December 2019.
                  <br></br> <br></br> I love taking on challenges and learning
                  new things. Even whilst pursuing my degree I would dedicate
                  some time each day to learning new skills, technology and
                  industry trends. I have done so by enrolling myself in online
                  courses, completing personal projects as well as contributing
                  to open source codes.<br></br> <br></br>I have a serious
                  passion for software development and hope to one day make a
                  change in this world through technology.
                </h2>
              </Col>
            </Row>
          </Container>
        </div>
        <div className={classes.skill_section}>
          <Container>
            <Row className={classes.skills}>
              <Col className={classes.front_end}>
                <img
                  className={classes.is_skill_icon}
                  src={require("../../images/WebDesignIcon.svg")}
                />
                <h1 className={classes.skill_title}>Front-End</h1>
                <p className={classes.description}>
                  I enjoy designing and building websites. I always push the
                  boundaries of what I know and try new technics..
                </p>

                <div className={classes.list}>
                  <p>Skills:</p>
                  <p>HTML, CSS, SASS, jQuery, Javascript</p>
                </div>
                <div className={classes.list}>
                  <p>Framework & Tools:</p>
                  <ul>
                    <li>React</li>
                    <li>Angular</li>
                    <li>Bootstrap</li>
                    <li>Bulma</li>
                    <li>Visual Studio Code</li>
                    <li>Atom</li>
                  </ul>
                </div>
              </Col>
              <Col className={classes.back_end}>
                <img
                  className={classes.is_skill_icon}
                  src={require("../../images/BackendIcon.svg")}
                />
                <h1 className={classes.skill_title}>Back-End</h1>
                <p className={classes.description}>
                  Problem solving is my forte. I spend a lot of time honing my
                  algorithm and coding skills.
                </p>

                <div className={classes.list}>
                  <p>Languages:</p>
                  <p>Java, Python, Ruby, Node.js, Express</p>
                </div>

                <div className={classes.list}>
                  <p>IDE & Tools:</p>
                  <ul>
                    <li>IntelliJ</li>
                    <li>Eclipse</li>
                    <li>Git</li>
                    <li>Bash</li>
                    <li>Linux</li>
                  </ul>
                </div>
              </Col>
              <Col className={classes.database}>
                <img
                  className={classes.is_skill_icon}
                  src={require("../../images/warehouseicon.svg")}
                />
                <h1 className={classes.skill_title}>Database & Auth</h1>
                <p className={classes.description}>
                  I have experience working with Databases and basic
                  Authentication from personal projects and Uni.
                </p>

                <div className={classes.list}>
                  <p>Database:</p>
                  <p>Sql, MySql, Oracle, MongoDB</p>
                </div>

                <div className={classes.list}>
                  <p>Authentication:</p>
                  <ul>
                    <li>Google Auth</li>
                    <li>npm Auth</li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Intro;
