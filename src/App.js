import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';

const app = new Clarifai.App({
  apiKey: '1c2b03fe40a04c859c1dc5a20ff6b097'
 });

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


class App extends React.Component {
  constructor(){
    super();
    this.state={
      input:'',
      imageUrl: '',
    }
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input});
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(
    function(response) {
      // do something with response
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
    },
    function(err) {
      // there was an error
    }
  );
  } 

  onInputChange = (event) =>{ 
    this.setState({input: event.target.value})
  }
  
  render(){
    return (
      <div className="App">
        <Particles className="particles" params={partivlesOptions} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    );
  }
}
 

export default App;
