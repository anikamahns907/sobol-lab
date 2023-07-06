import React from 'react';
import oncology from '../photos/oncology.jpeg';
import blood from '../photos/blood.jpeg';
import slide from '../photos/slide.JPG';
import slide2 from '../photos/slide2.JPG';



class PhotoPage extends React.Component {
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

    
    return ( <div className="carousel-container">
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
  </div>)
    ;
  }
}

export default PhotoPage;
