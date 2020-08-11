import React, { Component } from "react";
import classes from "./Project.module.css";
import Modal from "../Modal/Modal";
import { Button } from "react-bootstrap";
import { render } from "@testing-library/react";

class Project extends Component {
  state = { modalShow: false };
  setModalShow = (show) => {
    this.setState({ modalShow: show });
  };
  render() {
    return (
      <div>
        <div className={classes.top_layer}>
          <h2>{this.props.information.title}</h2>
          <p>{this.props.information.technology}</p>
          <Button
            className={classes.learn_button}
            variant="outline-primary"
            onClick={() => this.setModalShow(true)}
          >
            Learn More
          </Button>
        </div>
        <img className={classes.projects_picture} src={this.props.imageurl} />
        <Modal
          show={this.state.modalShow}
          onHide={() => this.setModalShow(false)}
          title={this.props.information.title}
          desc={this.props.information.description}
        />
      </div>
    );
  }
}

export default Project;
