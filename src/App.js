import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const partivlesOptions = {
  particles: {
    number: {
      value: 100,
      density:{
        enable: true,
        value_area: 600,
      }
    }
  }
}


function App() {
  return (
    <div className="App">
      <Particles className="particles" params={partivlesOptions} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/* <FaceRecognition /> */}
    </div>
  );
}

export default App;
