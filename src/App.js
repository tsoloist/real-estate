import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header.js';


class App extends Component {
  state = {
    showInfoDetails: false
  }

  ToggleMoreInfoHandler = () => {
    const doesShow = this.state.showInfoDetails;
    this.setState({showInfoDetails: !doesShow})
  }

  render() {
    const contactStyle = {
      backgroundImage: "url('../images/contact.png')",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: '3px center',
      backgroundSize: '40px 40px'
    }
    return (
      <div className="App">
        <Header click={this.ToggleMoreInfoHandler} 
        condition={this.state.showInfoDetails} style={contactStyle} />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
