import React, { Component } from 'react'
import NameSpace from './NameSpace';
import namespaceData from '../data/namespaceData';

export default class Kubernetes extends Component {
  state = {
    namespaces: {}
  };

  loadSampleData = () => {
    this.setState({ namespaces: namespaceData });

  }

  render() {
    return (
      <div>
        <ul>
            {Object.keys(this.state.namespaces).map(key => (
              <NameSpace 
                key={key}
                index={key}
                details={this.state.namespaces[key]}
               />             
            ))}
            <button onClick={this.loadSampleData}>Click</button>
        </ul>
      </div>
    )
  }
}
