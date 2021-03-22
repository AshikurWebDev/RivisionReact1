import React, { Component } from 'react'

export class State2 extends Component {
    constructor(){
        super()
        this.state={
            name: "Ahikur Rahman"
        }
    }
    changeName(a){
        this.setState({name: a});
    }
    render() {
        return (
            <div>
                <h1>{this.state.name}</h1>
                <button className="btn btn-success" onClick={this.changeName.bind(this, "Abdullah")}>Change Name</button>
            </div>
        )
    }
}

export default State2
