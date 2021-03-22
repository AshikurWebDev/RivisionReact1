import React, { Component } from 'react'

export class State extends Component {
    constructor(){
        super()
        let obj = {
            name: "Ahikur Rahman",
            age: ["50","69", "70"],
            weight: {
                class7 : ["38", "48", "58", "68"],
                class8 : "43",
                class9: "48"
            }
        }

        this.state = obj;
    }
    render() {
        return (
            <div>
                    <h2>My Name {this.state.name}</h2>
                    <h2>My Age {this.state.age[2]}</h2>
                    <h2>My Weight {this.state.weight.class7[2]}</h2>
            </div>
        )
    }
}

export default State
