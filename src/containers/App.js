import React, { Component } from 'react';

import logo from '../logo.svg';
import '../App.css';

import ButtonJoin from '../components/ButtonJoin';
import FormIntroduce from '../components/FormIntroduce';
import ImageCard from '../components/ImageCard';
import ImageInput from '../components/ImageInput';

class App extends Component {

  state = {
    playingOn: false
  };

  render() {

    const { playingOn } = this.state;

    return (
      <div className="App ui equal width center aligned padded grid">
        <div className="row">
          <div className="column grid">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-title">Welcome to React</h1>
            </header>
            {
              <div>
                <ButtonJoin />
                <ImageCard />
                <ImageInput />
                <FormIntroduce />
              </div>
            }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
