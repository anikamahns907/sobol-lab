import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './Components/HomePage';
import ContactPage from './Components/ContactPage';
import AboutPage from './Components/AboutPage';
import Projects from './Components/Projects';
import Research from './Components/Research';

import oncology from './photos/oncology.jpeg';
import blood from './photos/blood.jpeg';
import slide from './photos/slide.JPG';
import slide2 from './photos/slide2.JPG';
import logo from './photos/logo.jpeg';




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: 0,
    };

    this.images = [
      slide,
      oncology,
      blood,
      slide2
      // Add more image URLs here
    ];
  }
  componentDidMount() {
    console.log("hi")
    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        currentImage: (prevState.currentImage + 1) % this.images.length,
      }));
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { currentImage } = this.state;

    return (
      <Router>
        <div>
          <div className="menuBar">
          <div className="logoContainer">
              <img src={logo} alt="Logo" className="logo" />
            </div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/research">Research</Link>


          </div>
          <div className="carousel-container">
          {this.images.map((image, index) => (
          <div key={index} className="carousel-image-container">

            <img
              key={index} 
              src={image}
              alt={`Carousel Image ${index}`}
              className={`carousel-image ${index === currentImage ? 'active' : ''}`}
            />
                    </div>

          ))}
        </div>

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />


          </Routes>

          <div className="frontPage">
            <h1>Sobol Lab</h1>
            <div className="introduction">
              <div className="text-container">
                <p>
                Welcome to the Sobol Lab website, a dedicated lab for oncology research and innovation. As a team affiliated with the renowned Legorreta Cancer Center at Brown University, we are at the forefront of groundbreaking cancer research programs.
                </p>
                <p>
                Our mission is to bridge the gap between basic scientific discoveries and real-world applications in the field of oncology. With a diverse group of researchers, clinicians, and experts, we strive to unravel the complexities of cancer and develop innovative therapeutic approaches.
                </p>
                <p>
                From interdisciplinary clinical studies to translational and population research, we aim to bring cutting-edge treatments and cancer prevention strategies to patients throughout the State of Rhode Island. Join us on this exciting journey as we work towards transforming the landscape of cancer care and making a lasting impact in the fight against this devastating disease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;