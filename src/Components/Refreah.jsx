import React, { Component } from 'react'

export class Refresh extends Component {

    constructor(){
        super()
        this.refreshNow = this.refreshNow.bind(this); 
    }

    refreshNow(){
        this.forceUpdate();
    }
 
  render() {
    return (
      <div>
        <button className="btn btn-info text-light" onClick={this.refreshNow}>
          Refresh
        </button>
        <h3>{Math.random()}</h3>
      </div>
    );
  }
}

export default Refresh
