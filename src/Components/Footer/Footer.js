import React, { Component } from "react";
import classes from "./Footer.module.css";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";
import {NavLink} from 'react-router-dom';


class Footer extends Component {
  render() {
    return (
      <div className={classes.footer}>
        <Container>
          <Row>
            <div className={classes.call_to_action}>
              <div className={classes.hit_me_up_section}>
                <Col style={{ display: "inline-block", width: "50%" }}>
                  <p>Interested in finding out more?</p>
                </Col>
                <Col style={{ display: "inline-block", width: "50%" }}>
                <NavLink to="/contact">
                  <Button
                    className={classes.hit_me_up_button}
                    variant="outline-primary"
                  >
                    Hit Me Up
                  </Button>
                  </NavLink>
                </Col>
              </div>
            </div>
          </Row>
          <Row>
            <Col>
              <div className={classes.footer_information}>
                <a href="https://www.linkedin.com/in/eric-tang-72b92318b">
                  <img
                    className={classes.image}
                    src={require("../../images/linkedin.svg")}
                  />
                </a>
                <a href="mailto:erictes96@gmail.com">
                  <img
                    className={classes.image}
                    src={require("../../images/mail.svg")}
                  />
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Footer;
