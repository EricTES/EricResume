import React, { Component } from "react";
import classes from "./Why.module.css";
import { Container, Row, Col, Card, Button, CardDeck } from "react-bootstrap";

class Why extends Component {
  render() {
    return (
      <div className={classes.why_section}>
        <Container>
          <Row>
            <Col>
              <h1>Why Me?</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <img
                className={classes.dottedlines}
                src={require("../../images/Dotted lines.svg")}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardDeck className={classes.deck}>
                <Card className={classes.card}>
                  <Card.Img
                    className={classes.image}
                    variant="top"
                    src={require("../../images/problemsolvingicon.svg")}
                  />
                  <Card.Body className={classes.card_body}>
                    {" "}
                    <Card.Title>
                      <h1>Problem Solving</h1>
                    </Card.Title>
                    <Card.Text>
                      I enjoy solving problems and gain a strong sense of
                      achievement from it.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card className={classes.card}>
                  <Card.Img
                    className={classes.image}
                    variant="top"
                    src={require("../../images/problemsolvingicon.svg")}
                  />
                  <Card.Body className={classes.card_body}>
                    {" "}
                    <Card.Title>
                      <h1>Quick Learner</h1>
                    </Card.Title>
                    <Card.Text>
                      I am able to learn and pick things up quickly.
                    </Card.Text>
                  </Card.Body>
                </Card>{" "}
                <Card className={classes.card}>
                  <Card.Img
                    className={classes.image}
                    variant="top"
                    src={require("../../images/problemsolvingicon.svg")}
                  />
                  <Card.Body className={classes.card_body}>
                    {" "}
                    <Card.Title>
                      <h1>Keen to Learn</h1>
                    </Card.Title>
                    <Card.Text>
                      Above all, I have the hunger and passion to acquire more
                      knowledge.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Why;
