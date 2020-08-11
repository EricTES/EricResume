import React, { Component } from "react";
import HeroSection from "./Components/Hero/Hero";
import Intro from "./Components/Introduction/Intro";
import Projects from "./Components/Projects/Projects";
import Experiences from "./Components/Experiences/Experiences";
import Why from "./Components/Why/Why";
import Footer from "./Components/Footer/Footer";

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />
        <Intro></Intro>

        <Projects></Projects>
        <Experiences></Experiences>

        <Why></Why>
        <Footer></Footer>
      </div>
    );
  }
}
export default HomePage;
