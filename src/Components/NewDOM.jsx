import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export class NewDOM extends Component {
  myFun() {
    let container = document.getElementById("myId");
    let element = <h1>My Name is Rain. I am from React Dom</h1>;
    let callback = function(){
        alert("Hi I am Call back Function");
    }
    // ReactDOM.render(element, container, callback); render & hydrate method are same this method work exactly same.
    ReactDOM.hydrate(element, container, callback);
  }
  render() {
    return (
      <div>
        <button onClick={this.myFun} className="btn btn-info text-light">
          Change
        </button>
        <h1 id="myId">My Name is Ahikur Rahman</h1>
      </div>
    );
  }
}

export default NewDOM
