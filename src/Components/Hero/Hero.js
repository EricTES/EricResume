import React, { Component } from "react";
import classes from "./Hero.module.css";
import {
 
  Container,
  Row,
  Col,
  Jumbotron,
} from "react-bootstrap";

import {NavLink} from 'react-router-dom';

import { Link, animateScroll as scroll } from "react-scroll";

class Hero extends Component {
  render() {
    return (
      <div>
        <Container fluid>
          <Row className={classes.hero_row}>
            <Col lg={9} className={classes.hero}>
              <Jumbotron className={classes.jumbotron}>
                <h1 style={{ fontSize: "4rem", marginBottom: "15px" }}>
                  Hi my name's <b className={classes.orange}>Eric</b>
                </h1>
                <p>
                  . . . I'm a Graduate{" "}
                  <u>
                    <i>Pro</i>
                  </u>
                  grammer
                </p>

                
                <NavLink to="/contact"><button className={classes.button}>Say Hello</button></NavLink>


                <Link
                  activeClass="active"
                  to="intro_component"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={0}
                >
                  <button
                    onclick={this.scrollFunction}
                    className={classes.moreButton}
                  >
                    More
                  </button>
                </Link>
              </Jumbotron>
            </Col>
            <Col lg={1} sm={false}></Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Hero;
