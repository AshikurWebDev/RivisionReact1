import React, { Component } from 'react'

export class FromClass extends Component {
     DoThisFromClass()
    {
        alert("Button is Clicked From class.")
    }
    render() {
        return (
          <>
            <button onClick={this.DoThisFromClass}>Click Me from class</button>
            <h1>I am from {this.props.name}</h1>
          </>
        )
    }
}

export default FromClass

