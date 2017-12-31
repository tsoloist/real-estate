import React, { Component } from 'react';
import './App.css';
import InfoCard from './InfoCard/InfoCard.js';

class App extends Component {
  state = {
    infoheadings: [
      {title: "Contact Information"},
      {title: "Investment Properties"},
      {title: "Hard Money Lenders"}
    ]
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <section id="hero1">
            <div className="info">
              <InfoCard title={this.state.infoheadings[0].title}>
                <p>Lenore Smith<br />Cell: 999-999-9999<br />address@address.com</p>
              </InfoCard>
              <InfoCard title={this.state.infoheadings[1].title}>
                <p>Search publicly available inventory below.Request access to unlisted properites.<br /><a href="">Send Request</a></p>
              </InfoCard>
              <InfoCard title={this.state.infoheadings[2].title} />
            </div>
          </section>
          <section id="hero2">
            <h1 className="App-title"><span>Welcome. I'm Lenore Smith</span><br />Atlanta's Investment Property Specialist</h1>
            <h2>Get access to exclusive unlisted properties in Atlanta and surrounding areas</h2>
          </section>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
