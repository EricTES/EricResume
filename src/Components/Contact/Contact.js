import React, { Component } from "react";
import classes from "./Contact.module.css";
import { Container, Row, Col,  Button, Form} from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import emailjs from 'emailjs-com';

class Contact extends Component {
  render() {
    const handleSubmit= (e)=>{
            e.preventDefault();

        emailjs.sendForm('sendToEricTes', 'template_CHrHFSQe', e.target, 'user_f51TOSEhwANOnFvvfX0LJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      this.props.history.push("/");
    
      }

    
    return( 
        
        <div className={classes.contact_section}>
<div className={classes.contact_info}>
  <p>Tel: 0487 33 22 58</p>
  <p>Email: erictes96@gmail.com</p>
</div>
<NavLink to="/"><img
                  className={classes.close_button}
                  src={require("../../images/closeButton.svg")}
                /></NavLink>
            <hr ></hr>
            <Container><Row className="justify-content-md-center">
               <h1 style={{backgroundColor:"white"}}>Contact</h1>
            </Row>
            <Row>
            <h1 style={{ fontSize: "2.5rem",textAlign:"center", margin:"auto",marginTop:"30px", fontWeight:"500" , width:"60%", lineHeight:"1.25"}}>Have a question? Want to reach me?
Please don't hesitate.</h1>
            </Row>
           

       
<Row> <div className={classes.form}>
            <Form onSubmit={handleSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Name</Form.Label>
      <Form.Control   name="from_name" type="text" placeholder="Enter name"  />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control name="from_email"type="email" placeholder="Email" />
    </Form.Group>
  </Form.Row>

<div className={classes.messageBox}>
  <Form.Group controlId="formGridMessage">
    <Form.Label>Message</Form.Label>
    <Form.Control name="message_html" as="textarea" rows={7}   />
  </Form.Group></div>

  <div className={classes.submit} >
  <Button  type="submit"  className={classes.submit_button}
                variant="outline-primary"
                size="lg">
    Submit
  </Button>
  </div>
 
</Form></div>
</Row>     
            </Container>
        </div>
        )
}
}

    export default Contact;